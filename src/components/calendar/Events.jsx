import { formatDate } from "@fullcalendar/core"
import styled from "styled-components"

const Container = styled.div`
    width: 20%;
    height: max-content;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-color: ${({ theme }) => theme.mainBorderColor};
    padding: 10px;

    .top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${({ theme }) => theme.mainTextColor};

        h2{
            font-size: 14px;
            font-weight: 500;
            padding-bottom: 5px;
        }
        div{
            font-size: 14px;
            font-weight: 500;
        }
    }
   
    .events{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        .event-item{
            width: 100%;
            height: auto;
            background-color: var(--purple-1);
            color: var(--white);
            margin-bottom: 10px;
            border-radius: var(--border-radius-xsm);
            display: flex;
            flex-direction: column;
            padding: 10px;
            font-size: 12px;

            .event-text{
                padding-bottom: 5px;
                &::first-letter{
                    text-transform: uppercase;
                }
            }
        }
    }

    @media(max-width: 990px){
        width: 100%;
        margin-bottom: 20px;
    }
`

const Events = ({ events }) => {
    return (
        <Container className="box">
            <div className="top">
                <h2>Events</h2>
                <div>{events.length}</div>
            </div>
            <div className="events">
                {events.map((event) => (
                    <div key={event.id} className="event-item">
                        <div className="event-text">{event.title}</div>
                        <div className="event-date">{formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })}</div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Events