import styled from "styled-components"
import useCounter from "../../hooks/useCounter"
const Container = styled.div`
    margin: 10px;
    width: calc(20% - 20px);
    height: 120px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    transition: .5s;
    color: ${({ theme }) => theme.mainTextColor};
    
    &:hover{
        transform: translateY(-10px);
    }

    &:first-child{
        margin-left: 0;
    }
    &:last-child{
        margin-right: 0;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon-wrapper{
        padding: 10px;
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--border-radius-circle);

        background-color: ${({ color }) => `rgba(${color}, 0.2)`};

        .icon{
            font-size: 1.4rem;
            color: ${({ color }) => `rgb(${color})`};
        }
    }

    .count{
        font-weight: 600;
        color: ${({ theme }) => theme.mainTextColor};

    }

    .text{
        font-size: 12px;
        font-weight: 400 !important;
        color: ${({ theme }) => theme.textColor2};
    }

    @media(max-width: 1100px) {
        width: calc(25% - 20px);

        &:nth-child(4n){
            margin-right: 0;
        }

        &:nth-child(5n){
            margin-left: 0;
        }
    }

    @media(max-width: 940px) {
        width: calc(50% - 20px);

        &:nth-child(2n){
            margin-right: 0;
        }

        &:nth-child(3n){
            margin-left: 0;
        }
    }
`

const DashboardTopItem = ({ color, count, text, icon }) => {

    return (
        <Container color={color} className="box">
            <div className="icon-wrapper">
                {icon}
            </div>
            <span className="count">{useCounter(count)}{(text === "income" || text === "orders") && "k"}</span>
            <p className="text">total {text}</p>
        </Container>
    )
}

export default DashboardTopItem