import React from 'react'
import styled from 'styled-components'

export default function Card({ name, image, intro }) {
    return (
        <Container>
            <div className={`barber-${name}`}>
                <div className='barber-info'>
                    {image}
                    <button>Book Now</button>
                </div>
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
    .barber-info{
        img{
            padding: 1rem;
            height: 260px;
            width: 210px;
            border-radius: 20px;
        }
        button{
            margin-left: 1rem;
        }
    }
    .barber-booking{
        display: flex;
        justify-content: center;
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
    .barber-info{
        img{
            padding: 1rem;
            height: 270px;
            width: 240px;
            border-radius: 20px;
        }
        button{
            margin-left: 1rem;
        }
    }
    .barber-booking{
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
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
    .barber-info{
        img{
            padding: 1rem;
            height: 260px;
            width: 250px;
            border-radius: 20px;
        }
        button{
            margin-left: 1rem;
        }
    }
    .barber-booking{
        display: flex;
        justify-content: center;
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
