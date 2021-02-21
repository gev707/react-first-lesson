
export default  (props) => (
    <div className='carHolder'>
        <div>
            <p>Car Name: <strong>{props.name}</strong></p>
            <p>Car Color: <strong>{props.color}</strong></p>
            <p>Car Year: <strong>{props.year}</strong></p>
        </div>
    </div>
)