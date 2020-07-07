import React from 'react';

const CardMenu = ({ toggleEditMode, editModeActive, cleanSelection, cleanAll }) => {
  return (
    <div>
      <button
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2 mb-2`}
        onClick={() => toggleEditMode()}
      >
        { editModeActive ? 'Cancelar Edición' : 'Editar Cartilla' }
      </button>
      <button
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2 mb-2`}
        onClick={() => cleanSelection()}
      >
        Limpiar Selección
      </button>
      <button
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center  mb-2`}
        onClick={() => cleanAll()}
      >
        Limpiar Todo
      </button>
    </div>
  )
}

export default CardMenu
