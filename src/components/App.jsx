import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Actors from "./Actors/Actors";
import MovieInformation from "./MovieInformation/MovieInformation";
import Movies from "./Movies/Movies";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/actors/:id" element={<Actors />}></Route>
          <Route path="/movies/:id" element={<MovieInformation />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
