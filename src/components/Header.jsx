import './css/HeaderFooter.css';
import {Link, useHref} from 'react-router-dom';

function Header(){
    return (
        <div>
            <div className='header'>
                <h1><a href='./'>#VANLIFE</a></h1>
                <div className='link'>
                    <Link id='home' to='/'>Home</Link>
                    <Link id='about' to='/about'>About</Link>
                    <Link id='vans' to='/vans'>Vans</Link>
                </div>
            </div>
        </div>
        
    )
}
export default Header