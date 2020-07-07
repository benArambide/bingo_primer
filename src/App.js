import React, { useState } from 'react'
import Card from './components/Card'
import CardMenu from './components/CardMenu'
import ProjectDescription from './components/ProjectDescription'
import { map, prop } from 'ramda'
import { saveStorage, loadFromStore, generateCells } from './components/helpers';

const SESSION_KEY = 'bingo-filler';

const App = () => {
  const [numbers, setNumbers] = useState(prop('numbers', loadFromStore(SESSION_KEY)));
  const [editModeActive, setEditModeActive] = useState(prop('editModeActive', loadFromStore(SESSION_KEY)));

  const toggleEditMode = () => {
    const nextEditMode = !editModeActive;
    const newNumbers = map((cell) => ({...cell, edit: nextEditMode}), numbers);
    setNumbers(newNumbers)
    setEditModeActive(nextEditMode);
    saveStorage({numbers: newNumbers, editModeActive: nextEditMode}, SESSION_KEY);
  }

  const onCellUpdated = newCell => {
    const newNumbers = [...numbers];
    newNumbers[newCell.index] = newCell;
    setNumbers(newNumbers);
    saveStorage({ numbers:newNumbers }, SESSION_KEY);
  }
  const onCleanSelection = () => {
    const newNumbers = map((cell) => ({...cell, selected: false}), numbers);
    setNumbers(newNumbers)
    saveStorage({numbers: newNumbers}, SESSION_KEY);
  }
  const onCleanAll = () => {
    const newNumbers = generateCells();
    setNumbers(newNumbers)
    saveStorage({numbers: newNumbers}, SESSION_KEY);
  }

  return (
    <div className="flex flex-wrap bg-gray-100">
      <div className="w-full md:w-1/2 p-6">
        <ProjectDescription className={`mb-8`} />
        <CardMenu
          toggleEditMode={toggleEditMode} editModeActive={editModeActive}
          cleanSelection={onCleanSelection}
          cleanAll={onCleanAll}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-justify-center items-center pt-6 pb-6">
        <Card className="w-4/5 mx-auto" onCellUpdated={onCellUpdated} numbers={numbers} />
      </div>
    </div>
  );
}

export default App;
