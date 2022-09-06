import styled from "styled-components";

import { IoLockClosed } from "react-icons/io5";

export default function AuthScreen(props) {
	return (
		<Box>
			<div>
				<LogoIcon />
				<LogoText>DrivenPass</LogoText>
			</div>
			{props.children}
		</Box>
	);
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
`;

const LogoIcon = styled(IoLockClosed)`
	margin: 20px 0 20px 0;
	font-size: 200px;
	color: #005985;
`;

const LogoText = styled.p`
	font-family: "Righteous";
	font-size: 40px;
	color: #005985;
	margin-bottom: 40px;
`;
