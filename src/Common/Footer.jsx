import { Link } from "react-router-dom";
import { useUser } from "./UserContext";


export default function FooterPage() {




    return (
        <div class="footer">
            <div class="footer__content">
                <p>2025 DevShop. Todos los derechos reservados.</p>
                <div class="footer__content__links">
                    <a href="#about" class="footer__link">Sobre nosotros</a>
                    <a href="#contact" class="footer__link">Contacto</a>
                    <a href="#privacy" class="footer__link">Política de privacidad</a>
                </div>
            </div>
        </div>
    )
}