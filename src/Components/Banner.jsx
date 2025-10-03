import { Link } from 'react-router-dom';
import logo from '../assets/logosneaker.jpg';
import '../styles/Banner.css';

function Banner({ cartItemsCount = 0 }) {
  return (
    <header className="banner">
      <div className="banner-container">
        {/* Section logo et titre */}
        <div className="banner-brand">
          <img src={logo} className="banner-logo" alt="Logo Sneakers" />
          <div className="banner-content">
            <h1>Sneakers Store</h1>
            <p>Trouvez les sneakers de vos rêves</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="banner-navigation">
          <Link to="/" className="nav-link">
            🏠 Catalogue
          </Link>
          <Link to="/cart" className="nav-link">
            🛒 Panier ({cartItemsCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Banner;

