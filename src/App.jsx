
import React, { useState } from "react";
import footer from "./footer";
import Student from "./Student";
import Tabutton from "./Tabutton";
function header(){
  return<h1>Welcome To TR Movies</h1>
}
function Flower(){
  return (
    <div>
      <img src="https://images.sftcdn.net/images/t_app-cover-m,f_auto/p/43213a60-9b5f-11e6-8885-00163ed833e7/3659785972/3d-wallpaper-screenshot.jpg" width={340}height={350} alt="" />
    </div>
  )
}
// // dynamic value applied
// let age = [1,2,3,4]
// function Dynamic_value(max){
//  // console.log((Math.floor(Math.random() * (max+1))))
//   return Math.floor((Math.random() * (max+1)));
  
// }
//dynamic_price_applied
const price= []
function Dynamic_value(val){
  console.log((Math.floor(Math.random()*(val+1))))
}
 
 
function handle_obj(val){
  
  var x = document.getElementById("01").value;
  document.getElementById("demo").innerHTML = x; 
  var y = document.getElementById("02").value;
  document.getElementById("demo1").innerHTML = y; 
 
  console.log(val)
}


function App() {
 
  return (
    <div>
    <main>
    <menu>
      
      {header()}
      <h2>Avatar: The Way of Water</h2>
        <br />
        <input type="date"></input>
       
        </menu> 
        <br />
       
      <img src="https://c4.wallpaperflare.com/wallpaper/658/794/474/3d-movies-avatar-picture-3d-movies-wallpaper-preview.jpg" width={350}height={200}  alt="" />
      <h3>Theater_Name : TR Theater </h3>
    
      <h3>Row : 3</h3>
     
      <h3>Seat_Count : s09</h3>
      <input type="checkbox" id="01" value="200" />
      <input type="checkbox"id="02" value="150" />
      <input type="checkbox" id="03" value="500" /><br />
      <input type="checkbox" id="04" value="250" />
      <input type="checkbox"id="05" value="300" />
      <input type="checkbox"id="06" value="350" /><br />
      <input type="checkbox"id="07" value="100" />
      <input type="checkbox" id="08" value="50" />
      <input type="checkbox" id="09" value="650" />
      <div>
      <button onClick = {()=>handle_obj()}>Book_Now </button>
        
        <button onClick = {()=>handle_obj('Your Movie Ticket Book Successfully')}>Success </button>
        
        <button onClick = {()=>handle_obj('You Are Cancel The Ticket,Amount will be return in 24-hours')}>Cancel </button>
        </div>
        <p id="demo"></p>
        <p id="demo1"></p>
    </main>
        {/* {footer()} 
      <Student name = "sujatha" age = {22} isStudent={"False"}/> */}
      <br /> 
        
         
    </div>
  )
  
}

export default App;
