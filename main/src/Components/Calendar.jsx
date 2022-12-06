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
							props.setDateSelected(`${data}`) & props.setConfirmDate(true)
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
	grid-template-columns: 33.3% 33.3% 33.3%;
	animation: fadeIn 0.3s;
	justify-content: start;
	gap: 1.5rem;
	.c-card {
		cursor: pointer;
		p {
			border: solid 0.1rem black;
			box-shadow: 0 0 5px #ba0d16;
			border-radius: 5px;
			text-align: center;
		}
		p:hover {
			background-color: #000100;
			color: whitesmoke;
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
