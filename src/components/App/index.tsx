import React from 'react';
import {Palette} from '../Palette'
import {Canvas} from '../Canvas';
import {DisplayTools} from '../Tools';
import './App.css';

type Tools = {
  zoom: boolean,
  bordersVisibility: boolean;
}

export const App = () => {
  const [pencilColor, setPencilColor] = React.useState<number | string>('black');
  const [tools, setTools] = React.useState<Tools>({zoom:false, bordersVisibility: true});
  
  const switchZoom = () => {
    setTools(prev => ({zoom:!prev.zoom, bordersVisibility: prev.bordersVisibility}))
  }

  const switchBordersVisibility = () => {
    setTools(prev => ({zoom:prev.zoom, bordersVisibility:!prev.bordersVisibility}))
  }

  return (
    <div className="App">
      <Canvas currentPencilColor={pencilColor} options={{bordersVisibility:tools.bordersVisibility}} />
      <Palette pencilColor={pencilColor} setPencilColor={setPencilColor}>
        <DisplayTools switchZoom={switchZoom} switchBordersVisibility={switchBordersVisibility} />
      </Palette>
    </div>
  );
}

