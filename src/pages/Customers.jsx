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
 
        .customers-container{
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
const Customers = () => {
    const { customers } = useSelector((state) => state.customer)
    const titles = ["id", "customer", "email", "type", "action"]
    return (
        <Container>
            <div className="wrapper">
                <div className="customers-container box">
                    <ContentTop text={"customers"} btnText={"View Details"} />
                    <div className="table-container table-scroll">
                        <Table data={customers} titles={titles} type={"customers"} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Customers