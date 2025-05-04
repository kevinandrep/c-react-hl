import { useState } from "react";
import { Button } from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List ";

function App() {
  const list = ["Audra", "Uqi", "hasdr"];
  const [status, setStatus] = useState(false);

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
      <Button status={status} onClick={handleClick}>
        Hola
      </Button>
    </Card>
  );
}

export default App;
