import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IoWifi } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import LoadingData from "../shared/LoadingData";
import urls from "../shared/urls";

export default function Wifis() {
	const [wifis, setWifis] = useState(true);
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	const config = {
		headers: {
			Authorization: `Bearer ${userInformation}`,
		},
	};

	useEffect(() => {
		axios
			.get(urls.wifis, config)
			.then((response) => {
				setWifis(response.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	}, []);

	function goToWifi() {
		navigate(`/wifi`);
	}

	return (
		<MainScreen>
			<Title>Senhas de Wi-fi</Title>
			{!wifis ? (
				<BoxLoading>
					<LoadingData />
				</BoxLoading>
			) : !wifis.length ? (
				<NotFound>Nenhum item encontrado!</NotFound>
			) : (
				wifis.map((elem, index) => (
					<Box key={index} onClick={goToWifi}>
						<WifiLogo />
						<Text>{elem.title}</Text>
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

const WifiLogo = styled(IoWifi)`
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

const NotFound = styled.p`
	margin-top: 20px;
	text-align: center;
`;
