import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  cardTitle: string;
  cardText: string;
}

export function CardBody({ cardTitle, cardText }: CardBodyProps) {
  return (
    <>
      <h5 className="card-title">{cardTitle}</h5>
      <p className="card-text">{cardText}</p>
    </>
  );
}

export default Card;
