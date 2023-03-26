import { useSelector } from 'react-redux';
import { BarChart as BC, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';
import CustomTooltip from '../CustomTooltip';



const BarChart = ({ data, width, height, fontSize = "12px" }) => {
    const { theme } = useSelector((state) => state.layout)
    return (
        <div style={{ width, height }}>
            <ResponsiveContainer width="100%" height="100%">
                <BC width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === "light" ? "#323131" : "#fff"} opacity={0.3} />
                    <XAxis dataKey="month" fontSize={fontSize} color={"#da2e2e"} fill={"#da2e2e"} />
                    <YAxis fontSize={fontSize} />
                    <Tooltip content={<CustomTooltip type={"user"} />} />
                    <Legend />
                    <Bar dataKey="avg" fill="#110b7b" />
                    <Bar dataKey="dl" fill="#8c98bc" />
                </BC>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChart