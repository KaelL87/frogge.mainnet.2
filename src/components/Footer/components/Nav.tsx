/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { contractAddresses } from '../../../farm/lib/constants'
import { getEthChainInfo } from '../../../utils/getEthChainInfo'
import githubLogo from '../../../assets/img/github.png'
import { GITHUB } from '../../../constants/config'

const { ethscanType, chainId } = getEthChainInfo()

const contractAddressesTemp = contractAddresses as { [index: string]: any }

const Nav: React.FC = () => {
  return (
    <StyledNav>

    <StyledLink
      target="_blank"
      href={`https://www.frogge.finance/`}
    >
    Farm Chart
    </StyledLink>

      <StyledLink
        target="_blank"
        href={`https://explorer.evm.eosnetwork.com/address/0x4541c5502e6D1b66edF515950A2c6a96331e575E`}
      >
        ERC20 Contract
      </StyledLink>

      <StyledLink
        target="_blank"
        href={`https://explorer.evm.eosnetwork.com/address/0xf8c36fcDaf58B077d102400B88d1b7B1917e0987`}
      >
        Farm Contract
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: #8cd4e4;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: #8cd4e4;
    text-decoration: underline;
  }
  img {
    height: 19px;
  }
`

export default Nav
