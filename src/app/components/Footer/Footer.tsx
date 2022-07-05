import * as React from "react";
import "./Footer.scss";
import { ReactComponent as Logo } from "../../../assets/svgs/logo.svg";
import { ReactComponent as Facebook } from "../../../assets/svgs/facebook-icon.svg";
import { ReactComponent as Instagram } from "../../../assets/svgs/instagram-icon.svg";
import { ReactComponent as Linkedin } from "../../../assets/svgs/linkedin-icon.svg";
import { ReactComponent as Twitter } from "../../../assets/svgs/twitter-icon.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="footer">
        <div className="footer-content">
            <div className="d-flex justify-content-center p-3">
                <Facebook className="icon" />
                <Instagram className="icon" />
                <Linkedin className="icon" />
                <Twitter className="icon" />
            </div>
        </div>
        <div className="footer-credits">
            <div className="d-flex justify-content-center p-3">
                <p className="m-auto text-mini-logo">
                    <Logo height={"45px"} width={"45px"} />&nbsp;&nbsp;Easy Chef
                </p>
            </div>
        </div>
    </div>
  );
};
export default Footer;
