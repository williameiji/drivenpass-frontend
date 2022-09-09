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

export default function NewCard() {
	const [modalMessage, setModalMessage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const [cardDataInput, setCardDataInput] = useState({
		title: "",
		number: "",
		name: "",
		cvc: "",
		date: "",
		password: "",
		isVirtual: false,
		type: "",
	});
	const { userInformation } = useContext(UserContext);

	function handleFormChange(e) {
		let data = { ...cardDataInput };
		data[e.target.name] = e.target.value;
		setCardDataInput(data);
	}

	async function sendInformation() {
		axios
			.post(urls.cards, cardDataInput, config(userInformation))
			.then((response) => {
				setModalMessage({
					title: "Muito bem!",
					text: "Cartão adicionado com sucesso!",
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

			<TitleHeader>Cartões</TitleHeader>
			<Box>
				<Title>Cadastro</Title>
				<LabelInput>Título</LabelInput>
				<input
					type="text"
					name="title"
					placeholder="Ex: nubank"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.title}
					required
				/>
				<LabelInput>Número do cartão</LabelInput>
				<input
					type="number"
					name="number"
					placeholder="Ex: 1234123412341234"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.number}
					required
				/>
				<LabelInput>Nome impresso no cartão</LabelInput>
				<input
					type="text"
					name="name"
					placeholder="Ex: João S."
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.name}
					required
				/>
				<LabelInput>CVC</LabelInput>
				<input
					type="text"
					name="cvc"
					placeholder="Ex: 123"
					maxLength={3}
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.cvc}
					required
				/>
				<LabelInput>Data de expiração</LabelInput>
				<input
					type="text"
					name="date"
					placeholder="Ex: 01/27"
					maxLength={5}
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.date}
					required
				/>
				<LabelInput>Senha</LabelInput>
				<input
					type="password"
					name="password"
					placeholder="Ex: 1234"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.password}
					required
				/>
				<div>
					<LabelInput htmlFor="isVirtual"> Virtual</LabelInput>
					<input
						type="checkbox"
						id="isVirtual"
						name="isVirtual"
						value={true}
						onChange={(e) => handleFormChange(e)}
					/>
				</div>

				<LabelInput>Tipo de cartão</LabelInput>
				<div>
					<input
						type="radio"
						id="crédito"
						name="type"
						value={"crédito"}
						onChange={(e) => handleFormChange(e)}
					/>
					<LabelInput htmlFor="crédito">Crédito</LabelInput>
				</div>
				<div>
					<input
						type="radio"
						id="débito"
						name="type"
						value={"débito"}
						onChange={(e) => handleFormChange(e)}
					/>
					<LabelInput htmlFor="débito">Débito</LabelInput>
				</div>
				<div>
					<input
						type="radio"
						id="ambos"
						name="type"
						value={"ambos"}
						onChange={(e) => handleFormChange(e)}
					/>
					<LabelInput htmlFor="ambos">Ambos</LabelInput>
				</div>
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
