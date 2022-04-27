import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UseEffectComponent from './components/UseEffectComponent'
// import UseStateComponent from './components/UseStateComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseStateComponent /> */}
        <UseEffectComponent />
      </header>
    </div>
  )
}

export default App
