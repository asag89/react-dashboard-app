
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { handleSidebarLayout } from "../../features/layout/layoutSlice"

const Container = styled.div`
    width: 120px;
    height: 80px;
    border-radius: var(--border-radius-sm);
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    display: flex;
    overflow: hidden;
    cursor: pointer;

    .sidebar{
        width: 8%;
        height: 100%;
        background-color: var(--blue-3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;

        .circle-item{
            width: 5px;
            height: 5px;
            border-radius: var(--border-radius-circle);
            background-color: var(--blue-2);
        }
    }

    .content{
        width: calc(92% - 3px);
        margin-left: 3px;
        display: flex;
        flex-direction: column;
        height: 100%;

        .topbar{
            width: 100%;
            height: 10px;
            background-color: rgba(0, 0, 0, 0.2);
        }

        .footer{
            margin-top: auto;
            width: 100%;
            height: 10px;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
`
const SmallSidebarBoxes = ({ payload }) => {
    const dispatch = useDispatch()

    return (
        <Container onClick={() => dispatch(handleSidebarLayout(payload))}>
            <div className="sidebar">
                <div className="circle-item" />
                <div className="circle-item" />
                <div className="circle-item" />
                <div className="circle-item" />
                <div className="circle-item" />
                <div className="circle-item" />

            </div>
            <div className="content">
                <div className="topbar" />
                <div className="footer" />
            </div>
        </Container>
    )
}

export default SmallSidebarBoxes