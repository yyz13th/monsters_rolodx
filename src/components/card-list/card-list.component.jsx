import { Component } from 'react';

class CardList extends Component {

    render() {
        console.log('rendering card list');
        const { monsters} = this.props;
        return (
        <div>
            {monsters.map((monster) => (
                   <h1 key={monster.id}>{monster.name}</h1>
               ))}
            </div>
        );
    }
}

export default CardList;