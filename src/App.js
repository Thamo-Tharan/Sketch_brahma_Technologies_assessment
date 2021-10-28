import logo from './logo.svg';
import './App.css';
import Headercom from './components/header';
import Headingcom from './components/headingtext'
import Searchcom from './components/searchcom'
import Mealcat from './components/mealcategories'
function App() {
  return (
    <div className="App">
      <Headercom/>
      <Headingcom/>
      <Searchcom/>
      <Mealcat/>
    </div>
  );
}
export default App;
