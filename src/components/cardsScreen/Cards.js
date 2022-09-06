import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IoWallet } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import LoadingData from "../shared/LoadingData";
import InformationsContext from "../context/InformationsContext";

export default function Cards() {
	const [cards, setCards] = useState(true);
	const { userInformation } = useContext(UserContext);
	const { setInformations } = useContext(InformationsContext);
	const navigate = useNavigate();

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${userInformation.token}`,
	// 	},
	// };

	// useEffect(() => {
	// 	axios
	// 		.get("allNotes", config)
	// 		.then((response) => {
	// 			setCards(response.data);
	// 		})
	// 		.catch((err) => {});
	// }, []);

	function goToCard(data, index) {
		setInformations({ ...data, index });
		navigate(`/note`);
	}

	return (
		<MainScreen>
			<Title>Cartões</Title>
			{cards ? (
				<BoxLoading>
					<LoadingData />
				</BoxLoading>
			) : (
				cards.map((elem, index) => (
					<Box onClick={() => goToCard(elem, index)}>
						<CardsLogo />
						<Text>{`Cartão ${index + 1}`}</Text>
					</Box>
				))
			)}
			<AddButton>+</AddButton>
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

const CardsLogo = styled(IoWallet)`
	font-size: 55px;
	color: #005985;
`;

const Box = styled.div`
	display: flex;
	align-items: center;
	padding: 40px 20px;
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

const AddButton = styled.div`
	width: 61px;
	height: 61px;
	border-radius: 50px;
	background: #005985;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 40px;
	position: absolute;
	bottom: 15px;
	right: 10px;
`;
