import React from 'react';
import Cell from './Cell'

const CellNumber = ({ className, cell, cellUpdated }) => {
  const onChangeCell = (val) => {
    cellUpdated({
      ...cell,
      value: val
    })
  }

  const selectedNumber = () => {
    cellUpdated({
      ...cell,
      selected: !cell.selected
    })
  }

  const selectClass = () => cell.selected && !cell.edit ? 'cell-selected' : '';
  const freeCellClass = () => cell.free ? 'bg-gray-400' : 'bg-white';

  return (
    <Cell
      className={`cell-number ${selectClass()} ${freeCellClass()} ${className}`}>
      <div className={`cell-number-content flex items-center justify-center`}>
        {
          cell.edit && !cell.free ?
            <input
              className={`text-4xl w-full text-center`} onChange={e => onChangeCell(e.target.value)}
              value={cell.value}
            /> :
            <span>{ cell.value }</span>
        }
        {
          cell.free ? <div>
            <p className="text-sm p-2">Espacio Libre</p>
          </div> : ''
        }
      </div>
      {
        !cell.edit && cell.value ?
          <button
            className={`bg-red-300 hover:bg-red-400 rounded-full inline-flex items-center w-5 h-5 cell-select-button`}
            onClick={selectedNumber}
            title={`${cell.selected ? 'Desmarcar': 'Marcar'}`}
          >
          </button>
          : ''
      }
    </Cell>
  )
}

export default CellNumber
