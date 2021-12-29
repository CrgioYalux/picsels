import React from 'react';
import {Palette} from '../Palette'
import {Canvas} from '../Canvas';
import {Tools} from '../Tools';
import './App.css';

type Tools = {
  zoom: boolean,
  bordersVisibility: boolean;
}

export const App = () => {
  const [pencilColor, setPencilColor] = React.useState<string>('hsl(0, 0%, 0%)');
  const [tools, setTools] = React.useState<Tools>({zoom:false, bordersVisibility: true});
  
  const switchZoom = () => {
    setTools(prev => ({zoom:!prev.zoom, bordersVisibility: prev.bordersVisibility}))
  }

  const switchBordersVisibility = () => {
    setTools(prev => ({zoom:prev.zoom, bordersVisibility:!prev.bordersVisibility}))
  }

  return (
    <div className="App">
      <Canvas currentPencilColor={pencilColor} />
      <Palette pencilColor={pencilColor} setPencilColor={setPencilColor}/>
    </div>
  );
}

