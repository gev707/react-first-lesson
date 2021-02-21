import './App.css';
import Car from './Components/Car';
import User from "./Components/User.jsx";
import Card from "./Components/Card.jsx";
function App() {
  const user = {
    name : 'Gev',
    surname : 'Margaryan',
    age : '28'
  }
  const user1 = {
    name : 'Lilia',
    surname : 'Karapetyan',
    age : '15'
  }

  const card = {
    title : 'Bird-1',
    avatarImg : 'https://cdn65.picsart.com/191777528003201.jpg?type=webp&to=min&r=640',
    avatarAlt : 'bird_1',
    cardText : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus qui officiis eligendi labore eos ab esse."
  }
  const card2 = {
    title : 'Bird-2',
    avatarImg : 'https://cdn130.picsart.com/322663180511201.jpg?type=webp&to=min&r=640',
    avatarAlt : 'bird',
    cardText : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus qui officiis eligendi labore eos ab esse."
  }
  const card3 = {
    title : 'Bird-3',
    avatarImg : 'https://cdn130.picsart.com/318787721404201.jpg?type=webp&to=min&r=640',
    avatarAlt : 'bird_2',
    cardText : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus qui officiis eligendi labore eos ab esse."
  }
  return (
    <div className="App">
      <h1>React Lesson</h1>
      <h2>This is Car Component</h2>
      <div className='d-flex'>
        <Car  name='BMW' color='Black' year='2012'/>
        <Car  name='Audi' color='Blue' year='2015'/>
        <Car  name='Tesla' color='White' year='2019'/>
      </div>
      <div className='userHolder'>
        <User name={user.name} surname={user.surname} age={user.age}/>
        <User name={user1.name} surname={user1.surname} age={user1.age}/>
      </div>
      <div className='cardHolder d-flex justify-content-around'>
        <Card title={card.title} img={card.avatarImg} alt={card.avatarAlt} cardText={card.cardText} active={true} />
        <Card title={card2.title} img={card2.avatarImg} alt={card2.avatarAlt} cardText={card2.cardText} />
        <Card title={card3.title} img={card3.avatarImg} alt={card3.avatarAlt} cardText={card3.cardText} />
        
      </div>
    </div>
  );
}


export default App;
