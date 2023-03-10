import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'

const NavBar = (props) => {
    let location = useLocation();
    const navigate = useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem("token");
        props.showAlert("Logged Out Successfully", "Success");

        navigate("/login");

    }
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>

                        </ul>
                        {!localStorage.getItem("token") ? <form className="d-flex" role="search">
                            <Link className="btn btn-primary mx-2" to="/login" role="button">LogIn</Link>
                            <Link to="/signup" className="btn btn-primary mx-2" role="button">SignUp</Link>
                        </form> : <button className="btn btn-primary mx-2" onClick={handleLogout}>Logout</button>}
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar
