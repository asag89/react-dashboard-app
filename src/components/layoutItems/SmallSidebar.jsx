import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BsDribbble } from "react-icons/bs"
import { MdMoreHoriz } from "react-icons/md"
import { handleSidebar } from "../../features/layout/layoutSlice"
import useWindowDimensions from "../../hooks/useWindowDimension"
import links from "../../utils/links"

const Container = styled.nav`
    width: ${({ isOpen }) => isOpen ? "80px" : "0"};
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
        padding: 10px 0;

        .nav-top{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 7.5px;
            padding-bottom: 8px;
            color: var(--white);
            margin-bottom: 10px;
            border-bottom: 1px solid;
            border-color: ${({ theme }) => theme.mainBorderColor};

            .logo{
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

            .icon-wrapper{
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: var(--border-radius-circle);
                color: var(--white);
            }

            .seperator{
                .icon{
                    color: var(--gray-1);
                    font-size: 20px;
                }
            }

            .children{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: auto;

                .link-item{
                    &:hover{
                        background-color: rgba(255,255,255, .1);
                    }
                }
                    svg{
                        font-size: 20px;
                    }

                .active{
                    background-color: rgba(255,255,255, .1);
                }
            }
        }
        }
`
const SmallSidebar = () => {
    const [hover, setHover] = useState(false)
    const dispatch = useDispatch()
    const { isSidebarOpen, sidebarColor } = useSelector((state) => state.layout)

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
                        <Link to="/" className="logo">
                            <BsDribbble />
                        </Link>
                    </div>
                }
                <div className="links">
                    {
                        links.map((item) => (
                            <div key={item.id} className="children">
                                {item.sub.map((link) => (
                                    <NavLink className={({ isActive }) => (isActive && !hover) ? "icon-wrapper link-item active" : "link-item icon-wrapper"} to={link.path} onClick={handleClose} key={link.id} title={link.text}>
                                        {link.icon}
                                    </NavLink>
                                ))}
                                <div className="icon-wrapper seperator">
                                    <MdMoreHoriz className="icon" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default SmallSidebar