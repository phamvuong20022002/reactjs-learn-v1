import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { RxArrowLeft } from "react-icons/rx";

function DetailVan(){
    const location = useLocation()
    const detailVan = location.state
    return(
        <div>
            <Header/>
                <div className='detail-container'>
                    <div className='card-back'>
                        <i className='back-icon'><RxArrowLeft/></i>
                        <a href="../"> Back to all vans</a>
                    </div>
                    <div className='card-detail'>
                        <div className='card-image'>
                            <img src={require(`${detailVan.image}`)} alt="" />
                        </div>
                        <div className='card-content'>
                            <div className='style'>
                                <button className={detailVan.style}>{detailVan.style}</button>
                            </div>
                            <h1 className='title'>{detailVan.title}</h1>
                            <div className='price-unit'>
                                <span><strong className='price-detail'>{detailVan.price}</strong>/{detailVan.unit}</span>
                            </div>
                            <p className='decription'>{detailVan.description}</p>
                            <button className='bnt-rent'>Rent this van</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default DetailVan