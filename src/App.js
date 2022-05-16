import Modal from "./components/Modal"
import HomePage from "./components/HomePage";
import { ModalProvider } from './context/Context'

function App() {

  return (
    <ModalProvider>
      <div className="App">
        <HomePage />
        <Modal />
      </div>
    </ModalProvider>
  )
}

export default App;
