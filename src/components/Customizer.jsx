import { useDispatch } from "react-redux"
import styled from "styled-components"
import { handleCustomizer } from "../features/layout/layoutSlice"
import { themes, sidebarColors, sidebarLayouts } from "../utils/customizerData"

const Container = styled.div`
    width: 290px;
    height: 100vh;
    background-color: ${({ theme }) => theme.mainBgColor};
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10000000;
    border-left: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};

    .layout-settings{
        width: 100%;
        height: calc(100% - 120px);
        overflow: auto;
        margin-top: 50px;
        margin-bottom: 70px;
        display: flex;
        flex-direction: column;

        &::-webkit-scrollbar {
            width: 5px;
            margin: 20px !important;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--gray-4);
            border-radius: var(--border-radius-md);
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
            margin-left: 2px;
            margin-block: 2px;
        }
    }
    .top{
        width: inherit;
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid;
        border-left: 1px solid;
        border-color: ${({ theme }) => theme.mainBorderColor};
        position: fixed;
        top: 0;
        right: 0;
        background-color: inherit;
        background-color: var(--purple-1);

        h3{
            font-size: 1rem;
            font-weight: 500;
            padding: 12px 15px;
            color: var(--white);
            text-transform: capitalize;
        }
    }

    .layout-container{
        padding: 15px 15px 10px 15px;

        .text{
            font-size: 13px;
            color: ${({ theme }) => theme.textColor2};
            text-transform: capitalize;
            font-weight: 500;
            width: 100%;
            border-bottom: 1px solid;
            padding-bottom: 3px;
            border-color: ${({ theme }) => theme.mainBorderColor};
        }

        .layouts{
            margin-top: 10px;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;

            .layout-item{
                width: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                
            .layout-type{
                color: ${({ theme }) => theme.mainTextColor};
                font-size: 11px;
                padding: 5px 0;
                text-transform: capitalize;
            }
        }
        }
    }
 
    .bottom{
        width: inherit;
        height: 70px;
        margin-top: auto;
        display: flex;
        align-items: center;
        padding: 15px;
        border-top: 1px solid;
        border-left: 1px solid;
        border-color: ${({ theme }) => theme.mainBorderColor};
        position: fixed;
        bottom: 0;
        right: 0;
        background-color: inherit;

        button{
            padding: 10px 25px;
            border-radius: var(--border-radius-sm);
            background-color: var(--purple-1);
            color: var(--white);
            text-transform: capitalize;
            font-weight: 500;
        }

        .btn-close{
            width: 40%;
            background-color: var(--blue-2);
        }

        .btn-reset{
            width: calc(60% - 20px);
            margin-left: 20px;
        }
    }
`

const Customizer = () => {
    const dispatch = useDispatch()
    return (
        <Container>
            <div className="top">
                <h3>dashboard customizer</h3>
            </div>
            <div className="layout-settings">
                <div className="layout-container">
                    <p className="text">sidebar layout</p>
                    <div className="layouts">
                        {sidebarLayouts.map((box) => (
                            <div key={box.id} className="layout-item">
                                {box.box}
                                <p className="layout-type">{box.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="layout-container">
                    <p className="text">Theme</p>
                    <div className="layouts">
                        {themes.map((box) => (
                            <div key={box.id} className="layout-item">
                                {box.box}
                                <p className="layout-type">{box.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="layout-container">
                    <p className="text">sidebar color</p>
                    <div className="layouts">
                        {sidebarColors.map((box) => (
                            <div key={box.id} className="layout-item">
                                {box.box}
                                <p className="layout-type">{box.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button className="btn-close" onClick={() => dispatch(handleCustomizer())}>close</button>
                <button className="btn-reset" onClick={() => window.location.reload(true)}>reset</button>
            </div>
        </Container>
    )
}
export default Customizer