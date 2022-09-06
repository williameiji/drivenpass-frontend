import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthScreen from "../authScreen/AuthScreen";
import AuthLoading from "../shared/AuthLoading";
import UserContext from "../context/UserContext";
import urls from "../shared/urls";
import LoginModal from "./LoginModal";

export default function Login() {
	const [loginDataInput, setLoginDataInput] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [blockButtom, setBlockButtom] = useState(false);
	const { setUserInformation } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function handleFormChange(e) {
		let data = { ...loginDataInput };
		data[e.target.name] = e.target.value;
		setLoginDataInput(data);
	}

	async function submitLogin(e) {
		e.preventDefault();
		setBlockButtom(true);

		await axios
			.post(urls.login, loginDataInput)
			.then((response) => {
				setUserInformation(response.data);
				navigate("");
			})
			.catch((err) => {
				setBlockButtom(false);
				setIsModalOpen(true);
			});
	}

	function toSignup() {
		navigate("/signup");
	}

	return (
		<AuthScreen>
			<LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			<Forms onSubmit={submitLogin}>
				<LabelInput>Usuário (e-mail)</LabelInput>
				<input
					type="email"
					name="email"
					onChange={(e) => handleFormChange(e)}
					value={loginDataInput.email}
					required
				/>
				<LabelInput>Senha</LabelInput>
				<input
					type="password"
					name="password"
					onChange={(e) => handleFormChange(e)}
					value={loginDataInput.password}
					required
				/>
				<Button type="submit" block={blockButtom}>
					{blockButtom ? <AuthLoading /> : "Acessar"}
				</Button>
				<Line></Line>
				<Switch onClick={toSignup}>Primeiro acesso? Crie sua conta!</Switch>
			</Forms>
		</AuthScreen>
	);
}

const Forms = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 0;
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

const Button = styled.button`
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

const Switch = styled.div`
	font-weight: 400;
	font-size: 20px;
	text-align: center;
	text-decoration-line: underline;
	color: #000000;
	cursor: pointer;
`;

const Line = styled.div`
	border: 1px solid #dbdbdb;
`;
