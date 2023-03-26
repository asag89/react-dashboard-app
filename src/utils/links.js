
import { RiDashboardFill } from "react-icons/ri"
import { BsPeople, BsCalendar, BsMap } from "react-icons/bs"
import { MdOutlineShoppingCart } from "react-icons/md"
import { HiTemplate } from "react-icons/hi"
import { AiOutlineLineChart, AiOutlineBarChart, AiOutlinePieChart } from "react-icons/ai"

const links = [
    {
        id: 1,
        text: "main",
        sub: [
            {
                id: 1,
                text: "Dashboard",
                icon: <RiDashboardFill />,
                path: "/"
            }
        ]
    },
    {
        id: 2,
        text: "lists",
        sub: [
            {
                id: 1,
                text: "team",
                icon: <BsPeople />,
                path: "/team"

            },
            {
                id: 2,
                text: "orders",
                icon: <MdOutlineShoppingCart />,
                path: "/orders"

            },
            {
                id: 3,
                text: "customers",
                icon: <BsPeople />,
                path: "/customers"

            },
            {
                id: 4,
                text: "products",
                icon: <HiTemplate />,
                path: "/products"
            }
        ]
    },
    {
        id: 3,
        text: "apps",
        sub: [
            {
                id: 1,
                text: "calendar",
                icon: <BsCalendar />,
                path: "/calendar"
            }
        ]
    },

    {
        id: 4,
        text: "charts",
        sub: [
            {
                id: 1,
                text: "area chart",
                icon: <AiOutlineLineChart />,
                path: "/chart/area"
            },
            {
                id: 2,
                text: "bar chart",
                icon: <AiOutlineBarChart />,
                path: "/chart/bar"
            },
            {
                id: 3,
                text: "pie chart",
                icon: <AiOutlinePieChart />,
                path: "/chart/pie"
            },
            {
                id: 4,
                text: "geography chart",
                icon: <BsMap />,
                path: "/chart/geography"
            }
        ]
    },
]
export default links