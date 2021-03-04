import React from 'react';
import Functions from './Functions';
import Cards from './Cards';

class Main extends React.Component {
    state = {
        cards: ['card-1', 'card-2', 'card-3']
    }
    addCard = (value) =>{
        const card = [...this.state.cards]
        card.push(value)
        if(value !== '') {
            this.setState({
                cards:card
            })
        }
        
    }
    render() {
        const card = this.state.cards.map((cardItems, cardIndex) => {
            return <Cards
                card={cardItems}
                key={cardIndex}
            />
        })
        return (
            <div>
                <Functions  addCard={this.addCard}/>
                <div className='d-flex justify-content-around'>
                    {card}
                </div>
            </div>
        )
    }
}
export default Main;