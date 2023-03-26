import { useSelector } from "react-redux"
import styled from "styled-components"
import ContentTop from "../components/ContentTop"
import Table from "../components/Table"

const Container = styled.div`
    width: 100%;
    height: auto;

    .wrapper{
        width: calc(100% - 20px);
        margin: 10px;
        margin-top: 25px;
        display: flex;
        flex-direction: column;

        .recent-orders-container{
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid;
            border-color: ${({ theme }) => theme.mainBorderColor};

            .table-container{
                width: 100%;
            }
        }
    }

    @media(max-width: 670px){

        .table-container{
            width: auto !important;
            overflow-y: auto !important;
        }
    }
`

const Orders = () => {

    const { recentOrders } = useSelector((state) => state.orders)

    const titles = ["order id", "product", "amount", "customer", "status"]
    return (
        <Container>
            <div className="wrapper">
                <div className="recent-orders-container box">
                    <ContentTop text={"Recent Orders"} btnText={"Generate Report"} />
                    <div className="table-container table-scroll">
                        <Table data={recentOrders} titles={titles} type={"orders"} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Orders