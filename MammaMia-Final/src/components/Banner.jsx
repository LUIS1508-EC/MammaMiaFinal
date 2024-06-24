import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import bImg from '../assets/images/banner.jpg'

const Banner = ({title}) => {
  return (
    <Container className='text-center mt-4'>
        <img src={bImg}
        alt='banner'
        style={{maxWidth: '100%'}}
        />
        {title && <h1 className='mt-3'>{title}</h1>}
    </Container>
  )
}

Banner.prototypes = {
    title: PropTypes.string
}

export default Banner