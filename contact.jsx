// App.js
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from 'contact.html';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/contact">Contact Us</Link>
            </nav>
            <Route path="/contact" component={Contact} />
        </Router>
    );
}

export default App;
