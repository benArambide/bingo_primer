import React from 'react';

const Cell = ({ className, children }) => {
  return (
    <div className={`cell border-solid border-4 p-4 text-4xl font-bold ${className}`}>
      { children }
    </div>
  )
}

export default Cell
