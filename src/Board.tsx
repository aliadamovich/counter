import React from 'react'
import s from './App-styled.module.css'

export type ValuePropsType = {
	value: number
	className?: string
}

export const Board = ({ value, className }: ValuePropsType) => {

	return (
		<div className={s.board}>
			<span className={className}>{value}</span>
		</div>
	)
}

