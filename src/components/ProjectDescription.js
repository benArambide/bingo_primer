import React from 'react';

const ProjectDescription = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h1 className="text-4xl font-bold">Cartilla de BINGO</h1>
      <p className="mb-4">Ahora puede jugar BINGO de manera virtual, llene la cartilla con sus números asignados, puede seleccionar los números en la cartilla y revisar si es el ganador.</p>
      <div className="pl-6">
        <ul className="list-disc ">
          <li><strong>Editar Cartilla:</strong> Activa el modo edición para que usted pueda cambiar el valor de los números.</li>
          <li><strong>Limpiar Selección:</strong> Elimina la selección de todos los números.</li>
          <li><strong>Limpiar Todo:</strong> Elimina todos los números, incluida su selección.</li>
          <li><button
            className={`bg-red-300 hover:bg-red-400 rounded-full inline-flex items-center w-5 h-5`}>
          </button> Presiona el botón rojo para seleccionar el número.</li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectDescription;
