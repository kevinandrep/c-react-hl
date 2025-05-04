import { useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List ";

function App() {
  const list = ["Audra", "Uqi", "hasdr"];
  const [status, setStatus] = useState(true);

  const handleSelect = (elemento: string) => {
    console.log(elemento);
  };

  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <Card>
      <CardBody cardTitle="Titulo" cardText="Este es el texto"></CardBody>
      <List data={list} onSelect={handleSelect}></List>

      <button
        onClick={handleClick}
        type="button"
        className={`${status ? "btn btn-primary" : "btn btn-secondary"}`}
      >
        {status ? "hola mundo" : "Cargando"}
      </button>
    </Card>
  );
}

export default App;
