import Layout1 from "@/components/Layout1";
import { useState } from "react";
import React from 'react'
import FormularioProducts from '@/components/products/Formulario'
import FormularioBrands from '@/components/Brands/FormularioAddBrands'
import FormularioClasificaction from '@/components/Clasification/FormularioAddClass'

function Index() {
  const [showProducts, setShowProducts] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showClasification, setShowClasification] = useState(false);

  return (
    <Layout1>
    <div className="flex flex-col items-center  p-2">
        <div className="flex flex-wrap gap-4 mb-0">
          <button
            onClick={() => {setShowProducts(!showProducts)
                            setShowBrands(false)
                            setShowClasification(false)  }}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {showProducts ? "Ocultar Productos" : "Mostrar Productos"}
          </button>

          <button
            onClick={() => {setShowProducts(false)
                            setShowBrands(!showBrands)
                            setShowClasification(false)
                            }}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {showBrands ? "Ocultar Marcas" : "Mostrar Marcas"}
          </button>

          <button
            onClick={() => {setShowProducts(false)
                            setShowBrands(false)
                            setShowClasification(!showClasification)}}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {showClasification ? "Ocultar Clasificación" : "Mostrar Clasificación"}
          </button>
        </div>

        <div className="w-full max-w-4xl">
          {showProducts && <FormularioProducts />}
          {showBrands && <FormularioBrands />}
          {showClasification && <FormularioClasificaction />}
        </div>
      </div>
      </Layout1>
 )
}

export default Index