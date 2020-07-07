import React from 'react';
import Cell from './Cell';
import CellNumber from './CellNumber';
import { map } from 'ramda';

const Card = ({ className, onCellUpdated, numbers }) => {
  const title = ['B', 'I', 'N', 'G', 'O'];

  return (
    <div className={`card ${ className }`}>
      <div className={`flex flex-wrap`}>
        {
          map(
            (content, idx) =>  <Cell className="w-1/5 text-center card-header" key={idx}>
              <span className="text-white">{ content }</span>
            </Cell>,
            title
          )
        }
        {
          map(
            (cell, idx) =>  <CellNumber
              className="w-1/5 text-center"
              cell={cell}
              cellUpdated={onCellUpdated}
              key={idx}
            />,
            numbers
          )
        }
      </div>
    </div>
  )
}

export default Card
