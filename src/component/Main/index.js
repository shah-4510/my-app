import React from "react";
import { Routes, Route } from "react-router-dom";
import Series from "../../conatiners/Series";
const Main = props => (
    <Routes>
        <Route path="/" element = {<Series/>} exact />
    </Routes>
);

export default Main;