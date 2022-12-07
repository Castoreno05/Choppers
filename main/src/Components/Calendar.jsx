import React from "react";
import styled from "styled-components";

export default function Calendar(props) {
	return (
		<Container>
			{" "}
			{props.dates.map((data, index) => {
				return (
					<div
						key={index}
						className="c-card"
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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: .5rem;
	animation: fadeIn 0.3s;
	.c-card {
		width: 50px;
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
	@media screen and (max-width: 1050px) {
		.c-card {
			width: 100px;
		}
	}
	@media screen and (max-width: 975px) {
		.c-card {
			width: 40px;
		}
	}
	// Need media query 867px
`;
