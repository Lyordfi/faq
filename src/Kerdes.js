import React from 'react'
import {Link} from 'react-router-dom'


const Kerdes = ({kerdes , deleteKerdes}) => {


  const kerdesList = kerdes.map(kerdes => {
      
    return (
      <div className="collection-itom" key={kerdes.id}>
       <span>Kérdés:<br/></span>
        <Link to={'/' + kerdes.id} >
          <input type="text" defaultValue={ kerdes.kerdes }/><br/>
        </Link>
        <button type = "submit">Kérdés módosítása</button><br></br>
        <button onClick={()=> {deleteKerdes(kerdes.id)}}>Törlés</button>  <br />
        <span>Válaszok száma: { kerdes.valaszok_szama }</span><br/>
          
         
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