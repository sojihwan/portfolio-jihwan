import Body from './Body/Body';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import './App.css'

function App() {
  return (
    <div>
      <img className='mainimg' src='Img/20200817_140755.jpg'/>
      <Header/>
      <Nav/>
      <Body/>
    </div>
  );
}

export default App;
