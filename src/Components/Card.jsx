function Card({title,img ,avatarAlt, cardText,active}) {
    return (
        
            <div className={!active ? 'cards' : 'cards active'}>
                <h3>{title}</h3>
                <div className='figure'>
                    <img className='cardImg' src={img} alt={avatarAlt}/>
                </div>
                <p>{cardText}</p>
            </div>
    )
}
export default Card;