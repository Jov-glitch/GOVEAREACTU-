function Footer () {
    return (
        <>
        <footer className="footer">
            <div className="contenedor">
                <div className="barra">
                    <a className="logo" href="index.html">
                        <h1 className="logo__nombre no-margin centrar-texto">My<span className="logo__negrita">PhotoBlog</span></h1>
                    </a>
                    <nav className="navegacion--secundaria">
                        <a href="eventos.html" className="navegacion--secundaria__enlace">Eventos</a>
                        <a href="paquetes.html" className="navegacion--secundaria__enlace">Paquetes</a>
                        <a href="trabajos.html" className="navegacion--secundaria__enlace">Trabajos</a>
                    </nav>
                </div>
            </div>
        </footer>
        </>
    );
}
export default Footer;