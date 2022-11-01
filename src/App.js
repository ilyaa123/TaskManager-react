
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Sort } from './components/Sort/Sort';

function App() {
  	return (
    	<div className="App">
			<Header />
			<Sort />
			<Home />
    	</div>
  	);
}

export default App;
