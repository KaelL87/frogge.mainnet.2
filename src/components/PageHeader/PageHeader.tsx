import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Container from '../Container'

interface PageHeaderProps {
  icon?: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <>
      <StyledPageHeader>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        {title && <StyledTitle>{title}</StyledTitle>}
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </>
  )
}

const StyledPageHeader = styled.div`
  width:100%;
  min-height: 200px;
  background: transparent;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  text-align: center;
`

const StyledIcon = styled.div`
  font-size: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
`
//  width: 120px;

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.color.white};
  margin: 0;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 500;
  padding: 0;
  letter-spacing: 1px;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
