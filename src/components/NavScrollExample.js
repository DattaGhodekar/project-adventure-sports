import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css";
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";




function NavScrollExample() {
  const navigate = useNavigate();
  let SignIn=()=>{
    navigate("/SignIn")
  }
let book=()=>{
  navigate("/Booking")
}
  let about=()=>{

    navigate("/Aboutus")
  }

  let SignUp=()=>{
    navigate("/login")
  }
let contact=()=>{
  navigate("/Contactus")
}
  let chess=()=>{
    navigate("/Chess")
  }

  let carrom=()=>{
    navigate("/Carrom")
  }
  let navi1=()=>{
    navigate("/Racecars")
  }
  let navi10=()=>{
    navigate("/Virtual")
  }
  let navi2=()=>{
    navigate("/Virtual")
  }
  let navi3=()=>{
    navigate("/circadian")
  }
  let navi4=()=>{"/Rappling"}
  let navi5=()=>{}
  let navi6=()=>{}
  let navi7=()=>{
    navigate("/trampoline" )
  }
  let navi8=()=>{}
  let navi9=()=>{}
  return (
    <>
    <Helmet>
      <script src="assests/Filter.js">
      
      </script>
    </Helmet>
     <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand brand" href="#">
            <h1>Apex Adventure</h1>
          </a>
          <button
            className="navbar-toggler bg-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "burlywood" }}
                  
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "burlywood" }}>
                  Adventure Activities
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "burlywood" }}
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    Restaurent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={about}>
                      About us
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={contact}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-warning me-2" type="submit" onClick={SignUp}>
                Sign In
              </button>
              <button className="btn btn-warning me-1" type="submit"onClick={SignIn}>
                Sign Up
              </button>
              <button className="btn btn-warning" type="submit"onClick={book}>
                Booking
              </button>
            </div>
          </div>
        </div>
      </nav>
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
   
   <div className="carousel-inner">
     <div className="carousel-item active c-item">
       <img src="assests/images/hospital.webp" className="d-block w-100 img-item" alt="..."/>
       <div className="carousel-caption d-none d-md-block add ">
         
         <h1>Unlimited Adventure with
           50+ Adrenaline Pumping Activities</h1>
       </div>
     </div>
     
   </div>
  
 </div>

<ul className="nav nav-pills bg-dark list">
<li className="nav-item">
 <a className="nav-link active sublist " aria-current="page" href="#"  >Activities</a>
</li>
<li className="nav-item">
 <a className="nav-link" href="#" style={{ color: "white" }}>Home</a>
</li>
<li className="nav-item">
 <a className="nav-link" href="#" style={{ color: "white" }}>discover</a>
</li>
<li className="nav-item">
 <a className="nav-link disabled">Disabled</a>
</li>
</ul>
<nav className="navbar navbar-expand-lg sub-navbar"> 
 <div className="collapse navbar-collapse filter" id="nav" >

<h3><button className="btn btn-light">jumbopass</button></h3>


</div>
<button className="navbar-toggler" data-toggle="collapse" data-target="#nav"><span className="navbar-toggler-icon"></span></button>
</nav>
<div id="filter" className="bg-dark">
<div className="row  justify-content-center mb-4" >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning ">
 <img src="assests/images/Labo.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h1 className="card-text">Laboratory services</h1>

</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="assests/images/x-ray.jpeg"  className="card-img-top" alt="..."/>
 <div className="card-body">
   <h1 className="card-text">X-ray/Radiology</h1>

 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center  mb-4 " >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning ">
 <img src="assests/images/sur.jpeg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h1 className="card-text">Surgical ICU</h1>

</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="assests/images/Surgery.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h1 className="card-text">Specialty Surgical Services</h1>

 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center  mb-4 " >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning">
 <img src="assests/images/emr.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h1 className="card-text">Emergency Medical Services</h1>
 
</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="assests/images/blood.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h1 className="card-text">Blood Services </h1>

 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center mb-4 " >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning ">
 <img src="assests/images/pharm.jpg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h1 className="card-text">Pharmacy Service</h1>

</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="assests/images/ultra.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h1 className="card-text">Ultrasound Scan Service</h1>
 
 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center mb-4 " >
<div className="col-sm-12 col-md-9 ">
<div className="row ">
<div className=" card col-sm-4 col-md-6 card border-warning">
 <img src="assests/images/home.jpeg" className="card-img-top" alt="..."/>
<div className="card-body">
 <h1 className="card-text">Home Nursing Services</h1>
 
</div>
</div>
<div className=" card col-sm-4 col-md-6 card border-warning" >
 <img src="assests/images/short.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h1 className="card-text">Short Term Hospitalization</h1>

 </div>
</div>
</div>
</div>
</div>
<div className="row  justify-content-center mb-4r " >
<div className="col-sm-12 col-md-9 ">
<div className="row">
<div className=" card col-sm-4 col-md-6 card border-warning ">
 <img src="assests/images/ward.avif" className="card-img-top" alt="..."/>
<div className="card-body">
 <h1 className="card-text">Spacious General Wards</h1>

</div>
</div>
<div className="card col-sm-4 col-md-6 card border-warning" >
 <img src="assests/images/CT.jpg" className="card-img-top" alt="..."/>
 <div className="card-body">
   <h1 className="card-text">CT Scan Services</h1>
  
 </div>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}

export default NavScrollExample;