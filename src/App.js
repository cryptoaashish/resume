import Header from './components/header';
import Carousel from './components/carousel';
import Main from './components/main';
import './App.css';


function App() {
  return (
    <div className='container'>
      <Header name="Aashish Arora" email="arora.aashish@rocketmail.com"/>
      <Carousel />
      <Main />
    </div>
  );
}

export default App;
