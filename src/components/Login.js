import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from './Footer';

function Login() {
    return (
        <div className='login-main'>
            <main>
                <div className="login" id="login-id">
                    <h1>Login</h1>
                    <div className="container" style={{ padding: '30px' }}>
                        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100" style={{ padding: '50px' }}>
                                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div className="card" style={{ borderRadius: '15px' }}>
                                            <div className="card-body p-5">
                                                <h3 className="text-uppercase text-center mb-3">Login</h3>
                                                <form>
                                                    <div className="form-outline mb-3">
                                                        <input type="text" id="login-username" name="login-username" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="login-username">Username</label>
                                                    </div>
                                                    <div className="form-outline mb-3">
                                                        <input type="password" id="login-password" name="login-password" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="login-password">Password</label>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                                    </div>
                                                    <p className="text-center text-muted mt-3 mb-0">If you do not have an account. Please
                                                        <a href="signup.html" className="fw-bold text-body"><u>Sign Up</u></a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Login;