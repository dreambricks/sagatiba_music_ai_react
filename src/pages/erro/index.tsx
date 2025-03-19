import { Container } from "./styles";
import Mountains from "../../../src/assets/mountains.png";
import { useParams } from "react-router";

export const Erro = () => {
  const { message } = useParams<{ message: string }>();

  return (
    <Container>
      <div className="top">
        <img src={Mountains} alt="Montanhas" />
      </div>

      <div className="content">
        <div className="error-card">
          <div className="body">
            {message ? (
              <>
                <h1 className="type">Aconteceu um erro!</h1>
                <p>{message}</p>
              </>
            ) : (
              <h1 className="type">Erro inesperado!</h1>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
