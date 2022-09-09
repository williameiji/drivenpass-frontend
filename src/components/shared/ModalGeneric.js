import styled from "styled-components";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

export default function ModalGeneric({
	isModalOpen,
	setIsModalOpen,
	modalMessage,
}) {
	const navigate = useNavigate();

	function closeModal() {
		if (modalMessage === null) {
			setIsModalOpen(false);
		} else if (modalMessage.signup) {
			setIsModalOpen(false);
			navigate("/");
		} else if (modalMessage.new || modalMessage.delete) {
			setIsModalOpen(false);
			navigate("/main");
		} else {
			setIsModalOpen(false);
		}
	}

	return (
		<div>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				ariaHideApp={false}
				className="Modal"
				overlayClassName="Overlay"
			>
				<Box>
					<TextTitle>
						{modalMessage ? modalMessage.title : "Ooooops!"}
					</TextTitle>
					<Text>
						{modalMessage ? modalMessage.text : "Algo deu errado! :("}
					</Text>
					<BoxButton>
						<ButtonOk onClick={closeModal}>Ok</ButtonOk>
					</BoxButton>
				</Box>
			</Modal>
		</div>
	);
}

const Box = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 20px;
`;

const TextTitle = styled.p`
	font-family: "Recursive";
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	color: #000000;
	margin-bottom: 20px;
`;

const Text = styled.p`
	font-family: "Recursive";
	font-size: 18px;
	text-align: center;
	color: #000000;
`;

const BoxButton = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin: 40px 0 0 0;
`;

const ButtonOk = styled.button`
	font-family: "Recursive";
	font-size: 18px;
	margin: 0 auto;
	width: 134px;
	height: 37px;
	background: #9bfbb0;
	border: 3px solid #9bfbb0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	cursor: pointer;
`;
