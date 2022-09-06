import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { IoLockClosed } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import UserContext from "../context/UserContext";

export default function Header() {
	const { setUserInformation } = useContext(UserContext);
	const navigate = useNavigate();

	function logout() {
		setUserInformation(null);
		navigate("/");
	}

	function home() {
		navigate("/main");
	}

	return (
		<Box>
			<div>
				<LogoIcon onClick={home} />
				<LogoText>DrivenPass</LogoText>
			</div>
			<Logout onClick={logout} />
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 15px 10px;
	justify-content: space-between;

	div {
		display: flex;
		align-items: center;
	}
`;

const LogoIcon = styled(IoLockClosed)`
	font-size: 60px;
	color: #005985;
`;

const Logout = styled(IoLogOut)`
	font-size: 50px;
	color: #005985;
`;

const LogoText = styled.p`
	font-family: "Righteous";
	font-size: 36px;
	color: #005985;
`;
