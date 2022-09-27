import React from "react";
import "../App.css";
import Navigation from "../Containers/Navigation";

export default function Header() {
    return (
        <div class="header">
            <Navigation />
        <h1>Health Trackr!</h1>
    
        <h4>Let us help you track your doctors, doctors appointments, and medications!</h4>
    </div>
    )
}