import './css/App.css';
import Header from "./Header";
import Footer from "./Footer";
import image from './css/image/aboutpage.jpg';
function About() {
    return (
        <div>
            <Header />
            <div className="ab-container">
                <div className="ab-image">
                    <img src={image} alt="" />
                </div>
                <div className="ab-content">
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)
                        <br /><br />
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    <div className='ab-box'>
                        <div className='ab-box-content'>
                            <h1>Your destination is waiting. Your van is ready.</h1>
                            <button>Explore our vans</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default About;