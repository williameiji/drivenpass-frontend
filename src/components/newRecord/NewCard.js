import styled from "styled-components";
import { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import MainScreen from "../mainScreen/MainScreen";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

export default function NewCard() {
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	const navigate = useNavigate();
	const [cardDataInput, setCardDataInput] = useState({
		title: "",
		number: "",
		name: "",
		cvc: "",
		date: "",
		password: "",
	});

	function handleFormChange(e) {
		let data = { ...cardDataInput };
		data[e.target.name] = e.target.value;
		setCardDataInput(data);
	}

	function backToNewRecords() {
		navigate("/newrecord");
	}

	return (
		<MainScreen>
			<SuccessModal
				isSuccessModalOpen={isSuccessModalOpen}
				setIsSuccessModalOpen={setIsSuccessModalOpen}
			/>
			<ErrorModal
				isErrorModalOpen={isErrorModalOpen}
				setIsErrorModalOpen={setIsErrorModalOpen}
			/>
			<TitleHeader>Cartões</TitleHeader>
			<Box>
				<Title>Cadastro</Title>
				<LabelInput>Título</LabelInput>
				<input
					type="text"
					name="title"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.title}
					required
				/>
				<LabelInput>Número do cartão</LabelInput>
				<input
					type="text"
					name="number"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.number}
					required
				/>
				<LabelInput>Nome impresso no cartão</LabelInput>
				<input
					type="text"
					name="name"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.name}
					required
				/>
				<LabelInput>CVC</LabelInput>
				<input
					type="text"
					name="cvc"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.cvc}
					required
				/>
				<LabelInput>Data de expiração</LabelInput>
				<input
					type="text"
					name="date"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.date}
					required
				/>
				<LabelInput>Senha</LabelInput>
				<input
					type="password"
					name="password"
					onChange={(e) => handleFormChange(e)}
					value={cardDataInput.password}
					required
				/>
			</Box>
			<Bottom>
				<BackButton onClick={backToNewRecords}>{"< Voltar"}</BackButton>
				<AddButton onClick={""}>+</AddButton>
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
		font-size: 27px;
		border-radius: 6px;
		height: 40px;
		border: 3px solid #005985;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		width: 100%;
		padding-left: 15px;
		margin-top: 10px;

		::placeholder {
			font-size: 27px;
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