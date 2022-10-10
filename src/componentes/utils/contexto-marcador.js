import React from "react";

const puntuacionGeneral = React.createContext({ puntuacion: 0, sumarPuntos: ()=>{}, restarPuntos: ()=>{} });

export default puntuacionGeneral;