import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/player" element={<Player />} />
				<Route exact path="/movies" element={<Movies />} />
				<Route exact path="/tv" element={<TVShows />} />
				<Route exact path="/mylist" element={<MyList />} />
				<Route exact path="/" element={<Netflix />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
