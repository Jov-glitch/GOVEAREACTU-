function Header({ carrito, eliminardelCarrito, AumentarCantidadCarrito }) {
    const totalCuenta = () => carrito.reduce((total, pack) => total + (pack.cantidad * pack.price), 0)
    return (
        <>
            <header className="header">
                <div className="sombra">
                    <div className="contenedor">
                        <div className="barra">
                            <a className="logo" href="index.html">
                                <h1 className="logo__nombre no-margin centrar-texto">My<span className="logo__negrita">PhotoBlog</span></h1>
                            </a>
                            <nav className="navegacion">
                                <a href="eventos.html" className="navegacion__enlace">Eventos</a>
                                <a href="paquetes.html" className="navegacion__enlace">Paquetes</a>
                                <a href="trabajos.html" className="navegacion__enlace">Trabajos</a>
                                <div className="carrito">
                                    <img src="carrito.png" alt="imagen carrito" />
                                    <div id="carrito">
                                        {carrito.length === 0 ? (
                                            <p className="centrar-texto">No hay contenido en tu carrito</p>
                                        ) : (
                                            <>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th className="fuenteLigera centrar-texto ">Imagen</th>
                                                            <th className="fuenteLigera centrar-texto ">Nombre</th>
                                                            <th className="fuenteLigera centrar-texto ">Precio</th>
                                                            <th className="fuenteLigera centrar-texto ">Cantidad</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {carrito.map(photoPack => (
                                                            <tr key={photoPack.id}>
                                                                <td>
                                                                    <img src="pkg01.png" alt="Paquete fotografico" />
                                                                </td>
                                                                <td>{photoPack.title}</td>
                                                                <td className="negrita">${photoPack.price}</td>
                                                                <td className="centrar-texto">
                                                                    <button type="button" className="restarBoton">-</button>
                                                                    {photoPack.cantidad}
                                                                    <button type="button" className="sumarBoton" onAbort={() => AumentarCantidadCarrito(photoPack)}>+</button>
                                                                </td>
                                                                <td>
                                                                    <button type="button" className="eliminarBoton" onClick={() => eliminardelCarrito(photoPack.id)}>X</button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <p className="centrar-texto">Total pagar: <span>${totalCuenta()}</span></p>
                                                <button className="boton__pequeno boton--secundario">Vaciar Carrito</button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="header__texto">
                        <h2 className="no-margin">Blog de fotografía</h2>
                        <p className="no-margin">Información relevante del mundo de la fotografía digital</p>
                    </div>
                </div>

            </header>
        </>
    );
}
export default Header;