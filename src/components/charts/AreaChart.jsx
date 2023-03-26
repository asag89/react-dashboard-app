
import { useSelector } from 'react-redux';
import { AreaChart as AC, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../CustomTooltip';

const AreaChart = ({ data, color1 = "#8884d8", color2 = "#82ca9d", fontSize = "12px", dataKeys, mainDataKey }) => {

    const { theme } = useSelector((state) => state.layout)
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AC data={data}
                margin={{ top: 10, right: 15, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color1} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={color1} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color2} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={color2} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey={mainDataKey} fontSize={fontSize} />
                <YAxis fontSize={fontSize} tickFormatter={(number) => `$${number}`} />
                <CartesianGrid strokeDasharray="3 3" stroke={theme === "light" ? "#323131" : "#fff"} opacity={0.3} />
                <Tooltip content={<CustomTooltip type={"revenue"} />} />
                {dataKeys.map((item, i) => (
                    <Area key={i} type="monotone" dataKey={item.key} stroke={item.color} fillOpacity={1} fill={item.fill} />
                ))}
            </AC>
        </ResponsiveContainer>
    )
}





export default AreaChart