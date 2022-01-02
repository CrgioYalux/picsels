import React from 'react';
import { Palette } from '../Palette';
import { DisplayOptions } from '../DisplayOptions';
import { PrintMatrix } from '../PrintMatrix';
import { Zoom } from '../Zoom';
import './App.css';

type Tools = {
	zoom: boolean;
	bordersVisibility: boolean;
	canvasSize: number;
};

const createMatrix = (size: number): (string | number)[][] =>
	[...Array(size)].map(() => [...Array(size)].map(() => 'white'));

export const App = () => {
	const [pencilColor, setPencilColor] = React.useState<number | string>(
		'black',
	);
	const [options, setOptions] = React.useState<Tools>({
		zoom: true,
		bordersVisibility: true,
		canvasSize: 5,
	});
	const [matrix, setMatrix] = React.useState<(string | number)[][]>(() =>
		createMatrix(options.canvasSize),
	);

	React.useEffect(() => {
		setMatrix(createMatrix(options.canvasSize));
	}, [options.canvasSize]);

	const paintElement = ({ x, y }: { x: number; y: number }) => {
		setMatrix((prev) => {
			const _prev = [...Array(options.canvasSize)].map((_, index) => [
				...prev[index],
			]);
			_prev[x][y] = pencilColor;
			return _prev;
		});
	};

	const clearCanvas = () => {
		setMatrix(createMatrix(options.canvasSize));
	};

	const switchZoom = () => {
		setOptions((prev) => ({
			zoom: !prev.zoom,
			bordersVisibility: prev.bordersVisibility,
			canvasSize: prev.canvasSize,
		}));
	};

	const switchBordersVisibility = () => {
		setOptions((prev) => ({
			zoom: prev.zoom,
			bordersVisibility: !prev.bordersVisibility,
			canvasSize: prev.canvasSize,
		}));
	};

	const changeCanvasSize = (event: React.SyntheticEvent<HTMLInputElement>) => {
		const canvasSize = Number(event.currentTarget.value);
		if (canvasSize !== options.canvasSize) {
			setOptions((prev) => ({
				zoom: prev.zoom,
				bordersVisibility: prev.bordersVisibility,
				canvasSize,
			}));
		}
	};

	const exitZoom = () => {
		setOptions((prev) => ({
			zoom: false,
			bordersVisibility: prev.bordersVisibility,
			canvasSize: prev.canvasSize,
		}));
	};

	return (
		<div className="App">
			{options.zoom ? (
				<Zoom
					matrix={matrix}
					bordersVisibility={options.bordersVisibility}
					paintElement={paintElement}
					exitZoom={exitZoom}
				/>
			) : (
				<PrintMatrix
					matrix={matrix}
					bordersVisibility={options.bordersVisibility}
					paintElement={paintElement}
				/>
			)}
			<DisplayOptions
				options={options}
				changeCanvasSize={changeCanvasSize}
				clearCanvas={clearCanvas}
				switchZoom={switchZoom}
				switchBordersVisibility={switchBordersVisibility}
			/>
			<Palette pencilColor={pencilColor} setPencilColor={setPencilColor} />
		</div>
	);
};
