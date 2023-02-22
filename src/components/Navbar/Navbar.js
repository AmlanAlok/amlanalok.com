import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">Amlan Alok</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/resume'>Resume</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar