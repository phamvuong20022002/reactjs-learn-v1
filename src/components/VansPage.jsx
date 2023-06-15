import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import CardVans from './CardVans';
import { json } from 'react-router-dom';
import React, { useEffect } from 'react';
import DetailVan from './DetailVanPage';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

function Vans(data) {
    
    data = [
        {
            "image": "./css/image/vans1.png",
            "title": "Modest Explorer",
            "price": "$60",
            "unit" : "day",
            "style": "Simple",
            "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        },
        {
            "image": "./css/image/vans2.png",
            "title": "Beach Bum",
            "price": "$80",
            "unit" : "day",
            "style": "Rugged",
            "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        },
        {
            "image": "./css/image/vans3.png",
            "title": "Reliable Red",
            "price": "$100",
            "unit" : "day",
            "style": "Luxury",
            "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        },
        {
            "image": "./css/image/vans4.png",
            "title": "Dreamfinder",
            "price": "$65",
            "unit" : "day",
            "style": "Simple",
            "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        },
        {
            "image": "./css/image/vans5.png",
            "title": "The Cruiser",
            "price": "$120",
            "unit" : "day",
            "style": "Luxury",
            "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        },
        {
            "image": "./css/image/vans6.png",
            "title": "Green Wonder",
            "price": "$70",
            "unit" : "day",
            "style": "Rugged",
            "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
        }
    ]

    let selected = []

    useEffect(() => {
        getClickTag();
    }, []);

    function pushValue(value){
        if (!selected.includes(value)) {
            selected.push(value);
        }
    }

    const navigate = useNavigate();

    function getClickTag(){
        const van_container = document.getElementsByClassName('van-container')[0]
        van_container.addEventListener('click', (e)=>{
            e.preventDefault();
            if(e.target.tagName === 'SPAN'){
                e.target.style.border = '2px solid black';
                pushValue(e.target.innerHTML)
                FilterSelected(selected)
                // FilterCard(e.target.innerHTML)
            }
            else if(e.target.tagName === 'IMG') {
                let dataSelect = data.find(van => van.title === e.target.alt)
                if(dataSelect !== undefined) {
                    navigate('/vans/detail/',{
                        state: dataSelect
                    })
                }
            }
            else if(e.target.tagName === 'BUTTON'){
                let tag_box = document.getElementsByClassName('tag-box');
                for(let i = 0; i < tag_box.length; i++){
                    tag_box[i].style.border = 'none'
                }
                selected = []
                FilterSelected(selected)
            }
            else {
                if(e.target.closest('div').className === "header" || e.target.closest('div').className === "link"){
                    document.removeEventListener()
                }
                console.log("no choice selected") 
            }
                
        });
    }

    function FilterSelected(selected){
        let card = document.getElementsByClassName('card')
        if(selected.length === 0 ){
            for (let i = 0; i < card.length; i++) {
                card[i].style.display = 'block';
            }
        }
        else{
            for (let i = 0; i < card.length; i++) {
                let target = card[i].getElementsByTagName('BUTTON')[0].className //get style
                if(selected.includes(target)){
                    card[i].style.display = 'block';
                }
                else{
                    card[i].style.display = 'none';
                }
            }
        }
    }

    return(
        <div>
            <Header/>
            <div className='van-container'>
                <h1>Explore our van options</h1>
                <div className='tag-items'>
                    <span className='tag-box'>Simple</span>
                    <span className='tag-box'>Luxury</span>
                    <span className='tag-box'>Rugged</span>
                    <button className='tag-button'>Clear filters</button>
                </div>
                <div className='grid'>   
                    {data.map((vanData) =>(
                        <CardVans data = {vanData}/>
                    ))}                
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Vans