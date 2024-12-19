import './App.css'
import { FloatingLabelInput } from './components/Input/Input'

function App() {
  return (
    <>
      {/* <h1>React UI components</h1> */}

      <div>
        <FloatingLabelInput type='email' label='Email' name='email' />
      </div>
    </>
  )
}

export default App
