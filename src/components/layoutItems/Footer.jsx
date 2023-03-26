import styled from "styled-components"
import { AiOutlineCopyright } from "react-icons/ai"
const Container = styled.div`
    margin-top: auto;
    width: 100%;
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid;
    color: ${({ theme }) => theme.mainTextColor};
    background-color: ${({ theme }) => theme.mainBgColor};
    border-color: ${({ theme }) => theme.mainBorderColor};

    div{
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 3px;
    }

`
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Container>
            <div>{year} <AiOutlineCopyright /> Ayovi Inc</div>
            <div></div>
        </Container>
    )
}

export default Footer