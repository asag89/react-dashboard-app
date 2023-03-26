import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    
    .prc{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        color: ${({ theme }) => theme.mainTextColor};
        .country{
            font-size: 14px;
            font-weight: 500;
        }
        .value{
            font-size: 14px;
            font-weight: 500;
        }
    }

    .bar{
        width: 100%;
        height: 8px;
        border-radius: var(--border-radius-md);
        background-color: var(--gray-1);

        .progress{
            background: linear-gradient(90deg, rgba(0,255,209,1) 0%, rgba(48,51,102,1) 40%, rgba(118,9,121,1) 63%, rgba(226,3,27,1) 100%);
            height: 100%;
            border-radius: var(--border-radius-md);
        }
    }
`

const HorizontalProgressBar = ({ value, country }) => {
    return (
        <Container>
            <div className="prc">
                <div className="country">{country}</div>
                <span className="value">{value}%</span>
            </div>
            <div className="bar" >
                <div className="progress" style={{ width: `${value}%` }}></div>
            </div>
        </Container>
    )
}

export default HorizontalProgressBar