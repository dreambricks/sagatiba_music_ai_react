import { Container } from "./styles";
import ErrorIcon from "../../assets/ERROR_BUTTON.png";


export const Overbook = () => {
    return (
        <Container>
            <div className="content">
                <h1>Desculpe estamos trabalhando</h1>
                <h1>além da nossa capacidade</h1>

                <img src={ErrorIcon} alt="ErrorIcon" />
            </div>
        </Container>
    );
};