import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};

    h3{
        font-size: 1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.mainTextColor};
        text-transform: capitalize;
    }

    button{
        padding: 7px 12px;
        font-weight: 500;
        font-size: 12px;
        border-radius: var(--border-radius-sm);
        border: 1px solid var(--purple-5);
        color: ${({ theme }) => theme.mainTextColor};
        background-color: ${({ theme }) => theme.btnBgColor};
    }
`

const ContentTop = ({ text, btnText }) => {
    return (
        <Container>
            <h3>{text}</h3>
            <button>{btnText}</button>
        </Container>
    )
}
export default ContentTop