type Props = {
  data: string[];
};

function List({ data }: Props) {
  return (
    <ul className="list-group">
      {data.map((nombre) => (
        <li className="list-group-item" key={nombre}>
          {nombre}
        </li>
      ))}
    </ul>
  );
}

export default List;
