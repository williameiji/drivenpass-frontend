import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../src/assets/css/GlobalResetStyle";
import GlobalStyle from "../src/assets/css/GlobalStyle";
import UserContext from "../src/components/context/UserContext";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import PasswordsScreen from "./components/passwordsScreen/PasswordsScreen";
import Credentials from "./components/credentialsScreen/Credentials";

export default function App() {
	const [userInformation, setUserInformation] = useState(null);
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<UserContext.Provider value={{ setUserInformation, userInformation }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PasswordsScreen />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/main" element={<PasswordsScreen />} />
						<Route path="/credentials" element={<Credentials />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
