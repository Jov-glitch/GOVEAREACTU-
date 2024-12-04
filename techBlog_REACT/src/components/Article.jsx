function Article ({article}) {
    const {image, title, description} = article;
    return (
        <>
        <article className="entrada">
            <div className="entrada__imagen">
                <img src={image} alt="Imágen con un escritorio"/>
            </div>
            <div className="entrada__contenido">
                <h4>{title}</h4>
                <p>{description}</p>
                <a href="entrada2.html" className="boton boton--primario">Leer más</a>
            </div>
        </article>
        </>
    );
}

export default Article;