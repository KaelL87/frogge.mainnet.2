/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import Button from '../../components/Button'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'

import useYam from '../../hooks/useYam'
import useFarm from '../../hooks/useFarm'
import useRedeem from '../../hooks/useRedeem'
import { getContract } from '../../utils/erc20'
import { getFarmContract } from '../../farm/utils'

import Harvest from './components/Harvest'
import Stake from './components/Stake'
import { getApr } from '../../utils/getApr'

const Farm: React.FC = () => {
  const { farmId } = useParams<{ farmId: string }>()

  const [apr, setApr] = useState(null)

  const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    earnToken,
    name,
    icon,
    version,
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
    version: '',
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const yam = useYam()
  const { ethereum } = useWallet()

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  const { onRedeem } = useRedeem(getFarmContract(yam))

  const lpTokenName = useMemo(() => {
    return lpToken.toUpperCase()
  }, [lpToken])

  const earnTokenName = useMemo(() => {
    return earnToken.toUpperCase()
  }, [earnToken])
  useEffect(() => {
    async function fetchApr() {
      const temp = await getApr()
      setApr(temp)
      return //Should get decimals from contract or config
    }
    fetchApr()
  }, [])
  return (
    <>
      <PageHeader
        subtitle={`Deposit ${lpTokenName} Tokens and earn $FRGE`}
        title={`${name} ${apr ? apr.apr : '0'}% APR`}
      />
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <Harvest pid={pid} />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <Stake
              lpContract={lpContract}
              pid={pid}
              tokenName={lpToken.toUpperCase()}
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
        <Spacer size="lg" />
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            maxWidth: '355px',
            paddingLeft: '30px',
            paddingRight: '30px',
          }}
        >
          <Button
            text="Swap at Frooge Finance with the best liquidity"
            backgroundColor="rgb(5 103 120)"
            size="xs"
            href={`https://frogge.finance/`}
          />
        </div>
        <Spacer size="sm" />
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 100%;

  width: 100%;
  justify-content: space-evenly;
  gap: 40px;
  @media (max-width: 768px) {
    width: 100%;
    gap: 20px;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 365px;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: '#17054b';
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default Farm
