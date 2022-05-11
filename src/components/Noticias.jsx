import './Noticias.css'

function Noticia() {
    const noticia = {
      titulo: "Curso React 2022",
      descripcion: "Ejemplo de desestructaracion de objetos"
    }
  
    const {titulo, descripcion} = noticia;
  
    return (
        <>
            <div className="noticia">Mi noticia
                <p className="titulo">{titulo} </p>
                <p className="descripcion">{descripcion} </p>   
            </div>
        </>
     
    )
  
  }

  export default Noticia;