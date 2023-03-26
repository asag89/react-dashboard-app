import { ResponsivePie } from '@nivo/pie'
import { useSelector } from 'react-redux'
const PieChart = ({ width, height, data }) => {

    const { theme } = useSelector((state) => state.layout)

    const arcLinkLabelsTextColor = theme === "light" ? "#333" : "#e6e8eb"
    return (
        <div style={{ width, height }}>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={arcLinkLabelsTextColor}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={"#111010"}

                legends={[
                    {

                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 80,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 10,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default PieChart
