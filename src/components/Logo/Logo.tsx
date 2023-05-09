/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/img/logo.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo href="https://www.frogge.finance">
      <img src={logo} width="140px" height="auto" style={{ marginTop: -4 }} />{' '}
      <span></span>
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 60px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
  font-size: 1.1em;
  color: #fff;
  font-weight: 100;
  transition: transform 0.3s ease 0s;
  &:hover {
    transform: rotate(-5deg);
  }

  img {
    margin-right: 12px;
  }
  span {
    margin-right: 8px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      display: none !important;
    }
  }
`

export default Logo
