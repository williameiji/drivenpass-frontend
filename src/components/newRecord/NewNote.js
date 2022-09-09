import styled from "styled-components";
import { useState, useContext } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import MainScreen from "../mainScreen/MainScreen";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import UserContext from "../context/UserContext";
import config from "../shared/config";
import urls from "../shared/urls";

export default function NewNote() {
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	const [counterTitle, setCounterTitle] = useState(0);
	const [counterText, setCounterText] = useState(0);
	const navigate = useNavigate();
	const [noteDataInput, setNoteDataInput] = useState({
		title: "",
		note: "",
	});
	const { userInformation } = useContext(UserContext);

	function handleFormChange(e) {
		let data = { ...noteDataInput };
		data[e.target.name] = e.target.value;
		setNoteDataInput(data);
		setCounterTitle(noteDataInput.title.length);
		setCounterText(noteDataInput.note.length);
	}

	async function sendInformation() {
		axios
			.post(urls.notes, noteDataInput, config(userInformation))
			.then((response) => {
				setIsSuccessModalOpen(true);
			})
			.catch((err) => {
				setIsErrorModalOpen(true);
			});
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
			<TitleHeader>Notas</TitleHeader>
			<Box>
				<Title>Cadastro</Title>
				<LabelInput>Título</LabelInput>
				<Input
					type="text"
					name="title"
					placeholder="Ex: Reunião"
					maxLength={50}
					onChange={(e) => handleFormChange(e)}
					value={noteDataInput.title}
					required
				/>
				<Limit>{`${counterTitle}/50`}</Limit>
				<LabelInput>Nota</LabelInput>
				<BigInput
					type="text"
					name="note"
					placeholder="Ex: Lembrar Joãozinho de *(dados sensíveis)* coisa..."
					maxLength={1000}
					onChange={(e) => handleFormChange(e)}
					value={noteDataInput.note}
					required
				/>
				<Limit>{`${counterText}/1000`}</Limit>
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
`;

const Limit = styled.p`
	font-size: 13px;
	margin-top: 5px;
`;

const Input = styled.input`
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
`;

const BigInput = styled.textarea`
	font-size: 23px;
	border-radius: 6px;
	height: 200px;
	border: 3px solid #005985;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	width: 100%;
	padding: 0 10px;
	margin-top: 10px;

	::placeholder {
		padding-top: 10px;
		font-size: 13px;
		color: #9f9f9f;
		word-wrap: break-word;
		word-break: break-all;
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
