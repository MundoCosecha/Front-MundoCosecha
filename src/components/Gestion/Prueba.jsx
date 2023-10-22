
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventItem } from "./EventoPersonalizado";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../../Style/Calendar.css'

export const MyCalendar = () => {
    const [events, setEvents] = useState([]);


    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Tarea nueva");
        if (eventNamePrompt) {
            setEvents((prevEvents) => [
                ...prevEvents,
                {
                    start,
                    end,
                    title: eventNamePrompt,
                    id: uuidv4(),
                },
            ]);
        }
    };





    return (
        <div className="divCalen">
            <div className="Calendar">
                <FullCalendar
                    editable
                    selectable
                    events={events}
                    select={handleSelect}
                    headerToolbar={{
                        start: "today prev next",
                        center: "title",
                        end: "dayGridMonth dayGridWeek dayGridDay",
                    }}
                    eventContent={(info) => <EventItem info={info} />}
                    plugins={[daygridPlugin, interactionPlugin]}
                    views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                />
            </div>
        </div>
    );
};
