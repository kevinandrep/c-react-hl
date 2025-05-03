import Card, { CardBody } from "./components/Card";
import List from "./components/List ";

function App() {
  const list = ["Audra", "Uqi", "hasdr"];
  return (
    <Card>
      <CardBody cardTitle="Titulo" cardText="Este es el texto"></CardBody>
      <List data={list}></List>
    </Card>
  );
}

export default App;
