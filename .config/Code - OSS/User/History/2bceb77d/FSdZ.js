import './App.css';
import Header from './elements/header';

function App({ page }) {
  return (
    <div className="App">
      <Header page={page} />
    </div>
  );
}

export default App;
