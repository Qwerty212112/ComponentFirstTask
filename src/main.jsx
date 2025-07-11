import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Heading, ButtonContainer, ListContainer} from './Component/index'
import './assets/style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
	<div className="app">
    <Heading />
	<ButtonContainer />
	<ListContainer />
	</div>
  </StrictMode>,
)
