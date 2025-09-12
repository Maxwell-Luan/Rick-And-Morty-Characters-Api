import { useEffect, useState } from "react";
import Card from "../Card";
import "./styles.css";
import { CharacterDTO } from "models/character";
import * as characterService from "../../services/characterService";
import { Link } from "react-router-dom";
import { QueryParams } from "models/params";
import ButtonPage from "../ButtonPage";

export default function Catalog() {
  const previousButton = "Voltar";
  const nextButton = "Próximo";

  const [characters, setCharacters] = useState<CharacterDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 1,
    name: "",
    size: 20,
    sort: "name",
  });

  useEffect(() => {
    characterService
      .findPageRequest(
        queryParams.page,
        queryParams.name,
        queryParams.size,
        queryParams.sort
      )
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results);
      });
  }, [queryParams]);

  function handlePreviousPage() {
    const decreasePage = queryParams.page - 1;
    setQueryParams({ ...queryParams, page: decreasePage });
  }

  function handleNextPage() {
    const increasePage = queryParams.page + 1;
    setQueryParams({ ...queryParams, page: increasePage });
  }

  return (
    <>
      <section className="rm-catalog-cards">
        {characters.map((character) => (
          <Link to={`character/${character.id}`}>
            <Card key={character.id} character={character} />
          </Link>
        ))}
      </section>
      <div id="content" className="rm-change-page">
        {queryParams.page > 1 && (
          <div onClick={handlePreviousPage}>
            <ButtonPage description={previousButton} />
          </div>
        )}
        {queryParams.page < 42 && (
          <div onClick={handleNextPage}>
            <ButtonPage description={nextButton} />
          </div>
        )}
      </div>
    </>
  );
}
