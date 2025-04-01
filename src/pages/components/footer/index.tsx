import { Container } from "./styes"
import Logo from "../../../assets/LOGO_NEG.svg";

export const Footer = () => {
    return (
        <Container>
            <div className="footer-upper">
                <img src={Logo} alt="" />
                <a href="https://test.sagatiba.com/dev/contact-us/">
                    <span>Entre em contato</span>
                </a>
            </div>
            <div className="footer-lower">
                <div className="footer-lower-content">
                    <ul className="links">
                        <li>
                            <a href="https://test.sagatiba.com/dev/privacy-policy/">
                                <span>Politica de Privacidade</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://test.sagatiba.com/dev/cookie-policy/">
                                <span>Politica de Cookies</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://test.sagatiba.com/dev/our-production/#opencookiepreferences">
                                <span>Preferências de Cookies</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://test.sagatiba.com/dev/terms-conditions/">
                                <span>Termos e Condições</span>
                            </a>
                        </li>
                    </ul>
                    <a>
                        <p>Aprecie o Sandbox Campari Com Moderação @Copyright 2023 Campari Group</p>
                    </a>
                </div>
            </div>
        </Container>
    )
}
