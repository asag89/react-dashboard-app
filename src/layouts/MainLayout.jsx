
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import CoverContainer from "../components/CoverContainer"
import Customizer from "../components/Customizer"
import DashboardSettings from "../components/dashboard/DashboardSettings"
import Footer from "../components/layoutItems/Footer"
import Topbar from "../components/layoutItems/Topbar"
import Sidebar from "../components/layoutItems/Sidebar"
import SmallSidebar from "../components/layoutItems/SmallSidebar"
import useWindowDimensions from "../hooks/useWindowDimension"

const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.mainBgColor};
    
    .main{
        padding-top:${({ isCover }) => isCover ? "0" : "60px"};
        padding-top:60px;
        margin-left:${({ isOpen, isSI }) => !isOpen ? "0" : isSI ? "80px" : "220px"};
        width: ${({ isOpen, isSI }) => !isOpen ? "100%" : isSI ? "calc(100% - 80px)" : "calc(100% - 220px)"};
        height: auto;
        display: flex;
        flex-direction: column;
        border-left: 1px solid;
        border-color: ${({ theme }) => theme.mainBorderColor};
        transition: .5s;
        overflow: hidden;
    }

    @media(max-width: 880px) {
        .main{
            margin-left: 0;
            width: ${({ isCover }) => isCover ? "100%" : "calc(100% - 60px)"} ;
        }
    }
`
const MainLayout = () => {

    const { isSidebarOpen, isCustomizerOpen, sidebarLayoutType } = useSelector((state) => state.layout)
    const { width } = useWindowDimensions();

    return (
        <Container isOpen={isSidebarOpen} isCover={width <= 880} isSI={sidebarLayoutType === "small-icon" && true}>
            {sidebarLayoutType === "small-icon" ?
                <SmallSidebar />
                : <Sidebar />
            }
            {
                (isSidebarOpen && width <= 880) &&
                <CoverContainer type="navbar" />
            }
            <main className="main">
                <Topbar />
                <Outlet />
                <Footer />
                <DashboardSettings />
                {isCustomizerOpen &&
                    <Customizer />
                }
            </main>
            {
                isCustomizerOpen &&
                <CoverContainer type="customizer" />
            }
        </Container>
    )
}

export default MainLayout