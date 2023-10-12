import {Link} from 'react-router-dom';
function Nav () {
    return (
        <div class = "navbar bg-dark px-4">
            <Link class="navbar-brand text-light" to ="/"> Flipkart</Link>
            <div class="nav ms-auto">
                <Link class="nav-link" to="/blog">Blog</Link>
                <Link class="nav-link" to="/">Home</Link>
                <Link class="nav-link" to="/project">Project</Link>
                <Link class="nav-link" to="/contact">Contact</Link>
            </div>
            <button class="btn btn-success">Order Now</button>
        </div>
    )
}
export default Nav;