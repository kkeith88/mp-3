import styled from "styled-components";

const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
    text-align: center;

    h1 {
        margin-bottom: 20px;
    }

    @media screen and (min-width: 750px) {
        width: 70%;
    }
`;

export default function Main({ children }: {
    readonly children: React.ReactNode;
}) {
    return <StyledMain>{children}</StyledMain>;
}
