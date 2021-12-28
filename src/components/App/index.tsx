import React from 'react';
import {Palette} from '../Palette'
import {Canvas} from '../Canvas';
import './App.css';

export const App = () => {
  const [pencilColor, setPencilColor] = React.useState<string>('hsl(0, 0%, 0%)');
  return (
    <div className="App">
      <Canvas currentPencilColor={pencilColor} />
      <Palette pencilColor={pencilColor} setPencilColor={setPencilColor}/>
    </div>
  );
}

