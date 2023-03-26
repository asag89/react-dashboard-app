import { useSelector } from "react-redux"
import styled from "styled-components"
import PieChart from "../charts/PieChart"

const Container = styled.div`
    width: 100%;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 5px;
`
const DashboardTopSellersPie = () => {
    const { monthlySales } = useSelector((state) => state.sales)
    return (
        <Container className="box">
            <PieChart width={"100%"} height={"350px"} data={monthlySales} />
        </Container>
    )
}

export default DashboardTopSellersPie