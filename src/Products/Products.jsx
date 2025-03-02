import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Common/UserContext";

const deparments = [
    { depCode: "1", depName: "Dress", depPath: "/dress" },
    { depCode: "2", depName: "Shirts", depPath: "/shirt" },
    { depCode: "3", depName: "Skirts", depPath: "/skirt" },
    { depCode: "4", depName: "Pants", depPath: "/pants" },
];

const allProducts = [
    { prodCode: "1", depCode: "1", prodName: "Blue dress", price: "500", stock: "15", imagePath: "/images/blueDress.jpg", depPath: "/dress" },
    { prodCode: "2", depCode: "1", prodName: "Red dress", price: "600", stock: "10", imagePath: "/images/redDress.jpg", depPath: "/dress" },
    { prodCode: "3", depCode: "2", prodName: "Green Shirt", price: "250", stock: "10", imagePath: "/images/greenShirt.png", depPath: "/shirt" },
    { prodCode: "4", depCode: "2", prodName: "White Shirt", price: "150", stock: "10", imagePath: "/images/whiteShirt.jpg", depPath: "/shirt" },
    { prodCode: "5", depCode: "3", prodName: "Black skirt", price: "300", stock: "10", imagePath: "data:image/jpeg;base64,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", depPath: "/skirt" },
    { prodCode: "6", depCode: "3", prodName: "Pink skirt", price: "350", stock: "10", imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJWuTX9EnPZYxRplWzpJqo08aXZqsaUzuDw&s", depPath: "/skirt" },
    { prodCode: "7", depCode: "4", prodName: "Jeans", price: "700", stock: "10", imagePath: "data:image/jpeg;base64,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", depPath: "/pants" },
    { prodCode: "8", depCode: "4", prodName: "Gray", price: "660", srock: "10",  imagePath: "data:image/jpeg;base64,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", depPath: "/pants" },
];

export default function ProductsPage() {

    const { userCounterCart, setUserCounterCart } = useUser(0);
    const { userCart, setUserCart } = useUser();

    const [elasticList, setElasticList] = useState([]);

    const headers = new Headers({
        'Authorization': `Basic ${btoa('uuk329tnep' + ':' + '56t7t7p4x5')}`,
        'Content-type' :'application/json'
    });

    useEffect(() => {
             fetch('https://cenace-search-79914116.us-east-1.bonsaisearch.net/productos/_search?filter_path=hits.hits._source',{headers: headers})
                 .then((response) => response.json())
                 .then((data) =>setElasticList(data));

             }, []);

       // console.log('ORIGINAL RESULT--->', elasticList)
        const resultArray = Object.keys(elasticList).map((key) => elasticList[key]);
        //console.log('ARRAY RESULT--->', resultArray[0])
        var finalArray=[]
        resultArray.forEach(function(n){
            finalArray=n.hits;

        });
        //console.log('final array',finalArray)

    const useCountCart = () => {


        const addProductCart = (newProd) => {
            setUserCounterCart(userCounterCart + 1);
            const prodExists = userCart.some((prod) => prod[0] === newProd[0]);
            if (!prodExists) {
                setUserCart((prevCart) => [...prevCart, newProd]);
            } else {
                userCart.map((prod) => {
                    if (prod[0] === newProd[0]) {
                        prod[3] += 1;
                    }
                });
            }
        };
        return { addProductCart };
    };

    const [selectedDep, setSelectedDep] = useState();
    const [selectedProducts, setSelectedProducts] = useState(allProducts); // Estado para los productos mostrados
    const [products, setProducts] = useState(allProducts); // Estado para los productos con stock actualizado
    const {userIsReg}=useUser();
    const { addProductCart } = useCountCart();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (selectedDep === "All") {
    //         setSelectedProducts(allProducts);
    //     } else {
    //
    //         const filteredProd = finalArray.filter((product) => product._source.depCode === selectedDep);
    //         //console.log('filtros----->',filteredProd);
    //         //setElasticList(filteredProd);
    //     }
    // }, [setElasticList]);

    // const handleAddToCart = (product) => {
    //     if (product.stock > 0) {
    //         addProductCart([product.prodCode, product.prodName, product.price, 1, product.stock - 1]); // Decrementamos el stock
    //         setProducts((prevProducts) =>
    //             prevProducts.map((prod) =>
    //                 prod.prodCode === product.prodCode
    //                     ? { ...prod, stock: prod.stock - 1 } // Actualizamos el stock en el estado global
    //                     : prod
    //             )
    //         );
    //
    //         // También actualizamos el estado de selectedProducts para reflejar el stock actualizado
    //         setSelectedProducts((prevSelectedProducts) =>
    //             prevSelectedProducts.map((prod) =>
    //                 prod.prodCode === product.prodCode
    //                     ? { ...prod, stock: prod.stock - 1 } // Decrementamos el stock del producto mostrado
    //                     : prod
    //             )
    //         );
    //     }
    // };

    const handleChange = (e) => {
        console.log('chageeee', e.target.value)
        if(e.target.value !== 'All'){

        fetch('https://cenace-search-79914116.us-east-1.bonsaisearch.net/productos/_search',
            {
                method: "POST",
                headers: headers,
                accept: "application/json",
                body: JSON.stringify({
                    "query":{
                        "match":{
                            "depCode":e.target.value
                        }
                    }
                })
            })
            .then((response) => response.json())
            .then((data) =>setElasticList(data));
        }else{
            fetch('https://cenace-search-79914116.us-east-1.bonsaisearch.net/productos/_search?filter_path=hits.hits._source',{headers: headers})
                .then((response) => response.json())
                .then((data) =>setElasticList(data));
        }
    };
        const handleBuscar=(event)=>{
            if(event.target.value.length != 0){
                fetch('https://cenace-search-79914116.us-east-1.bonsaisearch.net/productos/_search',
                    {
                        method: "POST",
                        headers: headers,
                        accept: "application/json",
                        body: JSON.stringify({
                            "query":{
                                "multi_match":{
                                    "query":event.target.value,
                                    "type":"bool_prefix",
                                    "fields":[
                                        "description",
                                        "description._2gram",
                                        "description._3gram"
                                    ]
                                }
                            }
                        })
                    })
                    .then((response) => response.json())
                    .then((data) =>setElasticList(data));

            }else{

                fetch('https://cenace-search-79914116.us-east-1.bonsaisearch.net/productos/_search?filter_path=hits.hits._source',{headers: headers})
                    .then((response) => response.json())
                    .then((data) =>setElasticList(data));
            }

        }

    //Si no hay producto emitimos un mensaje
    if (elasticList.length === 0) {
        return <>
            <h1>Cargando productos ...</h1>
        </>
    }
        return (
            <div className="products">
                <div className="products__header">
                    <span className="products__header__label">Categoria:</span>
                    <select value={selectedDep} onChange={handleChange} className="products__header__select">
                        <option value="" disabled className="products__header__select-option" selected>
                            Selecciona una categoria
                        </option>
                        {deparments.map((department) => (
                            <option
                                key={department.depCode} value={department.depCode} className="products__header__select-option">
                                {department.depName}
                            </option>
                        ))}
                        <option value="All" className="products__header__select-option">
                            All
                        </option>
                    </select>
                    <div className="products__header__searchBar">
                        <input className="products__header__searchBar-input" placeholder="Ingresa tu Busqueda" onChange={handleBuscar}/>
                    </div>
                </div>

                <div className="products">
                    <h2 className="products__title">Productos</h2>
                    <div className="products__content__dynamic">

                        {finalArray.map((elasticProducts) => (
                            <div className="products__content__dynamic__item" key={elasticProducts._source.prodCode}>
                                <Link
                                    to={elasticProducts._source.depPath}
                                    state={[elasticProducts._source.prodCode, elasticProducts._source.stock]}
                                    className="products__content__dynamic__item__link"
                                >
                                    <div className="products__content__dynamic__item__image-container">
                                        <img src={elasticProducts._source.imagePath} alt={elasticProducts._source.prodName} className="products__content__dynamic__item__image" />
                                    </div>
                                    <div className="products__content__dynamic__item__details">
                                        <h4 className="products__content__dynamic__item__name">{elasticProducts._source.prodName}</h4>
                                        <p className="products__content__dynamic__item__price">${elasticProducts._source.price}</p>
                                        {/*<p className="products__content__dynamic__item__stock">Disponibles: {elasticProducts._source.stock}</p>*/}
                                    </div>
                                </Link>
                                <button
                                    className="products__content__dynamic__item__add-to-cart"
                                    onClick={() => handleAddToCart(elasticProducts)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );


}