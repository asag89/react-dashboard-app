import AreaChart from "../charts/AreaChart"
import styled from "styled-components"
import ProgressBar from "../progressbar/ProgressBar"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useSelector } from "react-redux"

const Container = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 30px;

    .revenue-chart-container{
        width: calc(70% - 20px);
        margin-right: 20px;
        height: auto;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        border: 1px solid;
        border-color: ${({ theme }) => theme.mainBorderColor};

        .revenue-total{
            margin:0 0 20px 10px;
            color: ${({ theme }) => theme.mainTextColor};

            h2{
                font-size: 12px;
                font-weight: 400;
            }

            span{
                color: var(--purple-4);
                font-size: 12px;
                font-weight: 600;
            }
        }

        .revenue-chart{
            width: 100%;
            height: 300px;
        }
    }

    .previous-stats-container{
        padding: 10px;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid;
        border-color: ${({ theme }) => theme.mainBorderColor};
        color: ${({ theme }) => theme.mainTextColor};

        .main-time{
            font-weight: 500;
            padding-bottom: 15px;
        }

        .previous-stats{
            margin-top: 30px;
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;

            .previous-stats-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                .previous-time{
                    padding-bottom: 5px;
                    font-size: 12px;
                    text-align: center;
                }

                .previous-state{
                    display: flex;
                    align-items: center;
                    font-weight: 600;

                    .icon{
                        font-size: 1.4rem;
                    }
                }

                .up{
                    color: var(--green-1);
                }

                .down{
                    color: var(--red-1);
                }
            }
        }
    }

    @media(max-width: 730px){
        flex-direction: column;

    .revenue-chart-container,.previous-stats-container{
        width: 100%;
    }

    .revenue-chart-container{
        margin-bottom: 10px;
    }

    .previous-stats-item{
        flex: 1;
    }
}
`

const DashboardRevenue = () => {
    const { recentRevenues } = useSelector((state) => state.revenue)
    const dataKeys = [
        { key: "revenue", color: "#8884d8", fill: "url(#colorUv)" },
        { key: "lastRevenue", color: "#82ca9d", fill: "url(#colorPv)" }
    ]
    const mainDataKey = "product"
    return (
        <Container>

            <div className="revenue-chart-container box">
                <div className="revenue-total">
                    <h2>This month (income)</h2>
                    <span>$4892.49</span>
                </div>
                <div className="revenue-chart">
                    <AreaChart data={recentRevenues} dataKeys={dataKeys} mainDataKey={mainDataKey} />
                </div>
            </div>
            <div className="previous-stats-container box">
                <div className="main-time">This month</div>
                <ProgressBar counter={82} width={"140px"} />
                <div className="previous-stats">
                    <div className="previous-stats-item">
                        <div className="previous-time">Last week</div>
                        <div className="previous-state up">
                            <MdOutlineKeyboardArrowUp className="icon" />
                            <span>22%</span>
                        </div>
                    </div>
                    <div className="previous-stats-item">
                        <div className="previous-time">Last month</div>
                        <div className="previous-state down">
                            <MdOutlineKeyboardArrowDown className="icon" />
                            <span>14%</span>
                        </div>
                    </div>
                    <div className="previous-stats-item">
                        <div className="previous-time">All time</div>
                        <div className="previous-state up">
                            <MdOutlineKeyboardArrowUp className="icon" />
                            <span>19%</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default DashboardRevenue