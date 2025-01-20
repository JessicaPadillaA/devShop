import { Link, useLocation } from "react-router-dom";
import { useProduct } from "./ProductContext";

export default function DressPage() {

    const location = useLocation();
    const [prodCodeLocal, prodStockLocal] = location.state || ["", ""];
    const { countDressBlue, setCountDressBlue } = useProduct(0);

    const allDresses = [
        { prodCode: "1", depCode: "1", prodName: "Blue dress", price: "500", size: "XL", description: "Vestido azul rey de manga corta, falda a los pies con volumen", brand: "Marca1", imagePath: "/images/blueDress.jpg", depPath: "/dress" },
        { prodCode: "2", depCode: "1", prodName: "Red dress", price: "600", size: "M", description: "Vestido rojo de manga corta y falda 3/4", brand: "Marca3", imagePath: "/images/redDress.jpg", depPath: "/dress" },
    ]

    return (
        <div class="details">
            <h1 class="details__title">Detalles del Producto</h1>
            {allDresses.map((dress) => (
                (dress.prodCode === prodCodeLocal) ? (
                    <div class="details__product" key={dress.prodCode}>
                        <div class="details__product__image">
                            <img src={dress.imagePath} alt="Imagen" class="details__product__img" />
                        </div>
                        <div class="details__product__info">
                            <h3 class="details__product__name">Producto: {dress.prodName}</h3>
                            <h3 class="details__product__description">Descripción: {dress.description}</h3>
                            <h3 class="details__product__size">Talla: {dress.size}</h3>
                            <h3 class="details__product__price">Precio: ${dress.price}</h3>
                            <h3 class="details__product__brand">Marca: {dress.brand}</h3>
                            <h3 class="details__product__local-stock">Disponibles: {prodStockLocal}</h3>
                        </div>
                        <Link to="/" class="details__back-link">Volver</Link>
                    </div>
                ) : (
                    <h1></h1>
                )
            ))}
        </div>

    )
}