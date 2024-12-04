import { useState } from "react";
import { useEffect } from "react";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Pack from "./components/Pack";
import { db } from "./data/db";
import { db2 } from "./data/db2";
import { getPacks } from "./api/photoblog.api";

function App() {

  const [data, setData] = useState(db)
  const [data2, setData2] = useState(db2)
  const [carrito, setCarrito] = useState([])
  const [packs, setPacks] = useState([]);

  useEffect(() => {
    const cargarPacks = async () => {
      try {
        const resultado = await getPacks();
        setPacks(resultado.data);
        console.log(packs);
      }
      catch (e) {
        console.log(e);
      }
    }
    cargarPacks();
  });

  const agregarAlCarrito = (pack) => {
    const existeElemento = carrito.findIndex((PackPhoto) => PackPhoto.id === pack.id);

    if (existeElemento >= 0) {
      const carritoActualizado = [...carrito];
      carritoActualizado[existeElemento].cantidad++
      setCarrito(carritoActualizado);
    } else {
      pack.cantidad = 1;
      setCarrito([...carrito, pack]);
    }
  }

  function elimnardelCarrito(id) {
    setCarrito(CarritoAnterior => CarritoAnterior.filter(pack => pack.id !== id))
  }

  return (
    <>
      <Header
        carrito={carrito}
        eliminardelCarrito={elimnardelCarrito}
      />
      <div className="contenedor contenido-principal">
        <main className="blog">
          <h3 className="centrar-texto">Blog</h3>
          {data.map((article) => (
            <Article
              key={article.id}
              article={article}
            />
          )
          )}
        </main>
        <aside className="sidebar">
          <h3>Paquetes fotográficos</h3>
          <ul className="paquetes no-padding">
            {packs.map((pack) => (
              <Pack
                key={pack.id}
                pack={pack}
                agregarAlCarrito={agregarAlCarrito}
              />
            )
            )}
          </ul>
        </aside>
      </div>
      <Footer />
    </>
  );
}


export default App;
