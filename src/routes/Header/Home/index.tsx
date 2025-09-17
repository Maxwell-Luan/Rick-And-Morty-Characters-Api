import SearchBar from "../../../components/SearchBar";
import Catalog from "../../../components/Catalog";
import "./styles.css";
import { useEffect, useState } from "react";
import { CharacterDTO } from "models/character";
import * as characterService from "../../../services/characterService";

export default function Home() {
  type QueryParams = {
    page: number;
    name: string;
  };

  const [characters, setCharacters] = useState<CharacterDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 1,
    name: "",
  });

  useEffect(() => {
    characterService
      .findPageRequest(queryParams.page, queryParams.name, 20, "name")
      .then((response) => {
        setCharacters(response.data.results);
      });
  }, [queryParams]);

  function handleSearchParams(searchText: string) {
    setCharacters([]);
    setQueryParams({ page: 1, name: searchText });
  }

  function handlePreviousPage() {
    const decreasePage = queryParams.page - 1;
    setQueryParams({ ...queryParams, page: decreasePage });
  }

  function handleNextPage() {
    const increasePage = queryParams.page + 1;
    setQueryParams({ ...queryParams, page: increasePage });
  }

  return (
    <section id="content">
      <div className="rm-home-title">
        <h1>Olá! Seja bem-vindo!</h1>
        <p>
          Selecione o seu personagem favorito para saber um pouco mais sobre
          ele!
        </p>
      </div>
      <SearchBar onSearch={handleSearchParams} />
      <Catalog
        characters={characters}
        page={queryParams.page}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
      <div></div>
    </section>
  );
}
