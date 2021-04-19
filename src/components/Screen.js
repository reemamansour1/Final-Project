import logo from './healthy.png';
import './Screen.css';

function Screen() {
  return (
    <div className="screen">
      <div className="ball1"></div>
      <div className="ball2"></div>
      <div className="ball3"></div>
      <div className="ball4"></div>
      <div className="ball5"></div>
      <img src={logo} className="logo" alt="logo" />
      <h2 className="descreption">Healthy LifeStyle</h2>
    </div>
  );
}

export default Screen;