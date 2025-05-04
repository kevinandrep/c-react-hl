import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const [index, setIndex] = useState(1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <ul className="list-group">
      {data.map((nombre, i) => (
        <li
          onClick={() => handleClick(i)}
          className={`list-group-item ${index == i ? "active" : ""}`}
          key={nombre}
        >
          {nombre}
        </li>
      ))}
    </ul>
  );
}

export default List;
