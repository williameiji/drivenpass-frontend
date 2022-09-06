import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../src/assets/css/GlobalResetStyle";
import GlobalStyle from "../src/assets/css/GlobalStyle";
import UserContext from "../src/components/context/UserContext";
import InformationsContext from "../src/components/context/InformationsContext";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import PasswordsScreen from "./components/passwordsScreen/PasswordsScreen";
import Credentials from "./components/credentialsScreen/Credentials";
import Credential from "./components/credentialsScreen/Credential";

export default function App() {
	const [userInformation, setUserInformation] = useState(null);
	const [informations, setInformations] = useState(null);
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<UserContext.Provider value={{ setUserInformation, userInformation }}>
				<InformationsContext.Provider value={{ informations, setInformations }}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<PasswordsScreen />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/main" element={<PasswordsScreen />} />
							<Route path="/credentials" element={<Credentials />} />
							<Route path="/credential" element={<Credential />} />
						</Routes>
					</BrowserRouter>
				</InformationsContext.Provider>
			</UserContext.Provider>
		</>
	);
}
