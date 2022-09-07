import styled from "styled-components";
import { IoLogIn } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import LoadingData from "../shared/LoadingData";
import urls from "../shared/urls";

export default function PasswordsScreen() {
	const [counterTypes, setCounterTypes] = useState(null);
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${userInformation}`,
			},
		};

		axios
			.get(urls.records, config)
			.then((response) => {
				setCounterTypes(response.data);
			})
			.catch((err) => {});
	}, []);

	function goToCredencials() {
		navigate("/credentials");
	}

	function goToNotes() {
		navigate("/notes");
	}

	function goToCards() {
		navigate("/cards");
	}

	function goToWifis() {
		navigate("/wifis");
	}

	function goToNewRecord() {
		navigate("/newrecord");
	}

	return (
		<>
			<MainScreen>
				<Title>Minhas senhas</Title>
				{!counterTypes ? (
					<BoxLoading>
						<LoadingData />
					</BoxLoading>
				) : (
					<Box>
						<BoxTypes onClick={goToCredencials}>
							<div>
								<CredentialsLogo />
								<Text>Credenciais</Text>
							</div>
							<Counter>{counterTypes.credentials}</Counter>
						</BoxTypes>
						<BoxTypes onClick={goToNotes}>
							<div>
								<NotesLogo />
								<Text>Notas seguras</Text>
							</div>
							<Counter>{counterTypes.notes}</Counter>
						</BoxTypes>
						<BoxTypes onClick={goToCards}>
							<div>
								<CardsLogo />
								<Text>Cartões</Text>
							</div>
							<Counter>{counterTypes.cards}</Counter>
						</BoxTypes>
						<BoxTypes onClick={goToWifis}>
							<div>
								<WifiLogo />
								<Text>Senhas de Wi-fi</Text>
							</div>
							<Counter>{counterTypes.wifis}</Counter>
						</BoxTypes>
						<Bottom>
							<AddButton onClick={goToNewRecord}>+</AddButton>
						</Bottom>
					</Box>
				)}
			</MainScreen>
		</>
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

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 20px;
`;

const BoxTypes = styled.div`
	display: flex;
	margin-bottom: 30px;
	justify-content: space-between;
	align-items: center;

	div {
		display: flex;
		align-items: center;
	}
`;

const BoxLoading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 40px 0 0;
`;

const CredentialsLogo = styled(IoLogIn)`
	font-size: 55px;
	color: #005985;
`;

const NotesLogo = styled(IoPencil)`
	font-size: 55px;
	color: #005985;
`;

const CardsLogo = styled(IoWallet)`
	font-size: 55px;
	color: #005985;
`;

const WifiLogo = styled(IoWifi)`
	font-size: 55px;
	color: #005985;
`;

const Text = styled.p`
	font-family: "Recursive";
	font-size: 18px;
	color: #222222;
	margin-left: 20px;
`;

const Counter = styled.div`
	width: 35px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background: #005985;
	border-radius: 50px;
`;

const AddButton = styled(IoAddCircle)`
	color: #005985;
	font-size: 90px;
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
