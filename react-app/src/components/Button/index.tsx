import { ReactNode } from "react";
import "./Button.css";

type Props = {
  children: ReactNode;
  status?: boolean;
  onClick: () => void;
};

export function Button({ children, status = false, onClick }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        disabled={status}
        className={`${status ? "btn btn-secondary" : "btn btn-primary"}`}
      >
        {status ? "Cargando...." : children}
      </button>
    </>
  );
}
