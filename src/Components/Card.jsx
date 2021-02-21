function Card({title,img ,avatarAlt, cardText,active,obj}) {
    return (
        
            <div className={!active ? 'cards' : 'cards active'}>
                <h3>{title}</h3>
                <img src={img} alt={avatarAlt}/>
                <p>{cardText}</p>
            </div>
    )
}
export default Card;