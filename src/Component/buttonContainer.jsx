
export function ButtonContainer () {
	return (
		<>
		<div className="buttons-container">
			<button className="button" id='1' onClick={promtForNewValue}>Ввести новое</button>
			<button className="button" id='2' disabled>Добавить в список</button>
		</div>
		</>
	)
}

function promtForNewValue () {
	const promtValue = prompt("Введите что-нибудь:");
	promtFilter (promtValue)
	return promtValue
}


function promtFilter (value) {

	const textError = document.querySelector('.error')

	if (value.length >= 3) {
		if (textError) {
			textError.remove()
		}
		addCurrentValue(value)
		return
	} else {
		const currentValue = document.querySelector('.current-value')

		if (textError) {
			return
		}
		const error = document.createElement('div')
		error.className = 'error'
		error.textContent = 'Введенное значение должно содержать минимум 3 символа'
		document.querySelector('.app').append(error)
		document.getElementById('2').disabled = true
		currentValue.textContent = ""
		return

	}

}

function addCurrentValue (value) {
	const currentValue = document.querySelector('.current-value')
	document.getElementById('2').disabled = false
	document.getElementById('2').onclick = addValueInList;
	currentValue.textContent = value
}

function addValueInList () {
	const currentValue = document.querySelector('.current-value')
	const list = document.querySelector('.list')
	const newElement = document.createElement('li')
	newElement.className = 'list-item'
	newElement.textContent = currentValue.textContent
	list.append(newElement)
	currentValue.textContent = ''
	document.getElementById('2').disabled = true
	return
}
