import React from "react";
import './Landing.scss';
import { ReactComponent as Logo } from "../../../assets/svgs/logo.svg";
import { ReactComponent as Wave } from "../../../assets/svgs/wave.svg";
import { ReactComponent as Cell } from "../../../assets/svgs/cell.svg";
import { ReactComponent as Graphic } from "../../../assets/svgs/graphic.svg";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <>
            <div className="img-background d-flex align-items-center">
                <Wave className="sub-div w-100" />

                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">

                        </div>
                        <div className="col-xl-7">
                            <div className="row d-flex justify-content-center justify-content-xl-end text-landing p-3 col-xl-5">
                                Gestão na<br/>palma da mão
                            </div>
                            <div className="row d-flex justify-content-center justify-content-xl-end subtext-landing p-3 col-xl-6">
                                Lorem que<br/>horror ipsum
                            </div>
                            <div className="row d-flex justify-content-center justify-content-xl-end subtext-landing p-3 col-xl-8">
                                Lorem que<br/>horror ipsum
                            </div>
                            <div className="row d-flex justify-content-center justify-content-xl-end subtext-landing p-3 col-xl-10">
                                <Link to={'/login'} className="pink-button">Registre-se</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing-logo">
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "Iceberg",
                        fontSize: '4rem',
                        fontStyle: "normal",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        textDecoration: "none",
                        textAlign: "center",
                        }}>
                        <div className="logo">
                            <Logo height={"100%"} width={"100%"} />
                        </div>
                        <p className="landing-text-logo">&nbsp;&nbsp;Easy Chef</p>
                    </Typography>
                </div>
            </div>
            <div>
                <div className="container">
                    <Cell className="cell"/>
                    <Graphic className="graphic"/>
                </div>
            </div>
        </>
    );
}