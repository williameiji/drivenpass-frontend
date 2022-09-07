import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import LoadingData from "../shared/LoadingData";
import DeleteModal from "../shared/DeleteModal";
import ErrorModal from "../shared/ErrorModal";
import urls from "../shared/urls";

export default function Wifi() {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	const [wifi, setWifi] = useState(null);
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();
	const { id } = useParams();

	function backToWifis() {
		navigate("/wifis");
	}

	const config = {
		headers: {
			Authorization: `Bearer ${userInformation}`,
		},
	};

	useEffect(() => {
		axios
			.get(`${urls.wifis}/${id}`, config)
			.then((response) => {
				setWifi(response.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	}, []);

	function deleteWifi(id) {
		axios
			.delete(`${urls.wifis}/${id}`, config)
			.then(() => {
				setIsDeleteModalOpen(true);
			})
			.catch(() => {
				setIsErrorModalOpen(true);
			});
	}

	return (
		<MainScreen>
			<DeleteModal
				isDeleteModalOpen={isDeleteModalOpen}
				setIsDeleteModalOpen={setIsDeleteModalOpen}
			/>
			<ErrorModal
				isErrorModalOpen={isErrorModalOpen}
				setIsErrorModalOpen={setIsErrorModalOpen}
			/>
			<TitleWifis>Senhas de Wi-fi</TitleWifis>
			{!wifi ? (
				<BoxLoading>
					<LoadingData />
				</BoxLoading>
			) : (
				<>
					<Box>
						<Text>{wifi.title}</Text>
						<Title>URL</Title>
						<Text>{wifi.url}</Text>
						<Title>Usuário</Title>
						<Text>{wifi.name}</Text>
						<Title>Senha</Title>
						<Text>{wifi.password}</Text>
					</Box>
					<Bottom>
						<BackButton onClick={backToWifis}>{"< Voltar"}</BackButton>
						<DeleteButton onClick={() => deleteWifi(wifi.id)}>X</DeleteButton>
					</Bottom>
				</>
			)}
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

const TitleWifis = styled.div`
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

const BoxLoading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 40px 0 0;
`;
