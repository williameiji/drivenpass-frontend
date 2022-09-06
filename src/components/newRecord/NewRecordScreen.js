import styled from "styled-components";
import { IoLogIn } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import MainScreen from "../mainScreen/MainScreen";

export default function NewRecordScreen() {
	const navigate = useNavigate();

	function toToPasswords() {
		navigate("/main");
	}

	function goToNewCredential() {
		navigate("/newcredential");
	}

	function goToNewNote() {
		navigate("/newnote");
	}

	function goToNewCard() {
		navigate("/newcard");
	}

	function goToNewRecords() {
		navigate("/newrecord");
	}

	function goToNewWifi() {
		navigate("/newwifi");
	}

	return (
		<MainScreen>
			<Title>Categorias</Title>
			<Box>
				<BoxTypes onClick={goToNewCredential}>
					<CredentialsLogo />
					<Text>Credenciais</Text>
				</BoxTypes>
				<BoxTypes onClick={goToNewNote}>
					<NotesLogo />
					<Text>Notas seguras</Text>
				</BoxTypes>
				<BoxTypes onClick={goToNewCard}>
					<CardsLogo />
					<Text>Cartões</Text>
				</BoxTypes>
				<BoxTypes onClick={goToNewWifi}>
					<WifiLogo />
					<Text>Senhas de Wi-fi</Text>
				</BoxTypes>
			</Box>
			<Bottom>
				<BackButton onClick={toToPasswords}>{"< Voltar"}</BackButton>
				<AddButton onClick={goToNewRecords}>+</AddButton>
			</Bottom>
		</MainScreen>
	);
}

const Title = styled.div`
	font-family: "Recursive";
	font-size: 18px;
	color: white;
	background: #005985;
	border: 3px solid #005985;
	padding: 8px 12px;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 20px;
	margin-bottom: 80px;
`;

const BoxTypes = styled.div`
	display: flex;
	margin-bottom: 30px;
	align-items: center;
`;

const CredentialsLogo = styled(IoLogIn)`
	font-size: 55px;
	color: #005985;
`;

const NotesLogo = styled(IoPencil)`
	font-size: 55px;
	color: #005985;
`;

const CardsLogo = styled(IoWallet)`
	font-size: 55px;
	color: #005985;
`;

const WifiLogo = styled(IoWifi)`
	font-size: 55px;
	color: #005985;
`;

const Text = styled.p`
	font-family: "Recursive";
	font-size: 18px;
	color: #222222;
	margin-left: 20px;
`;

const Bottom = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 10px 15px;
`;

const AddButton = styled.div`
	width: 61px;
	height: 61px;
	border-radius: 50px;
	background: #005985;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 40px;
`;

const BackButton = styled.div`
	font-family: "Recursive";
	font-size: 18px;
	text-decoration-line: underline;
	color: #000000;
`;
