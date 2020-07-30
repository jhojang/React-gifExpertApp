import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs( category );

  const handleMap = () => {
    if (images.length > 0) {

      const columnas = 6;
      const numElementos = images.length;
      const elementosPorColumna = Math.ceil(numElementos / columnas);
      const divs = [];

      // La función crear divs va a retornar un array con los elementos que tendrá cada unos de los divs del ciclo de arriba
      const crearDivs = (i) => {
        let gifGridItem = [];
        for (let j = i*elementosPorColumna; j <= (i*elementosPorColumna)+elementosPorColumna-1; j++) {
          if (images[j] !== undefined) {
            gifGridItem.push(<GifGridItem key={images[j].id} title={images[j].title} url={images[j].url} />);
          }
        }
        return gifGridItem;
      }

      // Ciclo del número de columnas, se crea un div por cada columna
      // cada columna se agrega al array "divs" que tendrá un tamaño de 6 (1 elemento por columna)
      for (let i = 0; i < columnas; i++) {
        divs.push(<div className='card-container' key={i}>{crearDivs(i)}</div>);
      }

      return divs;

    }
  }


  return (
    <>
      {loading && 'Cargando...'}
      <div className='card-grid'>
        {handleMap()}
      </div>
    </>
  )
}
