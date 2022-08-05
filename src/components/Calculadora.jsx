import React, { useEffect, useState } from "react";

const Calculadora = () => {
  const [cantidad1, setCantidad1] = useState("0");
  const [operador, setOperador] = useState("");
  const [cantidad2, setCantidad2] = useState("0");
  const [visualizacion, setVisualizacion] = useState("0");

  useEffect(() => {
      if (operador !== "") {
          setVisualizacion(cantidad2);
        } else {
            setVisualizacion(cantidad1);
        }
  }, [cantidad1, cantidad2]);

  const getElemento = (elemento, tipoElemento) => {
    if (tipoElemento === "numero") {
      setCantidad(elemento);
    } else if (tipoElemento === "borrar") {
      setCantidad1("0");
      setCantidad2("0");
      setOperador("");
      setVisualizacion("0");
    } else if (tipoElemento === "cambiarSigno") {
            setCantidad1(Number(cantidad1) * -1);
    } else if (tipoElemento === "porcentaje") {
      setCantidad1((Number(cantidad1) * 0.01).toFixed(2));
    } else if (tipoElemento === "operador") {
      setOperador(elemento);
    } else if (tipoElemento === "coma") {
      if (operador !== "") {
        if (!cantidad2.includes(".")){
            setCantidad2(cantidad2 + elemento);
        }
    } else {
        if (!cantidad1.includes(".")){
            console.log((!cantidad1.includes(".")));
         setCantidad1(cantidad1 + elemento);
        }
      }
    } else if (tipoElemento === "igual") {
      if (cantidad2 !== "0" && operador !== "") {
        setCantidad1(getResultado());
      }
    }
  };

  const setCantidad = (elemento) => {
    if (operador !== "") {
      const cantidadTemporal2 = cantidad2 === "0" ? "" : cantidad2;
      setCantidad2(cantidadTemporal2 + elemento);
    } else {
      const cantidadTemporal1 = cantidad1 === "0" ? "" : cantidad1;
      setCantidad1(cantidadTemporal1 + elemento);
    }
  };

  const getResultado = () => {
    const operacion = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "x": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    setCantidad2("0");
    setOperador("");

    const resultado = operacion[operador](Number(cantidad1), Number(cantidad2));

        if (Number.isInteger(resultado) ) {
            return resultado.toString();
        }else {
            return (resultado.toFixed(2).toString());
        }
  };

  return (
    <div className="container">
      <div className="calculadora">
        <div className="visualizacion">{visualizacion}</div>

        <button
          className="itemGrisOscuro itemC"
          onClick={() => getElemento("C", "borrar")}
        >
          C
        </button>

        <button
          className="itemGrisOscuro itemMasMenos"
          onClick={() => getElemento("+/-", "cambiarSigno")}
        >
          +/-
        </button>

        <button
          className="itemGrisOscuro itemPorcentaje"
          onClick={() => getElemento("%", "porcentaje")}
        >
          %
        </button>

        <button
          className="itemNaranja itemDivision"
          onClick={() => getElemento("/", "operador")}
        >
          /
        </button>

        <button
          className="itemGrisClaro itemSiete"
          onClick={() => getElemento("7", "numero")}
        >
          7
        </button>

        <button
          className="itemGrisClaro itemOcho"
          onClick={() => getElemento("8", "numero")}
        >
          8
        </button>

        <button
          className="itemGrisClaro itemNueve"
          onClick={() => getElemento("9", "numero")}
        >
          9
        </button>

        <button
          className="itemNaranja itemMultiplicacion"
          onClick={() => getElemento("x", "operador")}
        >
          x
        </button>

        <button
          className="itemGrisClaro itemCuatro"
          onClick={() => getElemento("4", "numero")}
        >
          4
        </button>

        <button
          className="itemGrisClaro itemCinco"
          onClick={() => getElemento("5", "numero")}
        >
          5
        </button>

        <button
          className="itemGrisClaro itemSeis"
          onClick={() => getElemento("6", "numero")}
        >
          6
        </button>

        <button
          className="itemNaranja itemMenos"
          onClick={() => getElemento("-", "operador")}
        >
          -
        </button>

        <button
          className="itemGrisClaro itemUno"
          onClick={() => getElemento("1", "numero")}
        >
          1
        </button>

        <button
          className="itemGrisClaro itemDos"
          onClick={() => getElemento("2", "numero")}
        >
          2
        </button>

        <button
          className="itemGrisClaro itemTres"
          onClick={() => getElemento("3", "numero")}
        >
          3
        </button>

        <button
          className="itemNaranja itemMas"
          onClick={() => getElemento("+", "operador")}
        >
          +
        </button>

        <button
          className="itemGrisClaro itemCero"
          onClick={() => getElemento("0", "numero")}
        >
          0
        </button>

        <button
          className="itemGrisClaro itemComa"
          onClick={() => getElemento(".", "coma")}
        >
          .
        </button>

        <button
          className="itemNaranja itemIgual"
          onClick={() => getElemento("=", "igual")}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculadora;
