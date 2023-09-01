import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../service/Context';
import './footer.scss';

const Footer = () => {
    const categories = useContext(Context);
    const renderCategories = (arr) => {
        return arr.map(obj => {
            const category = Object.keys(obj)[0];
            return (
            <li key={category} className="footer-app__sublist-item">
                <Link to={`/${category}`} className="footer-app__sublist-link">{category}</Link>
            </li>
            )
        })
    }
    const categoriesElements = renderCategories(categories);
    return (
        <div className="app-footer footer-app">
            <ul className="footer-app__list">
                <li className="footer-app__column">
                    <Link to="/" className='footer-app__logo'>World News</Link>
                </li>
                <li className="footer-app__column">
                    <ul className="footer-app__sublist-list">
                        <li className="footer-app__sublist-item footer-app__sublist-item_header">Categories</li>
                        {categoriesElements}
                    </ul>
                </li>
                <li className="footer-app__column">
                    <ul className="footer-app__sublist-list">
                        <li className="footer-app__sublist-item footer-app__sublist-item_header">Company</li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="/about">About Us</Link>
                        </li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="/careers">Careers</Link>
                        </li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="/privacy_policy">Privacy Policy</Link>
                        </li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="terms_of_services">Terms of Services</Link>
                        </li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="contact_us">Contact Us</Link>
                        </li>
                    </ul>
                </li>
                <li className="footer-app__column">
                    <ul className="footer-app__sublist-list">
                        <li className="footer-app__sublist-item footer-app__sublist-item_header">Social Media</li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="https://youtube.com">Youtube</Link>
                        </li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="https://instagram.com">Instagram</Link>
                        </li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="https://facebook.com">Facebook</Link>
                        </li>
                        <li className="footer-app__sublist-item">
                            <Link className="footer-app__sublist-link" to="https://twitter.com">Twitter</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Footer;