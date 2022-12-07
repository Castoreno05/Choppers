import React from "react";
import {
	AiOutlineYoutube,
	AiOutlineTwitter,
	AiFillFacebook,
	AiFillInstagram,
} from "react-icons/ai";
import styled from "styled-components";

function Footer() {
	return (
		<Container>
			<div className="left-container">
				<div className="office">
					<h2>Choppers</h2>
					<div className="address">
						<h3>Address</h3>
						<p>1501 South Richey St</p>
						<p>Pasadena Tx, 77502</p>
					</div>
				</div>
				<div className="follow-us">
					<h2>Follow Us</h2>
					<div className="socials">
						<AiOutlineYoutube className="youtube" />
						<AiOutlineTwitter className="twitter" />
						<AiFillFacebook className="facebook" />
						<AiFillInstagram className="instagram" />
					</div>
				</div>
			</div>
			<div className="middle-container">
				<div className="services">
					<h2>Services</h2>
					<div className="group-wrapper">
						<div className="group-one">
							<p>Tapers</p>
							<p>Scissor Cuts</p>
							<p>Low Fades</p>
							<p>Mid Fades</p>
							<p>Bald Fades</p>
						</div>
						<div className="group-two">
							<p>Edge Ups</p>
							<p>Mohawks</p>
							<p>Designs</p>
							<p>Beard Trims</p>
							<p>Flat Tops</p>
						</div>
					</div>
				</div>
			</div>
			<div className="right-container">
				<div className="operation-hours">
					<h2>Business Hours</h2>
					<div className="group-wrapper">
						<div className="group-one">
							<p>Sunday</p>
							<p>Monday</p>
							<p>Tuesday</p>
							<p>Wednesday</p>
							<p>Thursday</p>
							<p>Friday</p>
							<p>Saturday</p>
						</div>
						<div className="group-two">
							<p>Closed</p>
							<p>Closed</p>
							<p>10AM - 6PM</p>
							<p>10AM - 6PM</p>
							<p>10AM - 6PM</p>
							<p>10AM - 6PM</p>
							<p>10AM - 6PM</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	color: whitesmoke;
	background-color: #000100;
	display: flex;
	justify-content: space-evenly;
	padding: 0.5rem;
	.left-container {
		width: 20%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.office,
		.follow-us {
			h2,
			.address {
				padding: 0.3rem;
			}
			.socials {
				padding: 0.25rem;
				svg {
					color: #fff;
					font-size: 34px;
				}
			}
		}
	}
	.middle-container {
		width: 20%;
		display: flex;
		.services {
			justify-content: space-between;
			width: 100%;
			display: flex;
			flex-direction: column;
			h2 {
				padding: 0.3rem;
				text-align: center;
			}
			.group-wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 2;
			}
		}
	}
	.right-container {
		width: 20%;
		display: flex;
		.operation-hours {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.7rem;
			h2 {
				text-align: center;
				padding: 0.3rem;
			}
			.group-wrapper {
				display: flex;
				justify-content: space-between;
				line-height: 1.5;
				text-align: center;
			}
		}
	}

	@media screen and (max-width: 900px) {
		.left-container {
			width: 30%;
		}
		.middle-container {
			display: none;
		}
		.right-container {
			width: 30%;
		}
	}
  @media screen and (max-width: 575px) {
    flex-direction: column;
    gap: 1rem;
		.left-container {
      align-items: center;
			width: 100%;
      .office, .follow-us {
        text-align: center;
      }
		}
		.right-container {
			width: 100%;
      .operation-hours {
        .group-wrapper {
          justify-content: center;
          gap: 3rem;
        }
      }
		}
	}
`;

export default Footer;

// @media screen and (max-width: 776px) {
// 	height: auto;
// 	grid-template-columns: 50% 50%;
// 	p {
// 		font-size: 18px;
// 	}
// 	.middle-container {
// 		display: none;
// 	}
// }
// @media screen and (max-width: 800px) {
// 	h2 {
// 		font-size: 22px;
// 	}
// 	p {
// 		font-size: 14px;
// 	}
// 	.socials {
// 		.youtube,
// 		.twitter,
// 		.facebook,
// 		.instagram {
// 			font-size: 24px !important;
// 		}
// 	}
// }

// @media screen and (max-width: 558px) {
// 	height: auto;
// 	grid-template-columns: 100%;
// }
