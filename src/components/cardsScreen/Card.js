import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import LoadingData from "../shared/LoadingData";
import DeleteModal from "../shared/DeleteModal";
import ErrorModal from "../shared/ErrorModal";
import urls from "../shared/urls";

export default function Card() {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
	const [card, setCard] = useState(null);
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();
	const { id } = useParams();

	function backToCards() {
		navigate("/cards");
	}

	const config = {
		headers: {
			Authorization: `Bearer ${userInformation}`,
		},
	};

	useEffect(() => {
		axios
			.get(`${urls.cards}/${id}`, config)
			.then((response) => {
				setCard(response.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	}, []);

	function deleteCards(id) {
		axios
			.delete(`${urls.cards}/${id}`, config)
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
			<TitleCards>Cartões</TitleCards>
			{!card ? (
				<BoxLoading>
					<LoadingData />
				</BoxLoading>
			) : (
				<>
					<Box>
						<Text>{card.title}</Text>
						<Title>Número</Title>
						<Text>{card.number}</Text>
						<Title>Nome impresso</Title>
						<Text>{card.name}</Text>
						<Title>CVC</Title>
						<Text>{card.cvc}</Text>
						<Title>Data de expiração</Title>
						<Text>{card.date}</Text>
						<Title>Senha</Title>
						<Text>{card.password}</Text>
						<Title>Virtual</Title>
						<Text>{card.isVirtual ? "Sim" : "Não"}</Text>
						<Title>Tipo</Title>
						<Text>{card.type}</Text>
					</Box>
					<Bottom>
						<BackButton onClick={backToCards}>{"< Voltar"}</BackButton>
						<DeleteButton onClick={() => deleteCards(card.id)}>X</DeleteButton>
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

const TitleCards = styled.div`
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
	padding: 10px 15px;
`;

const BackButton = styled.div`
	font-family: "Recursive";
	font-size: 18px;
	text-align: center;
	text-decoration-line: underline;
	color: #000000;
`;

const DeleteButton = styled(IoCloseCircle)`
	color: #f52424;
	font-size: 90px;
`;

const BoxLoading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 40px 0 0;
`;
