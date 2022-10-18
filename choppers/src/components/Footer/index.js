import React from 'react'
import "./footer.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { AiOutlineMail } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
        <Container fluid className='footerContainer'>
            <h2>Join Us For Updates</h2>
            <form className='footerForm'>
                <input placeholder='Email Here'/>
                <Button variant='none' className='submitEmail'>
                    <AiOutlineMail className='submitIcon'/>
                </Button>
            </form>
        </Container>
    </div>
  )
}

export default Footer