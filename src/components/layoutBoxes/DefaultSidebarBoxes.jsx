import { useDispatch } from "react-redux"
import styled from "styled-components"
import { handleSidebarColor, handleSidebarLayout, handleTheme } from "../../features/layout/layoutSlice"

const Container = styled.div`
    width: 120px;
    height: 80px;
    border-radius: 5px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    display: flex;
    overflow: hidden;
    cursor: pointer;
    background-color: ${({ bg }) => bg};

    .sidebar{
        width: 25%;
        height: 100%;
        background-color: var(--blue-5);
        background-color: ${({ sidebarbg }) => sidebarbg};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        .lg-item{
            width: 80%;
            height: 8px;
            border-radius: 4px;
            background-color: var(--blue-4);
            margin-bottom: 7px;
            margin-top: 5px;

        }

        .md-item{
            width: 80%;
            height: 4px;
            border-radius: 2px;
            background-color: var(--blue-4);
        }
    }

    .content{
        width: calc(75% - 3px);
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

const DefaultSidebarBoxes = ({ type, payload }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        if (type === "layout") {
            dispatch(handleSidebarLayout(payload))
        }
        if (type === "theme") {
            dispatch(handleTheme(payload))
        }
        if (type === "color") {
            dispatch(handleSidebarColor(payload))
        }
    }
    return (
        <Container onClick={handleClick} sidebarbg={(payload === "default" || type === "layout") ? "#07192e" : payload} bg={(type === "theme" && payload === "dark") ? "#041121" : type !== "theme" ? "transparent" : "#fff"}>
            <div className="sidebar">
                <div className="lg-item"></div>
                <div className="md-item"></div>
                <div className="md-item"></div>
                <div className="md-item"></div>
                <div className="md-item"></div>
            </div>
            <div className="content">
                <div className="topbar"></div>
                <div className="footer"></div>
            </div>
        </Container>
    )
}

export default DefaultSidebarBoxes