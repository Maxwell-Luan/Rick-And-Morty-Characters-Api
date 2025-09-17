import Card from "../Card";
import "./styles.css";
import { CharacterDTO } from "models/character";
import { Link } from "react-router-dom";
import ButtonPage from "../ButtonPage";

type Props = {
  characters: CharacterDTO[];
  page: number;
  onPreviousPage: Function;
  onNextPage: Function;
};

export default function Catalog({
  characters = [],
  page,
  onPreviousPage,
  onNextPage,
}: Props) {
  const previousButton = "Voltar";
  const nextButton = "Próximo";

  function handleClickPrevious() {
    onPreviousPage();
  }

  function handleClickNext() {
    onNextPage();
  }

  return (
    <>
      <section className="rm-catalog-cards">
        {characters.map((character) => (
          <Link key={character.id} to={`character/${character.id}`}>
            <Card character={character} />
          </Link>
        ))}
      </section>
      <div id="content" className="rm-change-page">
        {page > 1 && (
          <div onClick={handleClickPrevious}>
            <ButtonPage description={previousButton} />
          </div>
        )}
        {page < 42 && (
          <div onClick={handleClickNext}>
            <ButtonPage description={nextButton} />
          </div>
        )}
      </div>
    </>
  );
}
