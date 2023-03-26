import { useSelector } from "react-redux"
import styled from "styled-components"
import useWindowDimensions from "../../hooks/useWindowDimension"
import GeoChart from "../charts/GeoChart"
import HorizontalProgressBar from "../progressbar/HorizontalProgressBar"
import ContentTop from "../ContentTop"

const Container = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    border-radius: var(--border-radius-sm);
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top-countries{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        margin-top: 20px;
    }
`

const DashboardCountryStats = () => {
    const countries = [
        {
            id: 1,
            country: "US",
            value: 80
        },
        {
            id: 2,
            country: "Germany",
            value: 62
        },
        {
            id: 3,
            country: "UK",
            value: 49
        }
    ]
    const { width } = useWindowDimensions();

    const { salesbyLocations } = useSelector((state) => state.sales)
    return (
        <Container className="box">
            <ContentTop text={"sales by locations"} btnText={"Generate Report"} />
            <GeoChart data={salesbyLocations} width={"100%"} height={width >= 730 ? "400px" : width >= 570 ? "300px" : "235px"} scale={width >= 730 ? 93 : width >= 570 ? 73 : 56} />
            <div className="top-countries">
                {countries.map((item) => (
                    <HorizontalProgressBar key={item.id} value={item.value} country={item.country} />
                ))}
            </div>
        </Container>
    )
}

export default DashboardCountryStats