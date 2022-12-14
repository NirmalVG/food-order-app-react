import React from "react";
import CardIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
    return (
        <>
            <button className={classes.button}>
                <span className={classes.icon}>
                    <CardIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>3</span>
            </button>
        </>
    );
};

export default HeaderCardButton;
