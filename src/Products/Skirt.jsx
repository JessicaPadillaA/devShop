import { Link, useLocation } from "react-router-dom";
import { useProduct } from "./ProductContext";

export default function SkirtPage() {

    const location = useLocation();
    const [prodCodeLocal, prodStockLocal] = location.state || ["", ""];


    const allSkirtes = [
        { prodCode: "5", depCode: "3", prodName: "Black skirt", price: "300", size: "XL", description: "Falda negra a la cintura", brand: "Marca1", imagePath: "data:image/jpeg;base64,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", depPath: "/skirt" },
        { prodCode: "6", depCode: "3", prodName: "Pink skirt", price: "350", size: "M", description: "Falda de Tennis rosa", brand: "Marca3", imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJWuTX9EnPZYxRplWzpJqo08aXZqsaUzuDw&s", depPath: "/skirt" },
    ]

    return (
        <div class="details">
        <h1 class="details__title">Detalles del Producto</h1>
        {allSkirtes.map((skirt) => (
            (skirt.prodCode === prodCodeLocal) ? (
                <div class="details__product" key={skirt.prodCode}>
                    <div class="details__product__image">
                        <img src={skirt.imagePath} alt="Imagen" class="product-details__image" />
                    </div>
    
                    <div class="details__product__info">
                        <h3 class="details__product__name">Producto: {skirt.prodName}</h3>
                        <h3 class="details__product__description">Descripción: {skirt.description}</h3>
                        <h3 class="details__product__size">Talla: {skirt.size}</h3>
                        <h3 class="details__product__price">Precio: ${skirt.price}</h3>
                        <h3 class="details__product__brand">Marca: {skirt.brand}</h3>
                        <h3 class="details__product__stock">Disponibles: {prodStockLocal}</h3>
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