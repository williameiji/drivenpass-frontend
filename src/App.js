import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalResetStyle from "../src/assets/css/GlobalResetStyle";
import GlobalStyle from "../src/assets/css/GlobalStyle";
import UserContext from "../src/components/context/UserContext";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import PasswordsScreen from "./components/passwordsScreen/PasswordsScreen";
import Credentials from "./components/credentialsScreen/Credentials";
import Credential from "./components/credentialsScreen/Credential";
import Notes from "./components/notesScreen/Notes";
import Note from "./components/notesScreen/Note";
import Cards from "./components/cardsScreen/Cards";
import Card from "./components/cardsScreen/Card";
import Wifis from "./components/wifisScreen/Wifis";
import Wifi from "./components/wifisScreen/Wifi";
import NewRecordScreen from "./components/newRecord/NewRecordScreen";
import NewCredential from "./components/newRecord/NewCredential";
import NewNote from "./components/newRecord/NewNote";
import NewCard from "./components/newRecord/NewCard";
import NewWifi from "./components/newRecord/NewWifi";

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
						<Route path="/main" element={<PasswordsScreen />} />
						<Route path="/credentials" element={<Credentials />} />
						<Route path="/credential/:id" element={<Credential />} />
						<Route path="/notes" element={<Notes />} />
						<Route path="/note/:id" element={<Note />} />
						<Route path="/cards" element={<Cards />} />
						<Route path="/card/:id" element={<Card />} />
						<Route path="/wifis" element={<Wifis />} />
						<Route path="/wifi/:id" element={<Wifi />} />
						<Route path="/newrecord" element={<NewRecordScreen />} />
						<Route path="/newcredential" element={<NewCredential />} />
						<Route path="/newnote" element={<NewNote />} />
						<Route path="/newcard" element={<NewCard />} />
						<Route path="/newwifi" element={<NewWifi />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
