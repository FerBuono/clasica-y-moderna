import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  )
}

export default App
