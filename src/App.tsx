import './App.css';
import s from './App-styled.module.css'
import { Board } from './Board';
import { useState } from 'react';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';


function App() {

	const [value, setValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(5);
	// const maxValue: number = 5;
	const incrementCounter = () => {
		if (value >= maxValue) return
		// setValue(++value)
		setValue(value + 1) //правильнее
	}

	const resetCounter = () => {
		setValue(0)
		setMaxValue(setRandomMaxValue())
	}

	const setRandomMaxValue = () => {
		return Math.floor(Math.random() * (10 - 1 + 1) + 1)
	}

    return (
      	<div className={s.counter}>
				<ProgressBar width={(value / maxValue * 100) + '%'}/>
				<Board value={value} className={value >= maxValue ? `${s.number} ${s.maxNumber}` : s.number} />
				<div>Max value: {maxValue}</div>
				<div className={s.buttons}>
					<Button title='inc' onClick={incrementCounter} disabled={value >= maxValue} />
					<Button title='reset' onClick={resetCounter} disabled={value === 0}/>
				</div>
			</div>
    );
}


export default App;

