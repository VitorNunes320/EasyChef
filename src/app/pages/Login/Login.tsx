import { ReactComponent as Logo } from "../../../assets/svgs/logo.svg";
import React from "react";

export default function Login() {
    return (
        <>
            <div className="img-background d-flex align-items-center justify-content-center">
                <div className="box">
                    <div className="d-flex justify-content-center p-3">
                        <p className="m-auto text-mini-logo">
                            <Logo height={"45px"} width={"45px"} />&nbsp;&nbsp;Easy Chef
                        </p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="input-email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="input-email" name="email" aria-describedby="emailHelp" placeholder="Email"/>
                        <small id="emailHelp" className="help-block">Não tem uma conta? Crie uma</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-account-name" className="form-label">Password</label>
                        <input type="password" className="form-control" id="input-password" name="password" placeholder="Password"/>
                        <small className="help-block">Esqueceu seu e-mail ou senha?</small>
                    </div>

                    <div className="d-flex justify-content-center p-3">
                        <button className="light-button">Entrar</button>
                    </div>
                </div>
            </div>
        </>
    );
}