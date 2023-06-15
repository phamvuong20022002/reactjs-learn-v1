import './css/App.css';

function CardVans(data) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={require(`${data.data.image}`)} alt={data.data.title} />
            </div>
            <div className='card-content'>
                <h2>{data.data.title}</h2>
                <div>
                    <span className="price"><strong>{data.data.price}</strong></span>
                    <span className="unit"> <br /> /{data.data.unit}</span>
                </div>
                <button className={data.data.style}>{data.data.style}</button>
            </div>
        </div>
    )
}

export default CardVans