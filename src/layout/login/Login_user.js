import React from "react";

export default function Login_User() {

    return (
        <div className="text-center login-form" >
            <main className="form-signin">
                <form>
                    <img className="mb-4" src="../logo1.png" alt="" width="98" height="92"/>
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" disabled/> Remember me
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        </div>
    );
}