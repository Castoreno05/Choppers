import React from "react";
import styled from "styled-components";

export default function ShoppingCart(props) {
	return (
		<Container>
			<div className="shopping-items">
				<p>Professional:</p>
				<span>
					<strong> {props.employeeName}</strong>
				</span>
			</div>
			<div className="shopping-items">
				<p>Service:</p>
				<span>
					<strong> {props.serviceName}</strong>
				</span>
			</div>
			<div className="shopping-items">
				<p>Service Price:</p>
				<span>
					<strong> {props.servicePrice}</strong>
				</span>
			</div>
			<div className="shopping-items">
				<p>Service Time:</p>
				<span>
					<strong> {props.serviceTime}</strong>
				</span>
			</div>
			<div className="shopping-items">
				<p>Date Selected:</p>
				<span>
					<strong> {props.dateSelected}</strong>
				</span>
			</div>
			<div className="shopping-items">
				<p>Time Selected:</p>
				<span>
					<strong> {props.timeSelected}</strong>
				</span>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	padding: 0.3rem;
	gap: 0.5rem;
	.shopping-items {
		display: flex;
		justify-content: space-between;
		span {
			display: flex;
			margin-right: 0 !important;
		}
		p {
			font-size: 18px;
			max-width: 100%;
		}
	}

	@media screen and (max-width: 1175px) {
		p {
			font-size: 18px;
		}
	}
	@media screen and (max-width: 865px) {
		p {
			font-size: 14px !important;
		}
	}
`;
