import React from "react";
import styled from "styled-components";

export default function Calendar(props) {
	return (
		<Container>
			{" "}
			{props.dates.map((data, index) => {
				return (
					<div
						className="c-card"
						key={index}
						onClick={(e) =>
							props.setDateSelected(`${data}`) & props.setTriggerButton(true)
						}
					>
						<p> {data}</p>
					</div>
				);
			})}{" "}
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
	justify-content: center;
	animation: fadeIn 0.3s;
	padding: 0.5rem;
	height: 20vh;
	gap: 0.5rem;
	// border: solid 0.1rem black;
	.c-card {
		cursor: pointer;
		p {
			width: 95px;
			text-align: center;
		}
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@media screen and (max-width: 965px) {
		gap: 0.5rem;
	}
`;
