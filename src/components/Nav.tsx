import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledNav = styled.nav`
  width: 100%;
  background-color: #2c3e50;
  color: white;

  ul {
    padding: 10px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  a {
    display: block;
    color: #ecf0f1;
    padding: 15px 10px; 
    font-size: calc(15px + .5vw);
  }

  a:hover {
    color: #2980b9;
  }

  @media screen and (min-width: 750px) {
    width: 30%;

    ul {
      flex-direction: column;
      padding-left: 10px;
      overflow-x: visible;
      
    }
  }
`

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/certifications">Certifications</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/references">References</NavLink></li>
      </ul>
    </StyledNav>
  )
}