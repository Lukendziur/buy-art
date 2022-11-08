import React from 'react'
import {Form, Button} from 'react-bootstrap'

const SearchBar = () => {
  return (
    <>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
    </>
  )
}

export default SearchBar