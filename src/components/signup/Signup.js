import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthScreen from "../authScreen/AuthScreen";
import AuthLoading from "../shared/AuthLoading";
import urls from "../shared/urls";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

export default function Signup() {
	const [signupDataInput, setSignupDataInput] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [blockButtom, setBlockButtom] = useState(false);
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

	function handleFormChange(e) {
		let data = { ...signupDataInput };
		data[e.target.name] = e.target.value;
		setSignupDataInput(data);
	}

	async function submitSignup(e) {
		e.preventDefault();
		setBlockButtom(true);

		await axios
			.post(urls.signup, signupDataInput)
			.then((response) => {
				setIsSuccessModalOpen(true);
			})
			.catch((err) => {
				setBlockButtom(false);
				setIsErrorModalOpen(true);
			});
	}

	function toLogin() {
		navigate("/");
	}

	return (
		<AuthScreen>
			<SuccessModal
				isSuccessModalOpen={isSuccessModalOpen}
				setIsSuccessModalOpen={setIsSuccessModalOpen}
			/>
			<ErrorModal
				isErrorModalOpen={isErrorModalOpen}
				setIsErrorModalOpen={setIsErrorModalOpen}
			/>
			<Forms onSubmit={submitSignup}>
				<LabelInput>Usuário (e-mail)</LabelInput>
				<input
					type="email"
					name="email"
					onChange={(e) => handleFormChange(e)}
					value={signupDataInput.email}
					required
				/>
				<LabelInput>Senha</LabelInput>
				<input
					type="password"
					name="password"
					onChange={(e) => handleFormChange(e)}
					value={signupDataInput.password}
					required
				/>
				<ButtonSend type="submit" block={blockButtom}>
					{blockButtom ? <AuthLoading /> : "Criar"}
				</ButtonSend>
				<ButtonBack onClick={toLogin}>{"< Voltar"}</ButtonBack>
			</Forms>
		</AuthScreen>
	);
}

const Forms = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 0 80px 0;
	width: 80%;
	height: 80%;

	input[type="email"],
	input[type="password"] {
		font-size: 27px;
		border-radius: 6px;
		height: 65px;
		border: 3px solid #005985;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
		width: 100%;
		padding-left: 15px;

		::placeholder {
			font-size: 27px;
			color: #9f9f9f;
		}
	}
`;

const LabelInput = styled.label`
	font-weight: 400;
	font-size: 18px;
	color: #000000;
	text-align: center;
`;

const ButtonSend = styled.button`
	font-family: "Recursive";
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 65px;
	margin: 25px auto 0 auto;
	background: #9bfbb0;
	border-radius: 6px;
	font-size: 27px;
	border: 3px solid #9bfbb0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	color: #000000;
	pointer-events: ${(props) => (props.block ? "none" : null)};
	cursor: pointer;
`;

const ButtonBack = styled.button`
	font-family: "Recursive";
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 65px;
	margin: 0 auto;
	background: #fb9b9b;
	border-radius: 6px;
	font-size: 27px;
	border: 3px solid #fb9b9b;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	color: #000000;
`;
