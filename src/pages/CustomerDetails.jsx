import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import AreaChart from "../components/charts/AreaChart"
import ContentTop from "../components/ContentTop"
import Table from "../components/Table"
import { getCustomer } from "../features/customer/customerSlice"

const Container = styled.div`
    width: 100%;
    height: auto;

    .wrapper{
        width: calc(100% - 20px);
        margin: 10px;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
    
        .customer-container{
            width: 100%;
            display: flex;
            margin-bottom: 30px;

            .customer-details-container{
                width: 45%;
                display: flex;
                border: 1px solid;
                border-color: ${({ theme }) => theme.mainBorderColor};

                .avatar-container{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    width: 40%;
                    padding: 10px;

                    .customer-img-wrapper{
                        width: 120px;
                        height: 120px;
                        margin-bottom: 20px;

                        img{
                            width: 100%;
                            height: 100%;
                            border-radius: var(--border-radius-circle);
                            object-fit: cover;
                        }
                    }

                    .customer-name{
                        font-size: 1.1rem;
                        font-weight: 600;
                        color: ${({ theme }) => theme.mainTextColor};
                        text-align: center;
                    }
                }

                .customer-details{
                    width: calc(60% - 10px);
                    margin-left: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

                    .customer-type{
                        padding: 3px 8px;
                        border-radius: var(--border-radius-sm);
                        font-size: 10px;
                        font-weight: 500;
                        background-color: #dfdf099f;
                        margin-bottom: 10px;
                        color: ${({ theme }) => theme.mainTextColor};
                    }

                    .detail-item{
                        line-height: 100%;
                        margin-bottom: 10px;

                        .key{
                            font-weight: 600;
                            color: var(--gray-2);
                            color: ${({ theme }) => theme.textColor2};
                            font-size: 14px;
                        }   

                        .value{
                            font-weight: 500;
                            color: var(--gray-3);
                            color: ${({ theme }) => theme.textColor2};
                            font-size: 12px;
                        }
                    }
                }
            }

            .customer-stats-container{
                    width: calc(55% - 20px);
                    padding: 10px;
                    margin-left: 20px;
                    height: auto;
                    border: 1px solid;
                    border-color: ${({ theme }) => theme.mainBorderColor};
                    display: flex;
                    flex-direction: column;
                    
                    .top{
                        width: 100%;
                        color: ${({ theme }) => theme.textColor2};
                        font-size: 12px;
                        padding-bottom: 10px;
                    }

                    .customer-stats{
                        width: 100%;
                        height: 200px;
                    }
            }
        } 
        
        .recent-orders-container{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            border: 1px solid;
            border-color: ${({ theme }) => theme.mainBorderColor};

            .table-container{
                width: 100%;
            }
        }
    }

    @media(max-width: 1050px){
        .customer-details-container{
            flex-direction: column;
            align-items: center;
        }

        .avatar-container, .customer-details{
            width: 75% !important;
        }
        .avatar-container{
            align-items: center !important;
            
        }
        .customer-details{
            margin-left: 0;
        }
        .customer-stats-container{
            justify-content: center;
        }
    }

    @media(max-width: 700px){
        .customer-details-container{
            flex-direction: row;
        }
        .customer-container{
            flex-direction: column;
        }
        .customer-details-container,.customer-stats-container{
            width: 100% !important;
        } 
        .customer-stats-container{
            margin-top: 20px;
            margin-left: 0 !important;
        } 
    }

    @media(max-width: 670px){
        .table-container{
            width: auto !important;
            overflow-y: auto !important;
        }
    }
`
const CustomerDetails = () => {

    const { customerId } = useParams()
    const { currentCustomer, currentCustomerStats, currentCustomerLatestTransactions } = useSelector((state) => state.customer)
    const dispatch = useDispatch()

    const dataKeys = [
        { key: "sessions", color: "#8884d8", fill: "url(#colorUv)" },
        { key: "sales", color: "#82ca9d", fill: "url(#colorPv)" }
    ]
    const mainDataKey = "month"

    const titles = ["id", "product", "amount", "status"]

    useEffect(() => {
        dispatch(getCustomer(customerId))
    }, [dispatch, customerId])
    return (
        <Container>
            <div className="wrapper">
                <div className="customer-container">
                    <div className="customer-details-container box">
                        <div className="avatar-container">
                            <div className="customer-img-wrapper">
                                <img src={currentCustomer.customerImg} alt={currentCustomer.customer} />
                            </div>
                            <div className="customer-name">{currentCustomer.customer}</div>
                        </div>
                        <div className="customer-details">
                            <div className="customer-type">
                                {currentCustomer.type}
                            </div>
                            <div className="detail-item">
                                <span className="key">Email: </span>
                                <span className="value">{currentCustomer.email}</span>
                            </div>
                            <div className="detail-item">
                                <span className="key">Phone: </span>
                                <span className="value">{currentCustomer.phone}</span>
                            </div>
                            <div className="detail-item">
                                <span className="key">Address: </span>
                                <span className="value">{currentCustomer.address}</span>
                            </div>
                            <div className="detail-item">
                                <span className="key">Country: </span>
                                <span className="value">{currentCustomer.country}</span>
                            </div>
                        </div>
                    </div>
                    <div className="customer-stats-container box">
                        <div className="top">Last 6 month session</div>
                        <div className="customer-stats">
                            <AreaChart data={currentCustomerStats} type={"customUser"} dataKeys={dataKeys} mainDataKey={mainDataKey} />
                        </div>
                    </div>
                </div>
                <div className="recent-orders-container box">
                    <ContentTop text={"Latest Transactions"} btnText={"Generate Report"} />
                    <div className="table-container">
                        <Table data={currentCustomerLatestTransactions} titles={titles} type={"customerLatestTransactions"} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CustomerDetails