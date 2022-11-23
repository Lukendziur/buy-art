import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import { searchByQuery } from "../../services/service";
import { imgGalleryFunction } from "../../utils/util";
import Card from "../../components/Card";
import BreadCrumbCustom from "../../components/Breadcrum";

const SearchSection = () => {
  
  const [searchResultArray, setSearchResultArray] = useState([]);
  const [resultsImg, setResultsImg] = useState([])
  const formik = useFormik({
      enableReinitialize: true,
      initialValues: {inputControl:''},
      onSubmit: (values) => {
          getSearch(values.inputControl);
      
        },
    });
    const { values, handleSubmit, handleChange } = formik;

    const getSearch = async (paramToSearch) => {
    const res = await searchByQuery(paramToSearch);
    setSearchResultArray(res.results);
  };

  useEffect(() => {
    if (searchResultArray.length > 0) {
      const dataGroups = imgGalleryFunction(searchResultArray);
      setResultsImg(dataGroups);
    } 
    
  }, [searchResultArray]);

  return (
    <Container>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="inputControl"
          values={values.inputControl}
          onChange={handleChange}
        />
        <Button variant="outline-success" type="submit" >
          Search
        </Button>
      </Form>
      {resultsImg?.length > 0 && (
        <>
          <BreadCrumbCustom />
          <div className="row">
            {resultsImg.length > 0 &&
              resultsImg.map((arrImg, index) => (
                <div className="column" key={index}>
                  {arrImg.map((singleImg) => (
                    <Card
                      liked={singleImg.liked_by_user}
                      id={singleImg.id}
                      likes={singleImg.likes}
                      key={singleImg.id}
                      urls={singleImg.urls}
                      alt={singleImg.alt_description}
                    />
                  ))}
                </div>
              ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default SearchSection;
