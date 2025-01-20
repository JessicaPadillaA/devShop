import { Link, useLocation } from "react-router-dom";


export default function PantsPage() {

    const location = useLocation();
    const [prodCodeLocal, prodStockLocal] = location.state || ["", ""];


    const allPantses = [
        { prodCode: "7", depCode: "4", prodName: "Jeans", price: "700", size: "S", description: "Pantalon de mezclilla para caballero", brand: "Marca1", imagePath: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xAA6EAABAwIEAwYDBQcFAAAAAAABAAIDBBEFEiExBhNBIlFhcYGRB6GxFCMyU8EVFkJDotHhNmRykvD/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAgUBAwQG/8QAJREAAgIBBAICAgMAAAAAAAAAAAECEQMEITEyEkETYQWhIlFx/9oADAMBAAIRAxEAPwDuKIiAIiIAiKEBKLwqaunpWZ6ieKJvfI8NHzWIq+LsHpWkmpMtvymEj32+ayoyfCIynGPLM8oK0eq+IcHaFLAwW0DpX/oP7rBTcZ43USZYqgxuc7siOBoH9QK3x0uSXo556zFH7OqhSsDwhjUmNYaZajlieM5XiPbbTyWdWiScXTOiMlJJolERYJBERAEREAREQBERAEREAVEjczHNDi0kEXG4VagoDiuKOfFieeS073jPGZ3dljtAdN+l+4XCplc98YfVTCc6kC2uxtYCwH+FZT1UE1e1oyvc2Qv37RzakEjcW09FmYeXfPHFADe2XtfqVbxtR4KGfi5umYp8kjKZscFOA8ixMjrept5rEVUleG5nVMcczSAI2MHQWG/h3LaMTrBT3cYohmFrlg+ui1+aurqh1omkDujY61h6qaje9EHJLZP9G1fCfGJm4pNRVQeftLbteWkAuaP7LrQXEuF8QrW4xh0YMZaZ2ayM7QF7Eg37l20Kv1cPGZaaHIp49nwSiIuU7QiIgCIiAIiIAiIgCIiAKiaRsUb3v/C1pcfRVrG8RS/Z8Dr5s2XJA43te2iylboxJ0rOGyzUz6uWRsBBdUOJLCBYE3G481dsrcjSIoyc1hme43+pHyCxNG4y1k4sMofcab2NrfNZugp3MB5jGk73Llc0r3PPtvakWVRXVz5XcpuU9C3ceosVbP5rpXCZ5c8RuIy9+U/2Kz4o2duQloadL7qxdSAP01zNc0G3SxRqNcGVKd8npw9DLFXUjpntuJWkWbYt13C7oNlxqhgMJYXayDe4tddedUxRUwnlkayKwOdxsNdlxa3do7vx/wDFSLhFS1wcA5pBBFwQqlxFkEREAREQBERAEREAREQBYTjV2XhPFz/tX/RZta9x8SOEcTy78sD3cFKHZEMnRnC8PnayrbfRpfYEeOi2zDsha1nLaSbtB7lqFGzK8NDbX1vv1WzUUrA4XjysOoDbi26uZbFDHczRgayNjLdgi6xtbCx7jy9bDe+xVxzg8Pb25L7C22u5t/hU0VPmkzOBda4BPX/2q1pmxr+xHVPDcs7b5ToVe8bcUNnwigw6gm7TmB87gbEW0DfqfQKxxyeSjo+c+NjBewaRfMtLc9znuc46uOqyoKck36IvJKEXFezceEeMarCctNJaSlvblk2DevZ7vLb6LquD47QYvHekmBePxRu0c30Xz03RpvqD3hetNX1FNNG+GV4LDdoDiC3yPRQzaWMt1ybdPrZQ2lwfSV1K5Zwz8RZ2FtPibTUMFhzALSedv4vTXXZdGwzFKPE4uZRVDJbGzmg9pp7iOirp4pQ5LXHmjk4L1ERazaEREAREQBERAFr/AB7b90cTv+UD/UFsC1/j1ubhLEvCME+QcCpQ7Ihk6P8Aw4VSEiRtgNCtgopw2NgcwO13OllrsYIc0hxOqy9A5rbB5vd17K7dnn1Vm2UzPumkRtPav+JUyufBY/Zbi+pa9eIrGNibl3B2Cw2PY/NHA+GJ1nSAtBB2HVaadm61RiOIsR/aFYe250bD2Olj5LGXkZ+PtM714BuYgA2HerhtwND81tiaZfZVzMwFjoUZ+K3rdUxsDpOyMvh0VY7EoDxYHrvdTNe3CKjFmI302t3ruXAeAHBcIjfU3NdUNa6Zzt2i2jL+H1JWg/DbAm4vi/2yaO9LQuDrHUOk3aPTf2XZB0VdrMtvxRbfj8VR837JREXCWIREQBERAEREAWB45/0lil/yD9Qs8sBx3f8AdHFLb8g29wpQ7Ihk6M4IZrOHcO5esNSR12BKtOVIxuY636+C8Zed4adVc+VclB4p8GwQ4nlhDTa/RYWqc+aV0z7XcdAei86d78mZ2/0VRc15a1+gTZjdMtsjmm5cbeC94X3vbXvUvY3Lvp4Lzi7L7N18FhKmZbtFw2+S6uqVz5XNiDM8khDWtG7idAPNW7O0RZb18K8FFfjLsQlbeCj1FxvIdvYXPss5MnxwcjGLH8s1E6VwlgseA4JBRMaOZbPM4fxPO/6DyAWYQKVSttu2ehjFRVIIiLBkIiIAiIgCIiALB8bi/CeLeFM4+wWcWv8AHxtwfi3T7gj5hSh2RDJ0ZwWQXaBf/C8C0PtqW9V72cHOB1HTXfReLmG4aeyNzdXF2ULVI8pbMdtp3hSy0jSeqrdFYZjb3VA0JAFu5Z4I3ZDARdg6969HU7dDG/KRuD1VLxtYXB3VIY4SXieQbag7IZ+y8hjflGZu/Qa5u4Bd94Owb9h4BTUkgH2gjmTkdXnf20HouW/DLBnYvxA2eoZemoLSvF7hz/5Y9wXeg7120bLh1mS34ostDipOb9gKURcRYBERAEREAREQBERAFrvxBIbwdil9uUAf+wWxLVviW/JwZiJLg0fdgkm2nMbf5XUodkQydWcNjEjmuyB1j1dsSqJKKeIEOGePci+3qriGWCWwhdlts09VdC4OZxP/ABHVW6oop3ZYNMcwytflfbVjtD6Lxlicwg2V7PBE99pmEaXDm9VbyMlYQAeYzuJ1A81IhW55tcCSCNfovcBjI7kX8l5scxwJjFj1Hcts+HWDDGeII5JGh1LS/eP03IOg9T9CsTmoQbM48byT8Tp3AeBnA+HoIZm2qpvvqg21zu6egsPRbGqQLKpU0nbtnoIxUVSCIiwSCIiAIoRASipupugJRRdSgCoexrwWvAIO4Iuq0QGt4pwRw7iQdzsLgjedeZTjlOv5t/VajifwyqICX4RiPOaP5VXo4DweBb3HqupKNFOOSceGap4YT5RwfEOHsaw3P9swmqMY2libzW/03t6rEQvgOZrntEl7Padx4WX0cWhWNdhNBX6VtFTVAH5sTXEe4XRHVy9o5ZaCL6s+cKhzebkYW66Zu5d1+HuCfsfAonSNtUVNpZL7gEdkeg38SVI4B4YE/PGDUwfe9hmA9r2WzsAAGmyhlz/JsbcGmWLcqREXOdQRFCAlFF0QAooRAUoiICUREBIREQBERAEREAREQBERAEREAUIiAKERAf/Z", depPath: "/pants" },
        { prodCode: "8", depCode: "4", prodName: "Gray", price: "660", size: "M", description: "Pantalon gris de vestir para hombre", brand: "Marca3", imagePath: "data:image/jpeg;base64,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", depPath: "/pants" },
    ]

    return (
        <div class="details">
    <h1 class="details__title">Detalles del Producto</h1>
    {allPantses.map((pants) => (
        (pants.prodCode === prodCodeLocal) ? (
            <div class="details__product" key={pants.prodCode}>
                <div class="details__product__image">
                    <img src={pants.imagePath} alt="Imagen" class="details__product__img" />
                </div>
                <div class="details__product__info">
                    <h3 class="details__product__name">Producto: {pants.prodName}</h3>
                    <h3 class="details__product__description">Descripción: {pants.description}</h3>
                    <h3 class="details__product__size">Talla: {pants.size}</h3>
                    <h3 class="details__product__price">Precio: ${pants.price}</h3>
                    <h3 class="details__product__brand">Marca: {pants.brand}</h3>
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