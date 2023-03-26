
import { useState } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import styled from "styled-components"
import Events from "../components/calendar/Events";

const Container = styled.div`
    width: 100%;

    .wrapper{
        width: calc(100% - 20px);
        margin: 10px;
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        border-radius: var(--border-radius-md);

        .calendar-container{
            width: calc(85% - 20px);
            margin-left: 20px;
  
            .fc-toolbar-chunk:first-child .fc-button-group .fc-button{
                width: 37px;
                height: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${({ theme }) => theme.calendarBtnBgColor};

                .fc-icon{
                    font-size: 18px;
                }
            }

            .fc-toolbar-chunk:last-child .fc-button-group .fc-button{
                padding: 0 10px;
                height: 32px;
                font-size: 12px;
                background-color: ${({ theme }) => theme.calendarBtnBgColor};
            }

            .fc-today-button{
                text-align: center;
                padding: 0 10px;
                background-color: ${({ theme }) => theme.calendarBtnBgColor};
                height: 32px;
                font-size: 12px;
            }

            .fc-toolbar-title{
                font-size: 1.1rem;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme.mainTextColor};
            }

            .fc-view-harness{

                table{
                    border-color: ${({ theme }) => theme.calendarBorderColor};
                }

                table thead{
                     background-color: ${({ theme }) => theme.calendarBtnBgColor};
                     color: var(--white);
                }

                table tbody{
                    background-color: ${({ theme }) => theme.mainBgColor};

                    .fc-day{
                        border-color: ${({ theme }) => theme.calendarBorderColor};
                    }

                    .fc-daygrid-day-frame{
                        color: ${({ theme }) => theme.mainTextColor};
                    }

                    .fc-daygrid-event-harness *{
                        background-color: var(--purple-1);
                    
                    }
                    .fc-event{
                        text-align: center;
                        color: ${({ theme }) => theme.mainTextColor};
                        pointer-events: none;
                    }

                }
                .fc-timegrid-axis-cushion,.fc-timegrid-slot-label-cushion{
                    color: ${({ theme }) => theme.mainTextColor};

                }
                .fc-list-day-cushion{
                    background-color: ${({ theme }) => theme.calendarBtnBgColor};
                    color: var(--white);
                    font-size: 14px;
                }
            }
            
        }
    }

    @media(max-width: 990px){
        .wrapper{
            flex-direction: column;
        }
        .calendar-container{
            width: 100% !important;
            margin-left: 0 !important;
        }
}
`
const Calendar = () => {
    const [events, setEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title} `,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event? ${selected.event.title} `)) {
            selected.event.remove()
        }
    }

    return (
        <Container>
            <div className="wrapper">
                <Events events={events} />
                <div className="calendar-container">
                    <FullCalendar
                        height="auto"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventBackgroundColor="rebeccapurple"
                        eventsSet={(events) => setEvents(events)}
                        initialEvents={[
                            { id: "1234", title: "event 1", date: "2023-03-24" },
                            { id: "5678", title: "event 2", date: "2023-03-27" }
                        ]}
                    >
                    </FullCalendar>
                </div>
            </div>
        </Container>
    )
}

export default Calendar