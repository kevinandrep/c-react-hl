import { useState } from "react";
import { Button } from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List ";

function App() {
  const list = ["Audra", "Uqi", "hasdr"];
  const [status, setStatus] = useState(false);
  const [lista, setLista] = useState(list);

  const handleSelect = (elemento: string) => {
    console.log(elemento);
  };

  const handleClick = () => {
    setStatus(!status);
  };

  const handleAdd = () => {
    setLista(() => [...lista, "Minion"]);
  };

  const handleDel = () => {
    setLista((prev) => prev.slice(0, -1));
  };

  return (
    <Card>
      <Button onClick={handleAdd}>Agregar</Button>
      <Button onClick={handleDel}>Eliminar</Button>
      <CardBody cardTitle="Titulo" cardText="Este es el texto"></CardBody>
      <List data={lista} onSelect={handleSelect}></List>
      <Button status={status} onClick={handleClick}>
        Hola
      </Button>
    </Card>
  );
}

export default App;
