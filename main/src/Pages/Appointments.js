import React, {useState} from "react";
import Overview from "../Components/Overview";
import Professional from "../Components/Professional";
import Service from "../Components/Service";
import Calendar from "../Components/Calendar";
import TimeSlots from "../Components/TimeSlots";
import ShoppingCart from "../Components/ShoppingCart";
import {ServiceData} from "../Data/ServiceData";
import {EmployeeData} from "../Data/EmployeeData";
import {DaySlots} from "../Data/DaySlots";
import {format} from "date-fns";
import styled from "styled-components";

function Appointments() {
    const [title, setTitle] = useState("CHOOSE A PROFESSIONAL");
    /*********************COMPONENT STATE***********************/
    const [containerActive, setContainerActive] = useState(true);
    const [shoppingActive, setShoppingActive] = useState(true);
    const [proActive, setProActive] = useState(true);
    const [serviceActive, setServiceActive] = useState(false);
    const [calendarActive, setCalendarActive] = useState(false);
    const [triggerButton, setTriggerButton] = useState(false);
    const [timeSlotsActive, setTimeSlotsActive] = useState(false);
    const [overviewActive, setOverviewActive] = useState(false);
    /***********************************************************/

    /*******************SHOPPING CART STATE*********************/
    const [employeeName, setEmployeeName] = useState(undefined);
    const [serviceName, setServiceName] = useState(undefined);
    const [serviceTime, setServiceTime] = useState(undefined);
    const [servicePrice, setServicePrice] = useState(undefined);
    const [dateSelected, setDateSelected] = useState(undefined);
    const [timeSelected, setTimeSelected] = useState(undefined);
    /***********************************************************/

    /******************DATES FOR CALENDAR***********************/
    const next10Days = [...Array(12).keys()].map((index) => {
        const date = new Date();
        date.setDate(date.getDate() + index);
        return format(date, "MMM do, EEE");
    });
    /***********************************************************/

    const timeSlots = () => {
        setServiceActive(undefined);
        setCalendarActive(undefined);
        setTriggerButton(undefined);
        setTitle("SELECT AN AVAILABLE TIME");
        setTimeSlotsActive(true);
    };

    return (
        <Container> {/* <h1> {title}</h1> */}
            <TheContainer> {
                overviewActive && (
                    <div className="overview-container">
                        <Overview/>
                    </div>
                )
            }
                {
                containerActive && (
                    <div className="shopping-container">
                        {" "}
                        {
                        proActive && (
                            <div className="professional-wrapper">
                                {" "}
                                {
                                EmployeeData.map((data) => {
                                    return (
                                        <Professional setProActive={setProActive}
                                            key={
                                                data.id
                                            }
                                            proName={
                                                data.name
                                            }
                                            // proID={data.eNumber}
                                            proImage={
                                                data.img
                                            }
                                            setTitle={setTitle}
                                            setEmployeeName={setEmployeeName}
                                            // setEmployeeID={setEmployeeID}
                                            setServiceActive={setServiceActive}/>
                                    );
                                })
                            }
                                {" "} </div>
                        )
                    }
                        {
                        serviceActive && (
                            <div className="service-wrapper">
                                {" "}
                                {
                                ServiceData.map((data) => {
                                    return (
                                        <Service setServiceActive={setServiceActive}
                                            key={
                                                data.id
                                            }
                                            serviceName={
                                                data.service
                                            }
                                            serviceTime={
                                                data.time
                                            }
                                            servicePrice={
                                                data.price
                                            }
                                            setTitle={setTitle}
                                            setServiceName={setServiceName}
                                            setServiceTime={setServiceTime}
                                            setServicePrice={setServicePrice}
                                            setCalendarActive={setCalendarActive}/>
                                    );
                                })
                            }
                                {" "} </div>
                        )
                    }
                        {
                        timeSlotsActive && (
                            <div className="time-wrapper">
                                {" "}
                                {
                                DaySlots.map((days, index) => {
                                    return (
                                        <TimeSlots key={index}
                                            DaySlots={days}
                                            setTimeSelected={setTimeSelected}
                                            setContainerActive={setContainerActive}
                                            setTimeSlotsActive={setTimeSlotsActive}
                                            setShoppingActive={setShoppingActive}
                                            setOverviewActive={setOverviewActive}
                                            setTitle={setTitle}/>

                                    );
                                })
                            }
                                {" "} </div>
                        )
                    }
                        {" "} </div>
                )
            }
                {
                calendarActive && (
                    <div className="date-wrapper">
                        <Calendar setDateSelected={setDateSelected}
                            dates={next10Days}
                            setTriggerButton={setTriggerButton}/>
                    </div>
                )
            }
                {
                shoppingActive && (
                    <div className="shopping-cart">
                        <h1>{title}</h1>
                        <div className="shopping-wrapper">
                            <h2>Your Order</h2>
                            <ShoppingCart employeeName={employeeName}
                                serviceName={serviceName}
                                serviceTime={serviceTime}
                                servicePrice={servicePrice}
                                dateSelected={dateSelected}
                                timeSelected={timeSelected}/> {
                            triggerButton && (
                                <div className="time-reserve">
                                    <button onClick={timeSlots}>Confirm Date Selected</button>
                                </div>
                            )
                        }
                            {" "} </div>
                    </div>
                )
            } </TheContainer>
        </Container>
    );
}

const Container = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	gap: 1rem;
	@media screen and (max-width: 745px) {
		gap: 1rem;
		align-items: normal !important;
	}
`;

const TheContainer = styled.div `
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
	.shopping-container {
		width: 65%;
		padding: 1rem;
		.professional-wrapper {
			display: grid;
			grid-template-columns: 33.3% 33.3% 33.3%;
			align-items: center;
		}
		.service-wrapper {
			display: grid;
			grid-template-columns: 33.3% 33.3% 33.3%;
		}
		.time-wrapper {
			display: grid;
			grid-template-columns: 25% 25% 25% 25%;
			align-items: center;
		}
	}
	.date-wrapper {
		padding: 0.2rem;
		position: fixed;
		width: 28%;
		left: 65%;
		top: 55%;
	}
	.shopping-cart {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		left: 67%;
		top: 22%;
		width: 25%;
		gap: .8rem;
		h1 {
			font-size: 20px;
			border-bottom: solid black 0.1rem;
		}
		.shopping-wrapper {
			width: 100%;
			border: solid 0.09rem #ba0d16;
			box-shadow: 0 0 20px #ba0d16;
			border-radius: 5px;
			h2 {
				padding: 0.2rem;
				text-align: center;
			}
			.time-reserve {
				display: flex;
				justify-content: center;
				padding: 0.3rem;
				button {
					padding: 0.2rem;
					cursor: pointer;
					background-color: whitesmoke;
					border: solid 0.1rem black;
					border-radius: 3px;
				}
				button:hover {
					background-color: #000100;
					color: whitesmoke;
				}
			}
		}
		
	}
	.overview-container {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	@media screen and (max-width: 1175px) {
		.shopping-container {
			.professional-wrapper {
				justify-content: center;
				grid-template-columns: 50% 50%;
			}
		}
	}
	@media screen and (max-width: 975px) {
		.shopping-container {
			.service-wrapper {
				grid-template-columns: 33.3% 33.3% 33.3%;
			}
		}
	}

	@media screen and (max-width: 500px) {
		.professional-wrapper {
			grid-template-columns: 100% !important;
		}
	}
`;

export default Appointments;
