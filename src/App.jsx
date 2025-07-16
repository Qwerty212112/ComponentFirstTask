import './assets/index.css'
import styles from './assets/app.module.css'
import { useState } from 'react'

export function App() {

const [value, setValue] = useState('');
const [list, setList] = useState([]);
const [error, setError] = useState('')
const [isValueVaild, setValueValid] = useState(true)
const [noMarginText, setNoMarginText] = useState('Нет добавленных элементов');

function onInputButtonClick() {
	const valuePrompt = prompt('Введите значение')
	setValue(valuePrompt)
	filterValue(valuePrompt)
	}

	function filterValue (value) {
		if (value.length < 3) {
		const textError = 'Введенное значение должно содержать минимум 3 символа'
		setError(textError)
		setValueValid(true)

	} else {
		setError('')
		setValueValid(false)
	}
	}

	function onAddButtonClick() {
		const correctValue = {
			id: Date.now(),
			value:value
		}
	const updatedList = [...list, correctValue]
	setList(updatedList)
	setValue('')
	setValueValid(true)
	setNoMarginText('')
	}


  return (
    <>
	<div className={styles.app}>
		<h1 className={styles.pageHeading}>Ввод значения</h1>
		<p className={styles.noMarginText}> Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"</p>
		<div className={styles.error}>{error}</div>

		<div className={styles.buttonsContainer}>
			<button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
			<button className={styles.button} disabled={isValueVaild} onClick={onAddButtonClick}>Добавить в список</button>
		</div>
		<div className={styles.li}>
			<h2 className={styles.listHeading}>Список:</h2>
			<p className={styles.noMarginText}>{noMarginText}</p>
			<ul className={styles.list}>
				  {list.map(item => <li key={item.id}>{item.value}</li>)}
			</ul>
		</div>
	</div>
    </>
  )
}


