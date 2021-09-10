import { useState } from "react";
import Card from "../card/index";
import "./style.css";

const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);

  const handleSuitFilter = (e) => {
    if (e.target.id !== suitFilter) {
      setSuitFilter(e.target.id);
    } else {
      setSuitFilter(!e.target.id);
      e.target.checked = false;
    }
  };

  return (
    <>
      <div className="filter-container">
        <p>Filtrar por naipe</p>
        <div>
          <input
            onClick={handleSuitFilter}
            type="radio"
            id="SPADES"
            name="suit"
          />
          <label className="SPADES">Espadas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="HEARTS"
            name="suit"
          />
          <label className="HEARTS">Copas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="CLUBS"
            name="suit"
          />
          <label className="CLUBS">Paus</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="DIAMONDS"
            name="suit"
          />
          <label className="DIAMONDS">Ouros</label>
        </div>
      </div>
      <div>
        {!suitFilter &&
          cardsList.map((actual, index) => {
            return <Card card={actual} key={index} />;
          })}

        {suitFilter &&
          cardsList
            .filter((actual) => actual.suit === suitFilter)
            .map((actual, index) => {
              return <Card card={actual} key={index} />;
            })}
      </div>
    </>
  );
};
export default CardsList;
