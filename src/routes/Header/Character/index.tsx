import './styles.css'

import { CharacterDTO } from "models/character";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as characterService from '../../../services/characterService'

export default function Character(){

    const params = useParams();
    const navigate = useNavigate();

    const[character, setCharacter] = useState<CharacterDTO>();

    useEffect(() => {
        characterService.findById(Number(params.charId)).then(response =>
            setCharacter(response.data)
        ).catch(() => {
            navigate("/")
        })
    }, [setCharacter])

    return(
        <section className='rm-section'>
            <div className="rm-char-profile">
                <div className='rm-char-profile-img'>
                    <img src={character?.image} alt={character?.name} />
                </div>
                <div className='rm-char-profile-content'>
                    <div>Nome: <p>{character?.name}</p></div>
                    <div>Espécie: <p>{character?.species}</p></div>
                    <div>Gênero: <p>{character?.gender}</p></div>
                    <div>Origem: <p>{character?.origin.name}</p></div>
                    <div>Localização: <p>{character?.location.name}</p></div>
                </div>
            </div>
        </section> 
    )
}