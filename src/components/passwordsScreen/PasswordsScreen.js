import styled from "styled-components";
import { IoLogIn } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import LoadingData from "../shared/LoadingData";

export default function PasswordsScreen() {
	const [counterTypes, setCounterTypes] = useState(true);
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${userInformation.token}`,
	// 	},
	// };

	// useEffect(() => {
	// 	axios
	// 		.get("counterRoute", config)
	// 		.then((response) => {
	// 			setCounterTypes(response.data);
	// 		})
	// 		.catch((err) => {});
	// }, []);

	function goToCredencials() {
		navigate("/credentials");
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
							{/* <Counter>{counterTypes.credentials}</Counter> */}
						</BoxTypes>
						<BoxTypes>
							<div>
								<NotesLogo />
								<Text>Notas seguras</Text>
							</div>
							{/* <Counter>{counterTypes.notes}</Counter> */}
						</BoxTypes>
						<BoxTypes>
							<div>
								<CardsLogo />
								<Text>Cartões</Text>
							</div>
							{/* <Counter>{counterTypes.cards}</Counter> */}
						</BoxTypes>
						<BoxTypes>
							<div>
								<WifiLogo />
								<Text>Senhas de Wi-fi</Text>
							</div>
							{/* <Counter>{counterTypes.wifi}</Counter> */}
						</BoxTypes>
						<AddButton>+</AddButton>
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