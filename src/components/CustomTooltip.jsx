
import styled from "styled-components"

const TooltipContainer = styled.div`
    width: auto;
    max-width: 180px;
    height: auto;
    background-color: ${({ theme }) => theme.mainBgColor};
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    border-radius: var(--border-radius-sm);
    color: ${({ theme }) => theme.mainTextColor};
    font-size: 14px;

    .label{
        padding: 10px;
        border-bottom: 1px solid var(--white);
        font-weight: 500;
    }

    @media(max-width: 600px){
        font-size: 12px;

        .label{
            padding: 5px;
        }
    }
`

const TooltipItem = styled.div`
    color: ${({ color }) => color};
    font-weight: 500;
    padding: 10px;
`

const CustomTooltip = ({ active, payload, label, type }) => {
    if (active) {
        return (
            <TooltipContainer>
                <div className='label'>{label}</div>
                <TooltipItem color={payload[0].color}>{type === "revenue" ? "Revenue" : "Avg"}: {payload[0].payload.revenue || payload[0].payload.avg}</TooltipItem>
                <TooltipItem color={payload[1].color}>{type === "revenue" ? "Last Revenue" : "Dl"}: {payload[1].payload.lastRevenue || payload[1].payload.dl}</TooltipItem>
            </TooltipContainer>
        )
    }
    return null
}

export default CustomTooltip