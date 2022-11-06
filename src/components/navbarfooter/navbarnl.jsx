import Logo from "../asset/img/loge.png"

const Navbarnl = () => {
    return (
        <>
            <div className="kepala">
                <header className="d-flex justify-content-center align-items-center py-1 px-5 fw-bold">
                    <a href="#" className="d-flex align-content-start col-1"><img src={Logo} width="230" height="auto"
                        alt="Logo" /></a>
                    <ul className="nav col-9 justify-content-center">
                        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Galeri</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Event dan Pameran</a></li>
                    </ul>
                    <ul className="nav col-2 justify-content-center gap-3 align-items-center">
                        <li className="nav-item"><a href="#" className="nav-link">Daftar</a></li>
                        <li className="nav-item">	<a href="" className="trigger-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>
                        </li>
                    </ul>
                </header>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mb-4">
                            <form action="" method="post">
                                <div className="form-group">
                                    <i className="fa fa-user"></i>
                                    <p>Username</p>
                                    <input type="email" className="form-control" placeholder="Email" required="required" />
                                </div>
                                <div className="form-group my-4">
                                    <i className="fa fa-lock"></i>
                                    <p>Password</p>
                                    <input type="password" className="form-control" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block btn-lg" onClick={window.location='Homepage.jsx'}>Login</button>
                                    {/* <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login" onClick={window.location='Homepage.jsx'}/> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbarnl;