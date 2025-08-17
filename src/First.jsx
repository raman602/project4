import React from 'react'
import img from "./assets/images.png";
import img2 from "./assets/brger1.jpg";
import img3 from "./assets/berger3.jpg";
import img4 from "./assets/berger4.jpg";
import img5 from "./assets/item1.jpg";
import img6 from "./assets/item2.jpg";
import img7 from "./assets/item3.jpg";
import icon1 from "./assets/facebook.png"
import icon2 from "./assets/instagram.png"
import icon3 from "./assets/twitter.png"
import icon4 from "./assets/linkedin.png"


import  "./first.css"
function First() {
  return (
    <div>
      <div className='landingpage'>
        <div className='navbar'>
           <img  className="logo" src='https://cdn.freebiesupply.com/logos/large/2x/burger-king-4199-logo-svg-vector.svg'></img>
             <input className='search' type='text' placeholder='Search iteams'></input>
           
              <li><a href=''>Home</a></li>
              <li><a href=''>Menu</a></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Contact</a></li>
           
           <img className='loginlogo' src={img}></img>
        </div>
        
        <div className='berger'>Bite Into Happiness With<br/> Every Berger <br/> <span>Fresh  ingrients.Juicy patties <br/>unforgettables taste</span> <br/><button className='order'>View our Menu</button></div>
         <div className="section">
          <div className='ourmenu'>Our Menu</div>
          <h2 className='our'>Our Best Seller</h2>
            <div className='cards1'>
              <div className='item1'>
                <img src={img3}></img>
                <h3>Chees Patty Madness</h3>
                <h4>Melted cheese oozing from every bite.</h4>
              </div>
              <div className='item2'>
                <img src={img2}></img>
                <h3>Double Blast Burger</h3>
                <h4>Two layers of meaty perfection With fresh veggies</h4>
              </div>
              <div className='item3'>
                <img src={img4}></img>
                <h3>Veggie Supreme</h3>
                <h4>Perfect for our lovers. Heslty and tasty </h4>
              </div>
            </div>
             <div className='cards2'>
              <div className='item1'>
                <img src={img5}></img>
                <h3>Chees Patty Madness</h3>
                <h4>Melted cheese oozing from every bite.</h4>
              </div>
              <div className='item2'>
                <img src={img6}></img>
                <h3>Double Blast Burger</h3>
                <h4>Two layers of meaty perfection With fresh veggies</h4>
              </div>
              <div className='item3'>
                <img src={img7}></img>
                <h3>Veggie Supreme</h3>
                <h4>Perfect for our lovers. Heslty and tasty </h4>
              </div>
            </div>
         </div>
        {/* section */}
          <div className='aboutsection'>
             <div className='heading'>Who We Are</div>
             <div className='disp'>Discription</div>
            <div className='about' >
              <div className='line'></div>
              <p className='p'><li> At BergerBite,we belive burgers should be more than just food -they should be an expeirience.Started in 2020,we've served tousandds of happy customers with our homeemade sauces,secret spicies and 100% fresh ingrients.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquid cupiditate iusto, aliquam ea praesentium temporibus voluptate dicta nostrum minus at tempore sequi quis! Pariatur vero odit natus id et iste exercitationem earum itaque. Placeat, harum beatae. Animi in asperiores modi officiis necessitatibus ex, labore alias sed illo tempora adipisci.</li></p>
            </div>
          </div>
        <div className='cta'>
          <div className='ctaheading'>Ready for your<br/> burger break</div>
          <div className='btns'>
            <button  className='btn' type='button' >Order Now</button>
            <button type='button' className='btn2'>Call Us</button>
          </div>

        </div>
        <div className='contactsection'>
           <div className='heading'>Contact Section</div> 

        </div>
        <div className='login'>
         <div class="login-container">
    <h2>Welcome to TasteBite</h2>
    <form id="loginForm">
      <input className='user' type="text" id="username" placeholder="Username" required />
      <input className='pass' type="password" id="password" placeholder="Password" required />
      <button  className='submit' type="submit">Login</button>
    </form>
    <p class="message">Don't have an account? <a href="#">Register</a></p>
  </div>         
        </div>
        <div className='footersection'>
          <div className='para1'>
           <div className='list1'>
           <h2>BK'INFO</h2>
           <li>About</li>
           <li>Fresh taste</li>
           <li>Invester Relation </li>
           <li>Fssal</li>
           </div>
           <div className='list2'>
           <h2>CONTACT</h2>
           <li>FAC's&support</li>
           <li>Franchess</li>
           <li>Write to us</li>
           <li>Carees</li>
           <li>Customer support</li>
           </div>
          </div>
          <div className='para2'>
            <div className='list3'>
            <h2>BK'CARES</h2>
            <li>Nutrition</li>
            <li>creat Future</li>
            <li>Trust&taste</li>
            <li>Nutrition Information</li>
            </div>
            <div className='list4'>
            <h2>LEGAL</h2>
            <li>Terms&Condition</li>
            <li>Praivacy Polacy</li>
            <li>Promotion</li>
            <li>Safty</li>
            </div>
            
          </div>
        
        <div className='icons'>
          <div className='icon'>
            <img src={icon1}></img>
            <img src={icon2}></img>
            <img src={icon3}></img>
            <img src={icon4}></img>
          </div>
        </div>
        
        
        </div>
      
      </div>

    </div>
  )
}

export default First
