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
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	width: 60%;
	height: 82vh;
	h1 {
		padding: .5rem;
		border-bottom: solid 0.1rem black;
	}
	.o-card {
		border: solid 0.1rem #ba0d16;
		box-shadow: 0 0 20px #ba0d16;
		border-radius: 5px;
		height: 80%;
		width: 50%;
	}
`;
