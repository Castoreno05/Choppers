import React from "react";
import styled from "styled-components";

export default function Overview(props) {
	// const handleReset = (e) => {
	// 	e.preventDefault();
	// 	window.location.reload(true);
	// };

	return (
		<Container>
			<h1>APPOINTMENT OVERVIEW</h1>
			<div className="o-card">
				<div className="card-header">
					<h3>*Please review order</h3>
				</div>
				<div className="card-body">
					<div className="description">
						<p>
							Has alia omnium fierent eu. Dicant antiopam concludaturque vis ut,
							no vel libris gubergren. Saperet definiebas eloquentiam sit id,
							probo quando disputationi pro in.
						</p>
					</div>
					<div className="total">
						<p>Total: </p>
					</div>
				</div>
				<div className="card-footer">
					<div className="reserve">
						<button>Book Appointment</button>
					</div>
					{/* <div className="reset">
						<button onClick={handleReset}>Reset</button>
					</div> */}
				</div>
			</div>
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
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border: solid 0.1rem #000100;
		box-shadow: 0 0 20px #000100;
		border-radius: 5px;
		height: 80%;
		width: 50%;
		.card-body {
			display: flex;
			flex-direction: column;
			.description {
				padding: 1rem;
				p {
					text-align: center;
					font-size: 20px;
				}
			}
			.total {
				padding: 1rem;
				p {
					font-size: 24px;
				}
			}
		}
		.card-footer {
			display: flex;
			justify-content: center;
			.reserve {
				padding: 2rem;
				button {
					cursor: pointer;
					border-radius: 5px;
					border: solid 0.1rem #000100;
					background-color: #98fb98;
					color: grey;
					font-size: 20px;
					height: 50px;
					width: 185px;
					opacity: 0.7;
				}
				button:hover {
					opacity: 1;
					background-color: #008000;
					color: whitesmoke;
				}
			}
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
		height: 83vh;
		h1 {
			font-size: 26px;
		}
		.o-card {
			height: 70%;
			width: 70%;
			.card-footer {
				.reserve {
					button {
						width: 175px;
						font-size: 16px !important;
					}
				}
			}
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

// props.setEmployeeName(undefined);
// props.setServiceName(undefined);
// props.setServiceTime(undefined);
// props.setServicePrice(undefined);
// props.setDateSelected(undefined);
// props.setTimeSelected(undefined);
// props.setConfirmTime(false);
// props.setOverviewActive(false);
// props.setContainerActive(true);
// props.setShoppingActive(true);
// props.setProActive(true);
