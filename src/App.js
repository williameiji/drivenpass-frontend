import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalResetStyle from "../src/assets/css/GlobalResetStyle";
import GlobalStyle from "../src/assets/css/GlobalStyle";
import UserContext from "../src/components/context/UserContext";

import Login from "./components/login/Login";

export default function App() {
	return (
		<>
			<GlobalResetStyle />
			<GlobalStyle />
			<UserContext.Provider value={""}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
