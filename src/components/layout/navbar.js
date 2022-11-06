function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-1 navbar-fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CodeQuiz
                    {/* <img className='box-to-slide-in-1 slide-in-1' height="24" src="./images/web-design-5-fancy-text.png" alt="Failed loading..." /> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/in/gudmundur-axel-gudrunarson"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/RegAse"></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="mailto:gudmundur210@gmail.com"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;