import React from 'react'
import styled from 'styled-components'

export default function Service({ name, price, time, setSelectedService, setSelectedPrice, setHandleSelected }) {

    const handleClick = () => {
        setSelectedService(`${name}`);
        setSelectedPrice(`${price}`);
        setHandleSelected(true)
    }

    return (
        <Container>
            <div className='service-card' onClick={handleClick}>
                <div className='service-header'>
                    <h5>{name}</h5>
                    <p>{time}</p>
                </div>
                <div className='price'>
                    <p>${price}</p>
                </div>
            </div>
        </Container >
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
.service-card{
    cursor: pointer;
    border-radius: 10px;
    border: solid 0.1rem black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    .service-header{
        padding: 0.5rem;
    }
    .price{
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem;
    }
}
.service-card:hover{
    background-color: black;
    color: #fff;
}
`;