import React from "react";
import styled from "styled-components";

export default function Overview() {
	return (
		<Container>
			<h1>APPOINTMENT OVERVIEW</h1>
			<div className="o-card">Content</div>
		</Container>
	);
}

const Container = styled.div`
	animation: fadeIn 0.5s;
	display: flex;
	flex-direction: column;
	gap: 3.5rem;
	align-items: center;
	width: 60%;
	height: 87vh;
	h1 {
		padding: 0.5rem;
		border-bottom: solid 0.1rem black;
	}
	.o-card {
		border: solid 0.1rem #ba0d16;
		box-shadow: 0 0 20px #ba0d16;
		border-radius: 5px;
		height: 80%;
		width: 50%;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media screen and (max-width: 1050px) {
		height: 83vh;
		h1 {
			font-size: 26px;
		}
		.o-card {
			height: 70%;
			width: 70%;
		}
	}
	@media screen and (max-width: 640px) {
		height: 78vh;
		h1 {
			font-size: 18px;
		}
		.o-card {
			width: 100%;
		}
	}
	@media screen and (max-width: 460px) {
		h1 {
			font-size: 14px;
		}
	}
`;
