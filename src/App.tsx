import './App.css'
import { useToggleButtonsState } from './useToggleButtonsState'

export default function App() {
  const {buttons, toggleAnyButton} = useToggleButtonsState();
  return (
    <main>
      {
        buttons.map((buttonState,index) => {
          return (
            <button key={index} onClick={() => toggleAnyButton(index)} style={{backgroundColor: buttonState? "green":"#444"}}>Toggle me!</button>
          )
        })
      }
    </main>
  )
}

