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

export default function NewDocument() {
	const [modalMessage, setModalMessage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const [documentDataInput, setDocumentDataInput] = useState({
		type: "",
		name: "",
		validate: "",
		emission: "",
		number: "",
		dispatched: "",
	});
	const { userInformation } = useContext(UserContext);

	function handleFormChange(e) {
		let data = { ...documentDataInput };
		data[e.target.name] = e.target.value;
		setDocumentDataInput(data);
	}

	async function sendInformation() {
		axios
			.post(urls.documents, documentDataInput, config(userInformation))
			.then((response) => {
				setModalMessage({
					title: "Muito bem!",
					text: "Documento adicionado com sucesso!",
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

			<TitleHeader>Documetos</TitleHeader>
			<Box>
				<Title>Cadastro</Title>
				<LabelInput>Tipo de documento</LabelInput>
				<div>
					<input
						type="radio"
						id="rg"
						name="type"
						value={"rg"}
						onChange={(e) => handleFormChange(e)}
					/>
					<LabelInput htmlFor="rg">RG</LabelInput>
				</div>
				<div>
					<input
						type="radio"
						id="cnh"
						name="type"
						value={"cnh"}
						onChange={(e) => handleFormChange(e)}
					/>
					<LabelInput htmlFor="cnh">CNH</LabelInput>
				</div>
				<LabelInput>Nome completo</LabelInput>
				<input
					type="text"
					name="name"
					placeholder="Ex: João S."
					onChange={(e) => handleFormChange(e)}
					value={documentDataInput.name}
					required
				/>
				<LabelInput>Data de validade</LabelInput>
				<input
					type="text"
					name="validate"
					placeholder="Ex: 01/10/2024"
					onChange={(e) => handleFormChange(e)}
					value={documentDataInput.validate}
					required
				/>
				<LabelInput>Data de emissão</LabelInput>
				<input
					type="text"
					name="emission"
					placeholder="Ex: 01/10/2019"
					onChange={(e) => handleFormChange(e)}
					value={documentDataInput.emission}
					required
				/>
				<LabelInput>Número de registro</LabelInput>
				<input
					type="number"
					name="number"
					placeholder="Ex: 1234512345"
					onChange={(e) => handleFormChange(e)}
					value={documentDataInput.number}
					required
				/>
				<LabelInput>Orgão emissor</LabelInput>
				<input
					type="text"
					name="dispatched"
					placeholder="Ex: ssp"
					onChange={(e) => handleFormChange(e)}
					value={documentDataInput.dispatched}
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

	div {
		margin-top: 12px;
	}

	input[type="text"],
	input[type="password"],
	input[type="number"] {
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
