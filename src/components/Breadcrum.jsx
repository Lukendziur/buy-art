import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from 'react-router-dom'
import './Navbar/header.css'

const routes = [
  { path: "/collections/:id"}
  ,
  { path: "/collections/:id/:id"},
  { path: "topic/nature/:id"},
  { path: "topic/nature/:id/:id"},
  { path: "topic/people/:id"},
  { path: "topic/people/:id/:id"},

];

const BreadCrumbCustom = () => {
  const breadcrumbs = useBreadcrumbs(routes);


  return (
    <>
        <div className="bread-container">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link to={match.pathname} key={match.pathname} className='BreadCrumb' >
            <span className="bread"> 
          {breadcrumb}
            </span>
        </Link>

))}
</div>
    </>
  );
};


export default BreadCrumbCustom;