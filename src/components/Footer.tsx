import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #34495e;
  color: white;
  padding: 20px;
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>All Rights Reserved &copy;</p>
    </StyledFooter>
  )
}