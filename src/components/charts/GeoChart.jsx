
import { ResponsiveChoropleth } from "@nivo/geo"
import geoData from "../../data/geoData"

const GeoChart = ({ isDashboard = true, data, width, height, scale }) => {
    return (
        <div style={{ width, height }}>
            <ResponsiveChoropleth
                data={data}
                background={"#000"}
                features={geoData.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="blues"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                // projectionScale={isDashboard ? 40 : 150}
                projectionTranslation={[0.5, 0.65]}
                projectionRotation={[0, 0, 0]}
                projectionScale={scale}
                borderWidth={0.5}
                borderColor="#152538"
            />
        </div>
    )
}

export default GeoChart