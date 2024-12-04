function Pack({pack, agregarAlCarrito}) {
    const { title, price, photos } = pack;
    return(
        <>
           <li className="paquetes__titulo">
             <h4 className="no-margin">{title}</h4>
                    <p className="paquetes--titulo__etiqueta">Precio: <span className="paquetes--titulo__info">${price}</span></p>

                    <p className="paquetes--titulo__etiqueta">Fotos: <span className="paquetes--titulo__info">{photos} pz.</span></p>
                    <a className="boton boton--secundario" onClick={() => agregarAlCarrito(pack)}>Añadir al carrito</a>
            </li>
        </>
    );
}
export default Pack;