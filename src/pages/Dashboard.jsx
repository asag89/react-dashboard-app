
import styled from "styled-components"
import DashboardTop from "../components/dashboard/DashboardTop"
import DashboardRevenue from "../components/dashboard/DashboardRevenue"
import DashboardTopSellers from "../components/dashboard/DashboardTopSellersTable"
import DashboardUserStats from "../components/dashboard/DashboardUserStats"
import DashboardCountryStats from "../components/dashboard/DashboardCountryStats"
import DashboardTopSellersPie from "../components/dashboard/DashboardTopSellersPie"

const Container = styled.div`
    width: 100%;

    .wrapper{
        width: calc(100% - 20px);
        margin: 10px;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        border-radius: var(--border-radius-md);
    }
`

const Dashboard = () => {
    return (
        <Container>
            <div className="wrapper">
                <DashboardTop />
                <DashboardRevenue />
                <DashboardTopSellers />
                <DashboardTopSellersPie />
                <DashboardUserStats />
                <DashboardCountryStats />
            </div>
        </Container>
    )
}
export default Dashboard