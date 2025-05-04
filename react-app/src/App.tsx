import Card, { CardBody } from "./components/Card";
import List from "./components/List ";

function App() {
  const list = ["Audra", "Uqi", "hasdr"];

  const handleSelect = (elemento: string) => {
    console.log(elemento);
  };
  return (
    <Card>
      <CardBody cardTitle="Titulo" cardText="Este es el texto"></CardBody>
      <List data={list} onSelect={handleSelect}></List>
    </Card>
  );
}

export default App;
