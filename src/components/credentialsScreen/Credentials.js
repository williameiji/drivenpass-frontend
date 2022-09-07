import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IoLogIn } from "react-icons/io5";
import { useNavigate, IoAddCircle } from "react-router-dom";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import LoadingData from "../shared/LoadingData";
import config from "../shared/config";
import urls from "../shared/urls";

export default function Credentials() {
	const [credentials, setCredentials] = useState(null);
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(urls.credentials, config(userInformation))
			.then((response) => {
				setCredentials(response.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	}, []);

	function goToCredential(id) {
		navigate(`/credential/${id}`);
	}

	function goToNewPasswords() {
		navigate("/newrecord");
	}

	return (
		<MainScreen>
			<Title>Credenciais</Title>
			{!credentials ? (
				<BoxLoading>
					<LoadingData />
				</BoxLoading>
			) : !credentials.length ? (
				<NotFound>Nenhum item encontrado!</NotFound>
			) : (
				credentials.map((elem, index) => (
					<Box key={index} onClick={() => goToCredential(elem.id)}>
						<CredentialsLogo />
						<Text>{elem.title}</Text>
					</Box>
				))
			)}
			<Bottom>
				<AddButton onClick={goToNewPasswords}>+</AddButton>
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

const CredentialsLogo = styled(IoLogIn)`
	font-size: 55px;
	color: #005985;
`;

const Box = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 20px;
`;

const Text = styled.p`
	font-family: "Recursive";
	font-size: 18px;
	color: #222222;
	margin-left: 20px;
`;

const BoxLoading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 40px 0 0;
`;

const AddButton = styled(IoAddCircle)`
	color: #005985;
	font-size: 90px;
`;
const NotFound = styled.p`
	margin-top: 20px;
	text-align: center;
`;

const Bottom = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: flex-end;
	justify-content: end;
	width: 100%;
	padding: 10px 15px;
`;
