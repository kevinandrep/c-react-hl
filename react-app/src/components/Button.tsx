import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  status?: boolean;
  onClick: () => void;
};

const styles = {
  backgroundColor: "lightBldddue",
};

export function Button({ children, status = false, onClick }: Props) {
  return (
    <>
      <button
        style={styles}
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
