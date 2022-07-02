import React from "react";
import './Landing.scss';
import { ReactComponent as Logo } from "../../../assets/svgs/logo.svg";
import Typography from "@mui/material/Typography";

export default function Landing() {
    return (
        <>
            <div className="img-background">Landing Page
                <svg className="sub-div d-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#050C11" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,197.3C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                    </path>
                </svg>
                
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
                    <Logo height={"10rem"} width={"10rem"} />
                    <p className="m-auto text-logo">&nbsp;&nbsp;EasyChef</p>
                </Typography>
                </div>
            </div>
            <div>
                <h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum? Natus minus sed pariatur cum ea! Reprehenderit accusantium doloremque esse, sed aliquam error maxime numquam quae iste aspernatur mollitia vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate rem voluptatum vero temporibus facere vel, fuga autem, saepe omnis ut pariatur ullam debitis praesentium, unde assumenda ea odio animi quas!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, suscipit similique cum dolore repellat facere unde repudiandae porro mollitia provident quis amet eligendi accusamus magni autem voluptatem dignissimos distinctio voluptas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab voluptate itaque eius totam amet magni commodi eos distinctio expedita non, at, cupiditate accusamus quis inventore soluta asperiores quaerat repudiandae!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, vitae explicabo impedit, voluptatum sunt necessitatibus non quod laudantium, atque quisquam eligendi ipsa! Laborum magni enim odio aperiam tenetur unde distinctio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut voluptate quibusdam minus, natus ducimus neque iure eius? Nesciunt asperiores atque dicta corrupti libero exercitationem ab qui in tempora distinctio!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum? Natus minus sed pariatur cum ea! Reprehenderit accusantium doloremque esse, sed aliquam error maxime numquam quae iste aspernatur mollitia vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate rem voluptatum vero temporibus facere vel, fuga autem, saepe omnis ut pariatur ullam debitis praesentium, unde assumenda ea odio animi quas!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, suscipit similique cum dolore repellat facere unde repudiandae porro mollitia provident quis amet eligendi accusamus magni autem voluptatem dignissimos distinctio voluptas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab voluptate itaque eius totam amet magni commodi eos distinctio expedita non, at, cupiditate accusamus quis inventore soluta asperiores quaerat repudiandae!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, vitae explicabo impedit, voluptatum sunt necessitatibus non quod laudantium, atque quisquam eligendi ipsa! Laborum magni enim odio aperiam tenetur unde distinctio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut voluptate quibusdam minus, natus ducimus neque iure eius? Nesciunt asperiores atque dicta corrupti libero exercitationem ab qui in tempora distinctio!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum? Natus minus sed pariatur cum ea! Reprehenderit accusantium doloremque esse, sed aliquam error maxime numquam quae iste aspernatur mollitia vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate rem voluptatum vero temporibus facere vel, fuga autem, saepe omnis ut pariatur ullam debitis praesentium, unde assumenda ea odio animi quas!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, suscipit similique cum dolore repellat facere unde repudiandae porro mollitia provident quis amet eligendi accusamus magni autem voluptatem dignissimos distinctio voluptas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab voluptate itaque eius totam amet magni commodi eos distinctio expedita non, at, cupiditate accusamus quis inventore soluta asperiores quaerat repudiandae!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, vitae explicabo impedit, voluptatum sunt necessitatibus non quod laudantium, atque quisquam eligendi ipsa! Laborum magni enim odio aperiam tenetur unde distinctio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut voluptate quibusdam minus, natus ducimus neque iure eius? Nesciunt asperiores atque dicta corrupti libero exercitationem ab qui in tempora distinctio!   
                </h1>
            </div>
        </>
    );
}