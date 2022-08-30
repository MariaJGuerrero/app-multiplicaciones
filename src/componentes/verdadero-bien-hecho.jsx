import React from "react";





function BienHecho ({ LimpiarEstado }){
    return(
        <div>
            <h1 className="titulo">Gran trabajo!</h1>
            <button className="boton" onClick={() => LimpiarEstado()}>seguir jugando</button>
        </div>
    )
}

export default BienHecho;