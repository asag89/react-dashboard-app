import { useState } from "react"
import styled from "styled-components"
import BarChart from "../charts/BarChart"
import { MdOutlineKeyboardArrowUp, MdOutlineShoppingBasket } from "react-icons/md"
import { AiOutlineDollar } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { useSelector } from "react-redux"

const Container = styled.div`
    width: 100%;
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .stats-container{
        display: flex;

        .all-stats-container{
            width: 65%;
            display: flex;
            flex-direction: column;
            border: 1px solid ;
            border-color: ${({ theme }) => theme.mainBorderColor};
            border-radius: var(--border-radius-sm);

            .stats-type-container{
                margin-top: 10px;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                border-bottom: 1px solid;
                border-color: ${({ theme }) => theme.mainBorderColor};
            }

            .chart-container{
                margin-top: 20px;
                width: 100%;
                height: 300px;
            }
        }

        .curr-stats-container{
            width: calc(35% - 20px);
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: var(--border-radius-sm);

            .curr-stats-item{
                width: 100%;
                height: 30%;
                padding: 10px;
                display: flex;
                align-items: center;
                border: 1px solid;
                border-color: ${({ theme }) => theme.mainBorderColor};
                transition: .5s;

                &:hover{
                    transform: translateY(-10px);
                }

                .session{
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                
                    .key{
                        color: ${({ theme }) => theme.mainTextColor};
                        font-size: 14px;
                        text-transform: capitalize;
                    }

                    .value{
                        font-size: 1.2rem;
                        color: ${({ theme }) => theme.mainTextColor};
                        font-weight: 600;
                    }

                    .all-session{
                        width: 100%;
                        font-size: 12px;
                        font-weight: 500;
                        color: ${({ theme }) => theme.textColor2};
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }

                .stats{
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: space-between;

                    .data{
                        display: flex;
                        align-items: center;
                        color: var(--green-3);
                        font-size: 14px;
                    }

                    .icon-wrapper{
                        padding: 10px;
                        background-color: #0000ff3b;
                        border-radius: var(--border-radius-circle);
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .icon{
                            font-size: 1.4rem;
                            color: ${({ theme }) => theme.mainTextColor};
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 730px){
        .stats-container{
            flex-direction: column;
        }

        .all-stats-container,.curr-stats-container{
            width: 100% !important;
        }

        .curr-stats-container{
            margin-left: 0 !important;
            margin-top: 20px;
            height: 360px;
        }
    }

`

const Button = styled.button`
    font-weight: 500;
    color: ${({ theme }) => theme.mainTextColor};
    color: ${({ c }) => c};
    background-color: transparent;
    width: 15%;
    border-bottom: 2px solid rebeccapurple;
    padding: 15px 0;
    border-bottom: 2px solid transparent;
    border-color: ${({ bbc }) => bbc};
`


const DashboardUserStats = () => {
    const [statsType, setStatsType] = useState("session")
    const { recentSales } = useSelector((state) => state.sales)
    const { recentUserSession } = useSelector((state) => state.customer)

    const data = [
        {
            id: 1,
            value: 321.243,
            text: "session",
            percentage: 22,
            icon: <BsPerson className="icon" />,
            navigate: "all session"
        },
        {
            id: 2,
            value: 192.891,
            text: "sales",
            percentage: 49,
            icon: <MdOutlineShoppingBasket className="icon" />,
            navigate: "all sales"
        },
        {
            id: 3,
            value: 349.324,
            text: "earnings",
            percentage: 18,
            icon: <AiOutlineDollar className="icon" />,
            navigate: "net earnings"
        }
    ]
    const { theme } = useSelector((state) => state.layout)


    return (
        <Container >
            <div className="stats-container">
                <div className="all-stats-container box">
                    <div className="stats-type-container">

                        <Button bbc={(statsType === "session" && theme === "light") ? "#6706c7" : (statsType === "session" && theme === "dark") && "#fff"} c={(theme === "light" && statsType === "session") ? "#222" : (theme === "dark" && statsType === "session") ? "#cbc4c4" : (theme === "dark" && statsType !== "session") ? "#787878" : "#999"} onClick={() => setStatsType("session")}>Session</Button>
                        <Button bbc={(statsType === "sales" && theme === "light") ? "#6706c7" : (statsType === "sales" && theme === "dark") && "#fff"} c={(theme === "light" && statsType === "sales") ? "#222" : (theme === "dark" && statsType === "sales") ? "#cbc4c4" : (theme === "dark" && statsType !== "sales") ? "#787878" : "#999"} onClick={() => setStatsType("sales")}>Sales</Button>
                    </div>
                    <div className="chart-container">
                        <BarChart data={statsType === "session" ? recentUserSession : recentSales} width={"100%"} height={"300px"} />
                    </div>
                </div>

                <div className="curr-stats-container">
                    {data.map((item) => (
                        <div key={item.id} className="curr-stats-item box">
                            <div className="session">
                                <div className="key">{item.text}</div>
                                <div className="value">{item.value}</div>
                                <div className="all-session">View {item.navigate}</div>
                            </div>
                            <div className="stats">
                                <div className="data"><MdOutlineKeyboardArrowUp />+ {item.percentage}%</div>
                                <div className="icon-wrapper">
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="curr-stats-item box">
                        <div className="session">
                            <div className="key">Total Session</div>
                            <div className="value">321.243</div>
                            <div className="all-session">View all session</div>
                        </div>
                        <div className="stats">
                            <div className="data"><MdOutlineKeyboardArrowUp />+ 22%</div>
                            <div className="icon-wrapper">
                                <BsPerson className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="curr-stats-item box">
                        <div className="session">
                            <div className="key">Total Sales</div>
                            <div className="value">192.891</div>
                            <div className="all-session">View all sales</div>
                        </div>
                        <div className="stats">
                            <div className="data"><MdOutlineKeyboardArrowUp />+ 49%</div>
                            <div className="icon-wrapper">
                                <BiShoppingBag className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="curr-stats-item box">
                        <div className="session">
                            <div className="key">Total earnings</div>
                            <div className="value">$349.324</div>
                            <div className="all-session">View net earnings</div>
                        </div>
                        <div className="stats">
                            <div className="data"><MdOutlineKeyboardArrowUp />+ 18%</div>
                            <div className="icon-wrapper">
                                <AiOutlineDollar className="icon" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Container >
    )
}

export default DashboardUserStats
