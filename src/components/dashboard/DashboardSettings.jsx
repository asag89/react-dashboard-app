
import styled from "styled-components"
import { MdSettings } from "react-icons/md"
import { motion } from "framer-motion"
import { handleCustomizer } from "../../features/layout/layoutSlice"
import { useDispatch } from "react-redux"
const Container = styled.div`
    width: 55px;
    height: 55px;
    z-index: 1000000;
    background-color: var(--purple-1);
    border-radius: var(--border-radius-circle);
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    transition: .5s;
    &:hover{
        background-color: var(--purple-2);
        box-shadow: 0px 0px 15px 0px var(--white);
        -webkit-box-shadow: 0px 0px 15px 0px var(--white); 
    }

    .icon-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon{
            font-size: 1.6rem;
            fill: var(--white);
        }        
    }
`

const DashboardSettings = () => {
    const dispatch = useDispatch()
    return (
        <Container onClick={() => dispatch(handleCustomizer())}>
            <motion.div animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 2, repeat: Infinity }} className="icon-wrapper">
                <MdSettings className="icon" />
            </motion.div>
        </Container>
    )
}

export default DashboardSettings