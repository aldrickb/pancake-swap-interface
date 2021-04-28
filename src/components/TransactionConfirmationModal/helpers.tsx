import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, CloseIcon } from '@sparkpointio/sparkswap-uikit'
import { AutoColumn, ColumnCenter } from '../Column'


export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  background-color: ${({theme}) => theme.colors.modal};
  border: 2px solid ${({theme}) => theme.isDark? theme.colors.primary: '#FFFFFF'};
  padding: 25px;
`

export const StyledWrapper = styled(Wrapper)`
  display: flex;
  height: 30vh;
  align-items: center;
  justify-content: center;
  border: none;
`

export const Section = styled(AutoColumn)`
  padding: 24px;
  text-align: center;
`

export const ConfirmedIcon = styled(ColumnCenter)`
  padding: 40px 0;
`

export const BottomSection = styled(Section)`
  background-color: ${({ theme }) => 'transparent'};
  // display: flex;
  justify-content: center;
`

export const ContentSection = styled(Section)`
  display: flex;
  flex-direction:column;
  align-items: center;
`

/**
 * TODO: Remove this when modal system from the UI Kit is implemented
 */
const StyledContentHeader = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 10px;
  & > ${Heading} {
    flex: 1;
  }
`

type ContentHeaderProps = {
  children: ReactNode
  onDismiss: () => void
}

export const ContentHeader = ({ children, onDismiss }: ContentHeaderProps) => (
  <StyledContentHeader>
    <div style={{width: '100%', textAlign: 'right'}}>
    <IconButton onClick={onDismiss} variant="text">
      <CloseIcon color="primary" />
    </IconButton>
    </div>
    <Heading>{children}</Heading>
  </StyledContentHeader>
)
