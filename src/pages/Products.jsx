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

        .products-container{
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

const Products = () => {
    const { products } = useSelector((state) => state.products)
    const titles = ["id", "product", "price", "totalSales", "stock", "action"]
    return (
        <Container>
            <div className="wrapper">
                <div className="products-container box">
                    <ContentTop text={"products"} btnText={"View Details"} />
                    <div className="table-container table-scroll">
                        <Table data={products} titles={titles} type={"products"} />
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Products