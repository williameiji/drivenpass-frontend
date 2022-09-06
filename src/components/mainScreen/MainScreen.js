import styled from "styled-components";

import Header from "../header/Header";

export default function MainScreen(props) {
	return (
		<Box>
			<Header />
			{props.children}
		</Box>
	);
}

const Box = styled.div`
	width: 100vw;
	height: 100%;
`;
