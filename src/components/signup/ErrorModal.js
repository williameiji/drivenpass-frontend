import styled from "styled-components";
import Modal from "react-modal";

export default function ErrorModal({ isErrorModalOpen, setIsErrorModalOpen }) {
	function closeModal() {
		setIsErrorModalOpen(false);
	}

	return (
		<div>
			<Modal
				isOpen={isErrorModalOpen}
				onRequestClose={closeModal}
				ariaHideApp={false}
				className="Modal"
				overlayClassName="Overlay"
			>
				<Box>
					<TextTitle>Erro ao Cadastrar!</TextTitle>
					<Text>
						Deve ser um e-mail válido e a senha deve conter no mínimo 10
						caracteres.
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
