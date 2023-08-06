import './App.css';
import WebNavbar from "./components/WebNavbar"
import {Button} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <WebNavbar/>

      <div className='content-container d-flex   justify-content-center;
'>
        <div className='titles'>
        <h3 className='title_home'>Best-Tasting Extra Virgin Olive Oil From The Healthiest Plants</h3>
        <p className='desc_home'>Your premium resource for traceable and high-quality olive products      </p>
        <Button className='shop_now_btn ml-5' variant="">SHOP NOW</Button>

        </div>
        <div className='w-50'>
          <img className='w-75 ml-5' src='./Images/home_img1.png'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
