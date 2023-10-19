import { Calendar } from 'react-calendar'
import '../Style/Calendar.css'
import { Navbar } from "../components/Navbar"

export const Gestion = () => {
    return (
        <>
            <Navbar />
            <div className="calendar">
                <div className="divCalen">
                    <Calendar />
                </div>
            </div>
        </>
    )
}
