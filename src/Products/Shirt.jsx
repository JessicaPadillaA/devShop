import { Link, useLocation, useNavigate } from "react-router-dom";


export default function ShirtPage() {

    const location = useLocation();                     //Uso de Hook
    const [prodCodeLocal,prodStockLocal] = location.state || ["",""];       //Se usa para recibir el codigo del producto(prodCode) que se selecciono
    const navigate=useNavigate();                       //Uso de Hook

    const allShirts = [
        { prodCode: "3", depCode: "2", prodName: "Green Shirt", price: "250", size: "L", description: "Camisa basica color verde unisex", brand: "Marca1", imagePath: "/images/greenShirt.png", depPath: "/shirt" },
        { prodCode: "4", depCode: "2", prodName: "White Shirt", price: "150", size: "S", description: "Camisa basica color blanca para hombre", brand: "Marca12", imagePath: "/images/whiteShirt.jpg", depPath: "/shirt" },
    ]

    return (
        <div class="details">
    <h1 class="details__title">Detalles del Producto</h1>
    {allShirts.map((shirt) => (
        (shirt.prodCode === prodCodeLocal) ? (
            <div class="details__product" key={shirt.prodCode}>
                <div class="details__product__image">
                    <img src={shirt.imagePath} alt="Imagen" class="product-details__image" />
                </div>

                <div class="details__product__info">
                    <h3 class="details__product__name">Producto: {shirt.prodName}</h3>
                    <h3 class="details__product__description">Descripción: {shirt.description}</h3>
                    <h3 class="details__product__size">Talla: {shirt.size}</h3>
                    <h3 class="details__product__price">Precio: ${shirt.price}</h3>
                    <h3 class="details__product__brand">Marca: {shirt.brand}</h3>
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