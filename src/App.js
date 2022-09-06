import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../src/assets/css/GlobalResetStyle";
import GlobalStyle from "../src/assets/css/GlobalStyle";
import UserContext from "../src/components/context/UserContext";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

export default function App() {
	const [userInformation, setUserInformation] = useState(null);
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<UserContext.Provider value={{ setUserInformation, userInformation }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
