import moment from 'moment';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';

import Navbar from '../Navbar/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
  },
];

const Calendar = () => {
  return (
    <div>
      <Navbar />
      <BigCalendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
    </div>
  );
};

export default Calendar;
