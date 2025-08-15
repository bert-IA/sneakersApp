import Banner from './Banner'; // ← IMPORT : récupère le composant
import ShoppingList from './ShoppingList'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Banner /> {/* ← UTILISATION : place le composant dans le JSX */}
      <ShoppingList />
    </div>
  );
}

export default App;