import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #34495e;
    color: white;
    padding: 20px;
    text-align: center;

    @media screen and (min-width: 750px) {
        text-align: left;
    }
`;

export default function Header({title, subtitle}: {
    readonly title: string;
    readonly subtitle: string;
}) {
    return (
        <StyledHeader>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </StyledHeader>
    );
}
