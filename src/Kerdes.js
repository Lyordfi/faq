import React from 'react'
import {Link} from 'react-router-dom'

const Kerdes = ({kerdes , deleteKerdes}) => {


  const kerdesList = kerdes.map(kerdes => {
      
    return (
      <div className="collection-itom" key={kerdes.id}>
        <Link to ={'/'+ kerdes.id}>
          <span>Kérdés:<br/>{ kerdes.kerdes }</span><br/>
        </Link><span>Válaszok száma: { kerdes.valaszok_szama }</span><br/>
        <button onClick={()=> {deleteKerdes(kerdes.id)}}>Törlés</button>  <br />
      
      </div>
    )    
  });

  return (
    <div className="kerd-list">
      { kerdesList }
    </div>
  );

}

export default Kerdes