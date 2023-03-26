import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleCoverContainer, handleCustomizer } from "../features/layout/layoutSlice";
import { useScrollLock } from "../hooks/useScrollLock"

const Container = styled.div`
    width: 100vw !important;
    height: 100vh !important;
    z-index: ${({ zIndex }) => zIndex};
    position: fixed;
    background-color: rgba(0,0,0,0.5);
`

const CoverContainer = ({ type }) => {

    const { lockScroll, unlockScroll } = useScrollLock();

    const dispatch = useDispatch()
    useEffect(() => {
        lockScroll()

        return () => {
            unlockScroll()
        }
    }, [lockScroll, unlockScroll])

    const handleClick = () => {
        if (type === "navbar") {
            dispatch(handleCoverContainer(false))
        }
        else {
            dispatch(handleCustomizer())
        }
    }
    return (
        <Container zIndex={type === "navbar" ? "50" : "5000"} onClick={handleClick} />
    )
}

export default CoverContainer