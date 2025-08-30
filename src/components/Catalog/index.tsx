import { useEffect, useState } from "react";
import Card from "../Card";
import "./styles.css";
import { CharacterDTO } from "models/character";
import * as characterService from "../../services/characterService";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [characters, setCharacters] = useState<CharacterDTO[]>([]);

  useEffect(() => {
    characterService.findAll().then((response) => {
      console.log(response);
      setCharacters(response.data.results);
    });
  }, []);

  return (
    <section className="rm-catalog-cards">
      {characters.map((character) => (
        <Link to={`character/${character.id}`}>
          <Card key={character.id} character={character} />
        </Link>
      ))}
    </section>
  );
}
