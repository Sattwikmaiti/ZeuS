import React from "react";
import "./Home.css";

import {useState} from 'react'
import p1 from '../images/2.png'
import p2 from '../images/1.png'
import p3 from '../images/3.png'
import p4 from '../images/4.png'

const Home = () => {
  const [isSignUp, setSignUp] = useState("");
 
  window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    
    if(offset > 75)
     setSignUp('scroll')
    else 
      setSignUp('')
  });
  return (
    <> 
      <nav className={`${isSignUp}`}>
  <span>Logo</span>

  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>

<div className="imageslider container" >
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-wrap="true" data-interval="2000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img class="cara d-block w-100" src={p3}  alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="cara d-block w-100" src={p2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="cara d-block w-100" src={p3} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class=" cara d-block w-100" src={p4} alt="Fourth slide"/>
    </div>
  </div>

  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

<div className="motto ">
  <h2>OUR MOTTO</h2>
  <p style={{fontSize:'20px'}}>
  People will stare. Make it worth their while.
  </p>
</div>

<div className="services " style={{padidng:'30px',gap:'10px'}}>
  <h2 style={{padding:'30px'}}> TRENDING</h2>
<br></br>
  <div className="row">
    <div className="col">
         <img src= {p2} className="prdts"  />
    </div>

    <div className="col">
    <img src= {p2} className="prdts" />
    </div>

    <div className="col">
    <img src= {p2} className="prdts" />
    </div>
  </div>
</div>

<div className="motto" style={{padding :'120px'}}>
  <h2>Our Promise</h2>
  <p>
    We ensure you to get the best craftsmanship , you will experience in your life which will not only make you feel  one in million but also a royal luxury.
  </p>
</div>

<div className="services featured ">
  <h2>Featured Products</h2>

    <div className="r1" style={{width:'700px'}}>
        
        <div className="iw">
        <img className="fp"src={p1} style={{width:'300px',backgroundColor:'blue'}}/></div>
        <div className="iw">
        <img className="fp"src={p1} style={{width:'300px',backgroundColor:'blue'}}/></div>
        <div className="iw">
        <img className="fp"src={p1} style={{width:'300px',backgroundColor:'blue'}}/></div>

    </div>


  

      


</div>

<div className="services part">
  <h2>OUR STORES</h2>
   <div className="p1">
  <img className="h"src={p1} alt="g"/>
<svg>
  <path
        d="M 87 1 A 86 86 0 1 1 86.9 1"
        stroke="white"
        stroke-width="2"
        fill="none"/>
</svg>
</div>
<div className="p1">
  <img className="h"src={p1} alt="g"/>
<svg>
  <path
        d="M 87 1 A 86 86 0 1 1 86.9 1"
        stroke="white"
        stroke-width="2"
        fill="none"/>
</svg>
</div><div className="p1">
  <img className="h"src={p1} alt="g"/>
<svg>
  <path
        d="M 87 1 A 86 86 0 1 1 86.9 1"
        stroke="white"
        stroke-width="2"
        fill="none"/>
</svg>
</div>
</div>


<div className="hel" style={{paddingTop :'50px'}}>

<footer class="footer">
    <div class="container ">
        <div class="row">
            <div class="col-md-5">
                <h3> Zeus .in</h3>
                <div class="row">
                    <div class="col-3">
                        <ul class="list-unstyled">
                            <li><a href="">Product</a></li>
                            <li><a href="">Benefits</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">Team</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Craftsmanship</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Legal Terms</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>
               
                
            </div>
            <div class="col-md-2 my-1 ">
                <h5 class="text-md-right " >Contact Us</h5>
               
            </div>
            <div class="col-md-5">
                <form>
                    <fieldset class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset class="form-group text-xs-right">
                        <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</footer>



</div>


    </>
  );
};

export default Home;
