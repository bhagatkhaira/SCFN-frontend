import React, { useState, useEffect } from 'react';
import { getUser, removeUserSession } from '../../Utils/Common';
import './Dashboard.css';
import TopNavigation from '../../components/TopNavigation/TopNavigation';



function Dashboard(props) {
  const user = getUser();

  const [slideIndex, setIndex] = useState(1);

  useEffect(() => {
    
    plusSlides(slideIndex);
    console.log(slideIndex);
  },[]);


  const plusSlides =(n)=> {
    //slideIndex += n
    setIndex(slideIndex + n)
    //let n = 1;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex > slides.length) {setIndex(a => 1)}    
    if (slideIndex < 1) { setIndex(a => slides.length) 
      //slideIndex = slides.length
    }
    //console.log(getValue());
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    //for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex-1].style.display = "block";  
    //dots[slideIndex-1].className += " active";
  }
 

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (

    <React.Fragment>
       
    
            <div style={{display: "flex", padding: '25px'}}>
            <div style={{width: "43%", height: "400px"}}>
              <h1 style={{marginBottom: '15px', color: "#2b5ca1e6", fontSize: "60px", paddingLeft: "30px"}}>FUEL YOUR</h1>
              <h1 style={{marginBottom: '15px', marginTop: '1px', color: "#b64f60f5", fontSize: "60px", paddingLeft: "30px"}}>PASSION</h1>
              <div style={{fontWeight: '500', marginLeft: '33px'}}>Stock Car Coins Discount App Is Designed To Save You Money On Your Daily Purchases And Secure Sponsorship For Your Favorite Motorsports Team, Track, Series, Or Charity.</div>
              
              <div style={{ display: 'flex', padding: '22px 0px 0px 26px'}}>
                <button style={{background: '#2b5ca1e6'}} className='div-10' role="button">ClubHouse</button>
                <button style={{background: '#b64f60f5'}} className='div-10' role="button">MarketPlace</button>
              </div>
              </div>

              <div className="slideshow-container">

        <div className="mySlides fade">

        <img  src={require('../../media/Kimi-Riakkonen.jpg')} style={{height: "32rem",width:'48rem', marginLeft: '12rem', opacity: '.9' }} />
        <div className="text">Kimi Riakkonen</div>
        </div>

        <div className="mySlides fade">

        <img  src={require('../../media/jeffGordon.png')} style={{height: "32rem",width:'48rem', marginLeft: '12rem', opacity: '.9' }} />
        <div className="text">Jeff Gordon</div>
        </div>

        <div className="mySlides fade">

        <img  src={require('../../media/Sebestian.png')} style={{height: "32rem",width:'48rem', marginLeft: '12rem', opacity: '.9' }} />
        <div className="text">Sebestian Vettel</div>
        </div>

        <div className="mySlides fade">

        <img  src={require('../../media/lewisHamilton.jpg')} style={{height: "32rem",width:'48rem', marginLeft: '12rem', opacity: '.9' }} />
        <div className="text">Lewis Hamilton</div>
        </div>

        <div style={{position:'absolute', top: '50%', left: '17%'}}>
        <div> <a className="prev" onClick={() => plusSlides(1)}>❮</a></div>
        <div style={{marginTop: '40px'}}> <a className="next" onClick={() => plusSlides(-1)}>❯</a></div>
        </div>

        </div>
          
            </div>
    </React.Fragment>
  );
}

export default Dashboard;
