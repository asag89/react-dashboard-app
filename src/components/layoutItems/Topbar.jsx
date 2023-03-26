import styled from "styled-components"
import { MdSearch, MdOutlineWidgets, MdOutlineNotificationsNone, MdOutlineShoppingBasket } from "react-icons/md"
import { HiMenu } from "react-icons/hi"
import { handleSidebar } from "../../features/layout/layoutSlice"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import useWindowDimensions from "../../hooks/useWindowDimension"

const Container = styled.div`
    width:${({ isOpen, isSI }) => !isOpen ? "100%" : isSI ? "calc(100% - 80px)" : "calc(100% - 220px)"};
    height: 60px;
    transition: .3s;
    padding: 10px;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: fixed;
    top: 0;
    z-index: 5;
    background-color: ${({ theme }) => theme.mainBgColor};

    .search-container{
        display: flex;
        align-items:center;

        .btn-menu{
            margin-right: 10px;
            background-color: transparent;

            &:disabled{
                .icon{
                    color: var(--gray-2);
                    cursor: initial;
                }
            }
            .icon{
                font-size: 1.4rem;
                color: ${({ theme }) => theme.mainTextColor};
            }   
        }

        .searchbar{
            width: 220px;
            border: 1px solid;
            border-color: ${({ theme }) => theme.mainBorderColor};
            border-radius: var(--border-radius-sm);
            display: flex;
            align-items: center;
            justify-content: space-between;

            input{
                width: calc(100% - 24px);
                background-color: transparent;
                padding: 7px 2px 7px 7px;
                color: ${({ theme }) => theme.mainTextColor};
            }

            .icon-wrapper{
                padding: 7px 4px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                .icon{
                    color: ${({ theme }) => theme.textColor2};
                }
            }
        }
    }

    .notifications-container{
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        div{
            padding: 8px;
            border-radius: var(--border-radius-md);
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;

            &:hover{
                background-color: ${({ theme }) => theme.hoverBgColor};
            }

            .icon{
                width: 20px;
                height: 18px;
                color: ${({ theme }) => theme.mainTextColor};
            }

            .count{
                position: absolute;
                top: 0;
                right: 0;
                width: 15px;
                height: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
                background-color: var(--purple-1);
                color: var(--white);
                border-radius: var(--border-radius-circle);
            }
        }

        .language-container{
            font-size: .9rem;
            color: ${({ theme }) => theme.mainTextColor};
            font-weight: 400;
        }

        .profilebox-container{
            display: flex;
            align-items: center;

            .profilebox-img{
                width: 30px;
                height: 30px;
                object-fit: cover;
                border-radius: var(--border-radius-circle);
            }

            .profilebox-name{
                font-size: 12px;
                font-weight: 600;
                margin-left: 5px;
                color: ${({ theme }) => theme.textColor2};
            }
        }
    }

    @media(max-width: 880px) {
        width:100%;

        .profilebox-name{
            display: none;
        }
    }
`
const Topbar = () => {

    const dispatch = useDispatch()
    const { isSidebarOpen, sidebarLayoutType } = useSelector((state) => state.layout)
    const location = useLocation().pathname
    const { width } = useWindowDimensions();

    return (
        <Container isOpen={isSidebarOpen} isSI={sidebarLayoutType === "small-icon"}>
            <div className="search-container">
                <button className="btn-menu" onClick={() => location !== "/calendar" ? dispatch(handleSidebar()) : width <= 880 && dispatch(handleSidebar())} disabled={((width > 880) && location === "/calendar")}>
                    <HiMenu className="icon" />
                </button>
                <div className="searchbar">
                    <input type="text" placeholder="Search" />
                    <div className="icon-wrapper">
                        <MdSearch className="icon" />
                    </div>
                </div>
            </div>
            <div className="notifications-container">
                <div className="language-container">
                    EN
                </div>
                <div>
                    <MdOutlineWidgets className="icon" />
                    <div className="count">5</div>
                </div>
                <div>
                    <MdOutlineShoppingBasket className="icon" />
                    <div className="count">2</div>
                </div>
                <div>
                    <MdOutlineNotificationsNone className="icon" />
                    <div className="count">3</div>
                </div>

                <div className="profilebox-container">
                    <img className="profilebox-img" src="https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/16687580455221650122517218image15.jpg?alt=media&token=14135ab0-8d31-4d8d-8ecd-0628a9c8305d" alt="Riley Jackson" />
                    <span className="profilebox-name">Riley Jackson</span>
                </div>
            </div>
        </Container>
    )
}

export default Topbar