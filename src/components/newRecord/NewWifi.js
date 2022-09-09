import styled from "styled-components";
import { useState, useContext } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import MainScreen from "../mainScreen/MainScreen";
import ModalGeneric from "../shared/ModalGeneric";
import UserContext from "../context/UserContext";
import config from "../shared/config";
import urls from "../shared/urls";

export default function NewWifi() {
	const [modalMessage, setModalMessage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const [wifiDataInput, setWifiDataInput] = useState({
		title: "",
		name: "",
		password: "",
	});
	const { userInformation } = useContext(UserContext);

	function handleFormChange(e) {
		let data = { ...wifiDataInput };
		data[e.target.name] = e.target.value;
		setWifiDataInput(data);
	}

	async function sendInformation() {
		axios
			.post(urls.wifis, wifiDataInput, config(userInformation))
			.then((response) => {
				setModalMessage({
					title: "Muito bem!",
					text: "Wi-fi adicionado com sucesso!",
					new: true,
				});
				setIsModalOpen(true);
			})
			.catch((err) => {
				setIsModalOpen(true);
			});
	}

	function backToNewRecords() {
		navigate("/newrecord");
	}

	return (
		<MainScreen>
			<ModalGeneric
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				modalMessage={modalMessage}
			/>

			<TitleHeader>Wi-fi</TitleHeader>
			<Box>
				<Title>Cadastro</Title>
				<LabelInput>Título</LabelInput>
				<input
					type="text"
					name="title"
					placeholder="Ex: casa"
					onChange={(e) => handleFormChange(e)}
					value={wifiDataInput.title}
					required
				/>
				<LabelInput>Nome da rede</LabelInput>
				<input
					type="text"
					name="name"
					placeholder="Ex: MinhaRede"
					onChange={(e) => handleFormChange(e)}
					value={wifiDataInput.name}
					required
				/>
				<LabelInput>Senha</LabelInput>
				<input
					type="password"
					name="password"
					placeholder="Ex: 10203040"
					onChange={(e) => handleFormChange(e)}
					value={wifiDataInput.password}
					required
				/>
			</Box>
			<Bottom>
				<BackButton onClick={backToNewRecords}>{"< Voltar"}</BackButton>
				<AddButton onClick={sendInformation}>+</AddButton>
			</Bottom>
		</MainScreen>
	);
}

const TitleHeader = styled.div`
	font-family: "Recursive";
	font-size: 18px;
	color: white;
	background: #005985;
	border: 3px solid #005985;
	padding: 8px 12px;
`;

const Title = styled.div`
	font-weight: 400;
	font-size: 18px;
	color: #000000;
	font-family: "Recursive";
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 20px;
	margin-bottom: 80px;

	input[type="text"],
	input[type="password"] {
		font-size: 23px;
		border-radius: 6px;
		height: 40px;
		border: 3px solid #005985;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		width: 100%;
		padding-left: 15px;
		margin-top: 10px;

		::placeholder {
			font-size: 13px;
			color: #9f9f9f;
		}
	}
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

const AddButton = styled(IoCheckmarkCircle)`
	color: #9bfbb0;
	font-size: 90px;
`;

const BackButton = styled.div`
	font-family: "Recursive";
	font-size: 18px;
	text-decoration-line: underline;
	color: #000000;
`;

const LabelInput = styled.label`
	font-weight: 400;
	font-size: 18px;
	color: #000000;
	font-family: "Recursive";
	margin-top: 20px;
`;
