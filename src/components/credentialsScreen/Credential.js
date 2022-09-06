import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import axios from "axios";

import MainScreen from "../mainScreen/MainScreen";
import InformationsContext from "../context/InformationsContext";
import UserContext from "../context/UserContext";

export default function Credential() {
	const { informations, setInformations } = useContext(InformationsContext);
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	function backToCredentials() {
		navigate("/credentials");
		setInformations(null);
	}

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${userInformation.token}`,
	// 	},
	// };

	function deleteCredential(id) {
		axios.delete(`delete/${id}`);
	}

	return (
		<MainScreen>
			<TitleCredentials>Minhas senhas</TitleCredentials>
			<Box>
				<Text>{`Site 1`}</Text>
				<Title>URL</Title>
				<Text>https://linux.com.br</Text>
				<Title>Usuário</Title>
				<Text>PinguimMaluco</Text>
				<Title>Senha</Title>
				<Text>XXAS@123i_ll</Text>
			</Box>
			<Bottom>
				<BackButton onClick={backToCredentials}>{"< Voltar"}</BackButton>
				<DeleteButton onClick={() => deleteCredential()}>X</DeleteButton>
			</Bottom>
		</MainScreen>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 20px;
`;

const Title = styled.p`
	font-family: "Recursive";
	font-weight: 700;
	font-size: 20px;
	color: #222222;
	margin-top: 20px;
`;
const Text = styled.p`
	font-family: "Recursive";
	font-size: 20px;
	color: #222222;
	margin-top: 8px;
`;

const TitleCredentials = styled.div`
	font-family: "Recursive";
	font-size: 18px;
	color: white;
	background: #005985;
	border: 3px solid #005985;
	padding: 8px 12px;
`;

const Bottom = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 20px 15px;
`;

const BackButton = styled.div`
	font-family: "Recursive";
	font-size: 18px;
	text-align: center;
	text-decoration-line: underline;
	color: #000000;
`;

const DeleteButton = styled.div`
	width: 61px;
	height: 61px;
	border-radius: 50px;
	background: #f52424;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 25px;
	font-weight: bold;
`;
