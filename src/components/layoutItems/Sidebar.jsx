
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HiMenu } from "react-icons/hi"
import { handleSidebar } from "../../features/layout/layoutSlice"
import useWindowDimensions from "../../hooks/useWindowDimension"
import links from "../../utils/links"

const Container = styled.nav`
    width: ${({ isOpen }) => isOpen ? "220px" : "0"};
    background-color: ${({ bg }) => bg};
    height: 100vh;
    position: fixed;
    transition: .3s;
    top: 0;
    left: 0;
    z-index: 500;

.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;

    .nav-top{
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 15.5px;
        color: #fff;
        margin-bottom: 10px;
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.mainBorderColor};

    .btn-menu{
            margin-right: 10px;
            background-color: transparent;
            display: flex;
            align-items: center;

            .icon{
                font-size: 1.4rem;
                color: ${({ theme }) => theme.mainTextColor};

            }   
        }

        .logo{
            padding-left: 15px;
            font-size: 1.4rem;
            font-weight: 400;
        }
    }

    .links{
        width: 100%;
        height: 100%;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--gray-4);
            border-radius: var(--border-radius-md);
        }


        &::-webkit-scrollbar-track {
            background-color: transparent;
            margin-block: 2px;
        }

    .parent{
        display: flex;
        flex-direction: column;
        height: auto;



        .parent-text{
            text-transform: capitalize;
            font-size: 14px;
            font-weight: 600;
            color: var(--white);
            padding: 10px 0 10px 5px;
        }

        .children{
            display: flex;
            flex-direction: column;

            .nav-item{
                width: 100%;
                display: flex;
                align-items: center;
                padding: 6px 10px;
                color: var(--white);
                border-radius: var(--border-radius-md);
                text-transform: capitalize;

                svg{
                    font-size: 16px;
                }

                span{
                    padding-left: 15px;
                    font-size: 14px;
                }

                &:hover{
                    background-color: rgba(255,255,255, .1);
                }
            }

            .active{
                background-color: rgba(255,255,255, .1);
            }
        }
    }

    }
}
`
const Sidebar = () => {
    const [hover, setHover] = useState(false)
    const dispatch = useDispatch()
    const { isSidebarOpen, sidebarLayoutType, sidebarColor } = useSelector((state) => state.layout)
    const { width } = useWindowDimensions();

    const handleClose = () => {
        if (width <= 880) {
            dispatch(handleSidebar())
        }
    }
    return (
        <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} isOpen={isSidebarOpen} bg={sidebarColor}>
            <div className="wrapper">
                {isSidebarOpen &&
                    <div className="nav-top">
                        {width <= 880 &&
                            <button className="btn-menu" onClick={() => dispatch(handleSidebar())}>
                                <HiMenu className="icon" />
                            </button>
                        }
                        <Link to="/" className="logo">
                            Ayovi
                        </Link>
                    </div>
                }
                <div className="links">
                    {
                        links.map((item) => (
                            <div className="parent" key={item.id}>
                                <div>
                                    <div className="parent-text">{item.text}</div>
                                    <div className="children">
                                        {item.sub.map((link) => (
                                            <NavLink className={({ isActive }) => (isActive && !hover) ? "nav-item active" : "nav-item"} to={link.path} onClick={handleClose} key={link.id}>
                                                {sidebarLayoutType !== "no-icon" &&
                                                    <>{link.icon}</>
                                                }
                                                <span>
                                                    {link.text}
                                                </span>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default Sidebar