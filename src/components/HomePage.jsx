import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import image from './css/image/homepage.jpg';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <img src={image} alt="" />
        <div className='filter'></div>
          <div className='content'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <button>Find your van</button>
          </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
