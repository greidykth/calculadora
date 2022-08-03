import React from "react";

const Calculadora = () => {
  return (
    <div className="container">

    <div className="calculadora">
        <div className="visualizacion">123</div>
        <button className="itemGrisOscuro itemC">C</button>
        <button className="itemGrisOscuro itemMasMenos">+/-</button>
        <button className="itemGrisOscuro itemPorcentaje">%</button>
        <button className="itemNaranja itemDivision">/</button>
        <button className="itemGrisClaro itemSiete">7</button>
        <button className="itemGrisClaro itemOcho">8</button>
        <button className="itemGrisClaro itemNueve">9</button>
        <button className="itemNaranja itemMultiplicacion">x</button>
        <button className="itemGrisClaro itemCuatro">4</button>
        <button className="itemGrisClaro itemCinco">5</button>
        <button className="itemGrisClaro itemSeis">6</button>
        <button className="itemNaranja itemMenos">-</button>
        <button className="itemGrisClaro itemUno">1</button>
        <button className="itemGrisClaro itemDos">2</button>
        <button className="itemGrisClaro itemTres">3</button>
        <button className="itemNaranja itemMas">+</button>
        <button className="itemGrisClaro itemCero">0</button>
        <button className="itemGrisClaro itemComa">,</button>
        <button className="itemNaranja itemIgual">=</button>
    </div>
    </div>
  );
};

export default Calculadora;
