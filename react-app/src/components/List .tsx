import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    <ul className="list-group">
      {data.map((nombre) => (
        <li
          onClick={() => handleClick(nombre)}
          className="list-group-item"
          key={nombre}
        >
          {nombre}
        </li>
      ))}
    </ul>
  );
}

export default List;
