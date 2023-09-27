// import { Component } from 'react';

import './search-box.styles.css';

const SearchBox = ({onChangeHandler, className, placeholder}) => {

    return (
        <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHandler}/> 
    )
}

// class SearchBox extends Component {

//     render(){
//         return (
//             <input 
//             className={`search-box ${this.props.className}`}
//             type='search' 
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChangeHandler}/> 
//         )
//     }
// }

export default SearchBox;