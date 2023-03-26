import { BsPerson } from "react-icons/bs"
import { MdOutlineShoppingCart, MdAttachMoney, MdOutlineInsertComment } from "react-icons/md"
import { HiTemplate } from "react-icons/hi"
import DashboardTopItem from "./DashboardTopItem"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .top{
        display: flex;
        flex-direction: column;
        color: ${({ theme }) => theme.mainTextColor};

        h1{
            font-size: 1.6rem;
        }
        p{
            font-size: 14px;
            font-weight: 600;
            text-transform: capitalize;
        }
    }

    .content{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
`

const data = [
    {
        id: 1,
        color: "109, 53, 164",
        count: 97,
        text: "users",
        icon: <BsPerson className="icon" />
    },
    {
        id: 2,
        color: "147, 46, 46",
        count: 22,
        text: "orders",
        icon: <MdOutlineShoppingCart className="icon" />
    },
    {
        id: 3,
        color: "7, 84, 105",
        count: 43,
        text: "products",
        icon: <HiTemplate className="icon" />
    },
    {
        id: 4,
        color: "101, 181, 26",
        count: 184,
        text: "income",
        icon: <MdAttachMoney className="icon" />
    },
    {
        id: 5,
        color: "149, 16, 67",
        count: 229,
        text: "comments",
        icon: <MdOutlineInsertComment className="icon" />
    }
]
const DashboardTop = () => {
    return (
        <Container>
            <div className="top">
                <h1 onClick={() => window.scrollTo(0, document.body.scrollHeight)}>DASHBOARD</h1>
                <p>welcome to your dashboard</p>
            </div>
            <div className="content">
                {
                    data.map((item) => (
                        <DashboardTopItem key={item.id} color={item.color} count={item.count} text={item.text} icon={item.icon} />
                    ))
                }
            </div>
        </Container>
    )
}

export default DashboardTop