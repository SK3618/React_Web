
import { Link } from 'react-router-dom';
import "./navbar.css"
export default function navbar(props){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body " style={{position:'fixed', zIndex:'999',width:'100%', height:'auto', top:'20px',borderRadius:'20px' }} data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand  text-danger-emphasis fs-2" to="/">Uttarakhand Unwind</Link>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={props.state} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={props.state2}to="/attractions">Attractions</Link>
        </li>
        <li className="nav-item">
          <Link className= {props.state3} to="/accomodation">Accomodations</Link>
        </li>
        <li className="nav-item">
          <Link className={props.state4} to="/suggestions">Suggestions</Link>
        </li>
        <li className="nav-item">
          <Link className={props.state5} to="/contact_us">Contact Us</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        </>
    );
}
