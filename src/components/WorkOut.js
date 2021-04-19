import React from 'react';
import workout from './workout.jpg';
import strtch from './stretch.jpg';
import lunges from './lunges.jpeg';
import plank from './plank.jpeg';
import pushup from './PushUp.jpeg';
import sideplank from './side plank.jpeg';
import squat from './squat.jpeg';
import ChildPose from './childPose.jpeg';
import Butterfly from './Butterfly.jpeg';
import ToeTouch from './ToeTouch.jpeg';
import DownwardDog from './DownwardDog.jpeg';
import SkyReach from './SkyReach.jpeg';
import WideLegBend from './WideLegBend.jpeg';
import Bridge from './Bridge.jpeg';
import facebook from '../facebook.png'
import instagram from '../instagram.png'
import twitter from '../twitter-sign.png'



import * as ReactBootStrap from 'react-bootstrap';

function WorkOut() {
  return (
    <div className="App">

      <header className= "App-header">

        <div className="Intro">

          <div className="P">
            <h2>
              Working out 
            </h2>
            <p>
              Working out is really great for your health.
              If you are planning to be a really healthy person, with a fitness body ,
              you absaulotly need to follow a workout routine . It's important to build muscles and get rid of all the extra fats in your body
              . It will also get out all the negative energy you have 
            
                
            </p>
          </div>

          <img src={workout}/>
        </div>

        <div className="Intro">
        <img src= {strtch}/>

          <div className= "P">

            <h2>
              Stretching
            </h2>

            <p>
              You might be wondering "what's the point of stretching?" right? . Stretching is very
              important . If you did stretches when you wake or before work out , you will make your muscles ready 
              to start a new day , or you will prevent injuries from happenning while you're working out 
              . If you did some stretches before sleeping or after working out , then you will relax your muscles and prevent muscles spasm from happenning
              . Do you still think stretching is not important ? 
            </p>
          </div>
        </div>
        
      

        <div className="WorkOut-Routine">
          <h2>
            Work out exersices
          </h2>

          <ul>
            <li>1 min jumping (warming up)</li>
            <li>1 min lunges</li>
            <li>30 sec side plank </li>
            <li>30 sec push up on your knees</li>
            <li>you can have a short rest here </li>
            <li>30 sec plank</li>
            <li>30 sec normal push up</li>
            <li>1 min sit ups</li>


          </ul>

          <h3>
            This is your 5 mins work out ! keep up to have a good results!
          </h3>
        </div>

        <div className = "Stretches-Routine">
          <h2>
            Stretches exersices
          </h2>
          <ul>
            <li>1 min child pose</li>
            <li>30 sec bridge</li>
            <li>1 min butterfly pose</li>
            <li>30 sec sky reach</li>
            <li>1 min toe touch</li>
            <li>30 sec downward dog</li>
            <li>30 sec wide leg bend</li>
          </ul>

          <h3>
            This is your 5 min stretches ! you can do half of it before working
            out, and the other half after working out ! just do it whenever you want !
          </h3>
        </div>

        <div className="Table">
          <ReactBootStrap.Table striped bordered hover>
            <thead>
               <tr>
      
                  <th><img src={lunges}/></th>
                  <th><img src={plank}/></th>
                  <th><img src={pushup}/></th>
                  <th><img src={sideplank}/></th>
                  <th><img src={squat}/></th>
                  
               </tr>
            </thead>
            <tbody>
               <tr>
     
                 <td>Lunges</td>
                 <td>Plank</td>
                 <td>Push Up</td>
                 <td>Side Plank</td>
                 <td>Squat</td>
  
     
               </tr>

           </tbody>

          </ReactBootStrap.Table>
        </div>
        <div className="Table">
          <ReactBootStrap.Table striped bordered hover>
            <thead>
               <tr>
      
                  <th><img src={ChildPose}/></th>
                  <th><img src={Butterfly}/></th>
                  <th><img src={ToeTouch}/></th>
                  <th><img src={DownwardDog}/></th>
                  <th><img src={SkyReach}/></th>


               </tr>
            </thead>
            <tbody>
               <tr>
     
                 <td>Child Pose</td>
                 <td>Butterfly Pose</td>
                 <td>Toe Touch</td>
                 <td>Downward Dog</td>
                 <td>Sky Reach</td>

     
               </tr>

           </tbody>

          </ReactBootStrap.Table>
        </div>

        <div className="SmallTable">
          <ReactBootStrap.Table striped bordered hover>
            <thead>
               <tr>
                  <th><img src={Bridge}/></th>
                  <th><img src={WideLegBend}/></th>

               </tr>
            </thead>
            <tbody>
               <tr>
                 <td>Bridge</td>
                 <td>Wide Leg Bend</td>

     
               </tr>

           </tbody>

          </ReactBootStrap.Table>
        </div>
       
        <div className="footer">
            <p><a href="https://www.cdc.gov/hrqol/wellbeing.htm?fbclid=IwAR2oI_V2Z0O1WDXCeXh23gRsHwH8BN-
            -lKLU-cMV15c3cU21luGr69pCr2o" target="_blank">Learn More </a> 
            About Mental Health OR Contact Us On:</p>
            <div className="icons">
              <a href="https://www.facebook.com/" target="_blank"><img src={facebook}/></a>
              <a href="https://www.instagram.com/" target="_blank"><img src={instagram}/></a>
              <a href="https://www.twitter.com/" target="_blank"><img src={twitter}/></a>
            </div>
          </div>
    
      </header>
    </div>
  );
}

export default WorkOut;
