import styled from "styled-components"
import GeoChart from "../charts/GeoChart"

const Container = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const DashboardRecentOrders = () => {
    return (
        <Container>
            <GeoChart />
        </Container>
    )
}
export default DashboardRecentOrders