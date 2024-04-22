
import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Furniture from './Components/FurnitureComponents/Furniture';

function App() {
  return (
    <div className="App">
      <div className='block'> 
      <AllCategories/>
      <Cart/>
      </div>
      <div className='block'> 
      <Furniture/>
      </div>
    </div>
  );
}

export default App;
