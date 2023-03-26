
import styled from "styled-components"

import { MdOutlineEdit } from "react-icons/md"
import { RiDeleteBin5Line } from "react-icons/ri"
import { deleteProduct } from "../features/products/productSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Container = styled.table`
    width: 100%;
    border-collapse: collapse;

    thead{
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.mainBorderColor};
        font-weight: 500;
        text-transform: capitalize;
        width: 100%;
    }

    tbody{
        width: 100%;
    }
`
const TableRow = styled.tr`
    &:hover td{
        background-color: ${({ theme }) => theme.hoverBgColor};
    }

    th, td{
        padding: 10px 18px;
        font-size: 12px;
        text-align: start;
        background-color: ${({ theme }) => theme.mainBgColor};
        color: ${({ theme }) => theme.mainTextColor};
    }
    th{
        font-weight: 600;
    }

    .id{
        color: ${({ theme }) => theme.purpleTextColor};
        font-size: 12px;
        font-weight: 600;
    }

    .double{
        display: flex;
        align-items: center;

        .img{
            width: 25px;
            height: 25px;
        }

        .productImg{
            width: 20px;
            object-fit: contain;
        }

        .userImg{
            width: 25px;
            height: 25px;
            object-fit: cover;
            border-radius: var(--border-radius-circle);
        }

        .text{
            margin-left: 10px;
            text-transform: capitalize;
            font-size: 12px;
            font-weight: 500;
        }
    }



    .amount{
        font-weight: 600;
        font-size: 14px;
        color: var(--green-1);
    }

    .totalSales{
        color: ${({ theme }) => theme.textColor2};
        font-weight: 600;

    }

    .stock{
        color: ${({ theme }) => theme.textColor2};
        font-weight: 600;
        font-size: 14px;
    }

    .email{
        font-size: 12px;
        color: ${({ theme }) => theme.textColor2};
        font-weight: 500;
    }
    .customerType{
        padding: 4px 8px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
        font-size: 12px;
        border-radius: var(--border-radius-md);
    }

    // customer premium
    .premium{
        background-color: #dfdf099f;
        color: ${({ theme }) => theme.mainTextColor};
    }

    // customer normal
    .normal{
        background-color: ${({ theme }) => theme.grayBgColor};
        color: ${({ theme }) => theme.textColor2};
    }

    .status{
        padding: 5px;
        font-size: 12px;
        font-weight: 500;
        border-radius: var(--border-radius-md);
    }

    .pending {
        background-color: #ffff0021;
        color: var(--yellow-1);
    }

    .delivered{
        background-color: #00800021;
        color: var(--green-2);
    }

    .view-user{
        border:1px solid;
        border-color: ${({ theme }) => theme.purpleBorderColor};
        color: ${({ theme }) => theme.purpleTextColor};
        background-color: ${({ theme }) => theme.purpleBgColor};
        padding: 2px 8px;
        font-size: 12px;
        border-radius: var(--border-radius-xsm);
        font-weight: 500;
    }
    .tools{

        button{
            padding: 3px 5px;
            border-radius: var(--border-radius-sm);

            &:hover{
                transform: scale(1.1);
            }

            &:first-child{
                margin-right: 5px;
            }

            svg{
                font-size: .8rem;
            }
        }

        .edit{
            background-color: #0abd0a34;

            svg{
                fill: var(--green-1);
            }
        }

        .delete{
            background-color: #ff00002d;

            svg{
                fill: var(--red-1);
            }
        }

    }




    @media(max-width: 720px){

        th, td{
            padding: 10px;
        }

        .double{
            width: max-content;
        }

        .tools{
            display: flex;

        }
}


`
const Table = ({ data, titles, type }) => {
    const dispatch = useDispatch()
    return (
        <Container>
            <thead>
                <TableRow  >
                    {titles.map((item, i) => (
                        <th key={i}>{item}</th>
                    ))}
                </TableRow>
            </thead>
            <tbody>
                {
                    data.map((item) => (
                        <TableRow key={item.id}  >
                            <td className="id">#{item.id}</td>
                            {
                                type !== "customers" &&
                                <>
                                    <td className="double">
                                        <img src={item.img} className={"img productImg"} alt={item.product} />
                                        <div className="text">{item.product}</div>
                                    </td>
                                    <td className="amount">${item.amount || item.price}</td>
                                </>
                            }

                            {(type === "orders" || type === "customers") &&
                                <td className="double">
                                    <img src={item.customerImg} className={"img userImg"} alt={item.customer} />
                                    <div className="text">{item.customer}</div>
                                </td>
                            }
                            {
                                type === "customers" &&
                                <>
                                    <td className="email">{item.email}</td>
                                    <td >
                                        <span className={`customerType ${item.type}`}>{item.type}</span>
                                    </td>
                                </>
                            }

                            {(type === "topSellers" || type === "products") &&
                                <>
                                    <td className="totalSales">{item.totalSales}</td>
                                    <td className="stock">{item.stock}</td>
                                </>
                            }
                            {(type === "orders" || type === "customerLatestTransactions") &&
                                <td>
                                    <span className={`status ${item.status}`} >{item.status}</span>
                                </td>
                            }
                            {
                                type === "customers" &&
                                <td>
                                    <Link className="view-user" to={`/customers/${item.id}`}>View</Link>
                                </td>
                            }
                            {type === "products" &&
                                <td className="tools">
                                    <button className="edit" >
                                        <MdOutlineEdit />
                                    </button>
                                    <button className="delete" onClick={() => dispatch(deleteProduct(item.id))}>
                                        <RiDeleteBin5Line />
                                    </button>

                                </td>
                            }
                        </TableRow>
                    ))
                }
            </tbody >
        </Container >
    )
}

export default Table