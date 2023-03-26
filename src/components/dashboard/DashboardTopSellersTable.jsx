import styled from "styled-components"
import Table from "../Table"
import { useSelector } from "react-redux"
import ContentTop from "../ContentTop"

const Container = styled.div`
    width: 100%;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .table-container{
        width:100%;
    }
    
    @media(max-width: 670px){
        .table-container{
            width: auto !important;
            overflow-y: auto !important;
        }
    }
`

const DashboardTopSellersTable = () => {

    const titles = ["id", "product", "amount", "total sales", "stock"]

    const { topSellingProducts } = useSelector((state) => state.sales)

    return (
        <Container className="box">
            <ContentTop text={"top sellers"} btnText={"Generate Report"} />
            <div className="table-container table-scroll">
                <Table data={topSellingProducts} titles={titles} type={"topSellers"} />
            </div>
        </Container>
    )
}

export default DashboardTopSellersTable