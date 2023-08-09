import './App.css';
import WebNavbar from "./components/WebNavbar"
import {Button, NavItem} from 'react-bootstrap';
import HomeCard from './components/HomeCard';
import CardsContents from './components/CardsContents';


function App() {
  const cards = CardsContents.map(item =>{
    return(
      <HomeCard
      key = {item.id}
      {...item}
      />
    )
  })
  return (
    <div className="App">
      <div>
      <WebNavbar/>
      </div>
      <div className='content-container d-flex   justify-content-center'>
        <div className='titles'>
        <h3 className='title_home'>Best-Tasting Extra Virgin Olive Oil From The Healthiest Plants</h3>
        <p className='desc_home'>Your premium resource for traceable and high-quality olive products      </p>
        <Button className='shop_now_btn ml-5' variant="">SHOP NOW</Button>

        </div>
        <div className='w-50'>
          <img className='w-75 ml-5 ' src='./Images/home_img1.png'></img>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center Partie_2_Home'>
       {cards}
      </div>
      <div className='d-flex Partie_3_Home'>
        <div>
          <h1 className='title_part3' >Bonté d'olive</h1>
          <p className='desc_part3'>Guidés par notre engagement indéfectible envers la durabilité et la transparence, nous nous efforçons sans relâche de localiser les sols les plus fertiles dans notre quête pour cultiver des oliviers de qualité supérieure. Nos efforts inlassables visent à exploiter la générosité de la nature pour fournir des olives qui portent la marque des avantages pour la santé, étayées par des preuves solides. Ce dévouement garantit que chaque produit que nous offrons incarne non seulement la qualité, mais aussi la vitalité qui découle d'une harmonie profonde avec l'environnement.</p>
          </div>
          <div>
            <img className='img_part3' src='./Images/part3.png'></img>
          </div>
      </div>

    </div>
  );
}

export default App;
