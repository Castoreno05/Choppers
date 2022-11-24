import React from 'react'
import styled from 'styled-components'

export default function Card({ name, image, intro }) {
    return (
        <Container>
            <div className={`barber-${name}`}>
                {image}
                <button>Book Now</button>
                <div className='barber-booking'>
                    <h1>{name}</h1>
                    <p>{intro}</p>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
width: 80%;
background-color: #f5deb3;
.barber-Tank {
    display: flex;
    justify-content: center;
    height: 50vh;
    img{
        padding: 1rem;
        height: 250px;
        width: 275px;
    }
    .barber-booking{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background-color: whitesmoke;
        button{
            cursor: pointer;
            width: 100px;
            border: none;
            border-radius: 20px;
            padding: 0.3rem;
            margin: 10px 15px;
        }
        p{
            padding: 1rem;
        }
    }
}
.barber-Matthew{
    display: flex;
    justify-content: center;
    height: 50vh;
    img{
        padding: 1rem;
        height: 250px;
        width: 250px;
    }
    .barber-booking{
        background-color: whitesmoke;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        button{
            cursor: pointer;
            width: 100px;
            border: none;
            border-radius: 20px;
            padding: 0.3rem;
            margin: 10px 15px;
        }
        p{
            padding: 1rem;
        }
    }
}
.barber-Germ{
    display: flex;
    justify-content: center;
    height: 50vh;
    img{
        padding: 1rem;
        height: 250px;
        width: 250px;
    }
    .barber-booking{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background-color: whitesmoke;
        button{
            cursor: pointer;
            width: 100px;
            border: none;
            border-radius: 20px;
            padding: 0.3rem;
            margin: 10px 15px;
        }
        p{
            padding: 1rem;
        }
    }
}    
`;
