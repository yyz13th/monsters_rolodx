// import {Component} from 'react';
import { useState, useEffect } from 'react';


import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

    //hooks for func
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);


    //one time fetch to prevent infinite render
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users));     
    }, []);

    //increase table update speed
    useEffect(() => {
        const newFilteredMonsters =  monsters.filter((monster)=> {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
        //only when monters array or search field changes
    }, [monsters, searchField])
    
    const onSearchChange = (event) => {
        console.log(event.target.value);
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

   

    return (
        <div className="App">
            <h1 className='app-title'>Mugshot Robots</h1>
            
            <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search monsters' className = 'monsters-search-box' />
            <CardList monsters={filteredMonsters} />
            

        </div>
    );
};
// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             monsters: [],
//             searchField: ''
//         };
//     }

// componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters: users}));
// }


// onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//         return {searchField}
//     });
// }



//     render() {

//       const { monsters, searchField } = this.state;
//       const { onSearchChange } = this;

//         const filteredMonsters = monsters.filter(monster => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });
//         return (
//             <div className="App">
//                 <h1 className='app-title'>Mugshot Robots</h1>
                
//             <SearchBox onChangeHandler = {onSearchChange} placeholder = 'search monsters' className = 'monsters-search-box' />
//             <CardList monsters={filteredMonsters} />
//             </div>
//         );
//     }
// }

export default App;

