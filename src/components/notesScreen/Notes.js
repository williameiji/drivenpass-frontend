import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IoPencil } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import MainScreen from "../mainScreen/MainScreen";
import UserContext from "../context/UserContext";
import LoadingData from "../shared/LoadingData";
import urls from "../shared/urls";

export default function Notes() {
	const [notes, setNotes] = useState(null);
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();

	const config = {
		headers: {
			Authorization: `Bearer ${userInformation}`,
		},
	};

	useEffect(() => {
		axios
			.get(urls.notes, config)
			.then((response) => {
				setNotes(response.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	}, []);

	function goToNote(id) {
		navigate(`/note/${id}`);
	}

	function goToNewPasswords() {
		navigate("/newrecord");
	}

	return (
		<MainScreen>
			<Title>Notas seguras</Title>
			{!notes ? (
				<BoxLoading>
					<LoadingData />
				</BoxLoading>
			) : !notes.length ? (
				<NotFound>Nenhum item encontrado!</NotFound>
			) : (
				notes.map((elem, index) => (
					<Box key={index} onClick={() => goToNote(elem.id)}>
						<NotesLogo />
						<Text>{elem.title}</Text>
					</Box>
				))
			)}
			<AddButton onClick={goToNewPasswords}>+</AddButton>
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

const NotesLogo = styled(IoPencil)`
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
