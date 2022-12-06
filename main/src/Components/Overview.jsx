import React from "react";
import styled from "styled-components";

export default function Overview() {
	return (
		<Container>
			<div className="o-card">Content</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 82vh;
	.o-card {
		border: solid 0.1rem black;
		border-radius: 5px;
		height: 80%;
		width: 50%;
	}
`;
