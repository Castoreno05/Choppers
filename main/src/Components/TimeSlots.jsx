import React from "react";
import styled from "styled-components";

export default function TimeSlots(props) {
	const handleClick = (e) => {
		e.preventDefault();
		props.setTimeSelected(`${props.DaySlots}`);
		props.setTimeSlotsActive(false);
		props.setShoppingActive(false);
		props.setContainerActive(false);
		props.setOverviewActive(true);
	};

	return (
		<Container>
			<p onClick={handleClick}>{props.DaySlots}</p>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 30vh;
	align-items: center;
	p {
		border: solid 0.1rem black;
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
	@media screen and (max-width: 1175px) {
		p {
			width: 80px;
		}
	}
`;
