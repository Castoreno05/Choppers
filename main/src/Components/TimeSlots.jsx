import React from "react";
import styled from "styled-components";

export default function TimeSlots(props) {
	const handleClick = (e) => {
		e.preventDefault();
		props.setTimeSelected(`${props.DaySlots}`);
		props.setConfirmTime(true);
	};

	return (
		<Container>
			<p onClick={handleClick}>{props.DaySlots}</p>
		</Container>
	);
}

const Container = styled.div`
	animation: fadeIn 0.5s;
	display: flex;
	justify-content: center;
	height: 28vh;
	align-items: center;
	p {
		font-size: 20px;
		border: solid 0.1rem black;
		box-shadow: 0 0 10px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 150px;
	}
	p:hover {
		cursor: pointer;
		background-color: black;
		color: #fff;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@media screen and (max-width: 1175px) {
		p {
			width: 80px;
		}
	}
`;
