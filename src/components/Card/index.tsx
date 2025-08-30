import './styles.css'
import { CharacterDTO } from 'models/character';

type Props = {
character : CharacterDTO;
}

export default function Card({character} : Props){
    return(
        <div className='rm-card'>
            <div>
                <img src={character.image} alt={character.name} />
            </div>
            <div className='rm-card-content'>
                <p>{character.name}</p>
            </div>
        </div>
    )
}