import { useState } from 'react';
import './styles.css'

type Props = {
    onSearch: Function;
}

export default function SearchBar({onSearch} : Props){

    const[char, setChar] = useState("");

    function handleInputChange(event : any){
        setChar(event.target.value);
    }

    function handleSearch(event : any){
        event.preventDefault();
        onSearch(char);
    }

    function handleReset(){
        setChar("");
        onSearch(char);
    }

    return(
        <div className='rm-searchbar-container'>
            <form className='rm-searchbar-form'>
                <button onClick={handleSearch}>🔎︎</button>
                <input 
                type="text"
                name='char'
                value={char}
                placeholder='Digite o nome do personagem'
                onChange={handleInputChange}/> 
                <button type='submit' onClick={handleReset}>🗙</button>
            </form>
        </div>
    )
}