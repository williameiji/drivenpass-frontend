import styled from "styled-components";

import Header from "../header/Header";

export default function MainScreen(props) {
	return (
		<>
			<Header />
			<Container>{props.children}</Container>
		</>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100%;
	margin: 90px 0 80px 0;
`;
