import moment from 'moment';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';

import Navbar from '../Navbar/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import { useState } from 'react';
import CalendarModal from '../CalendarModal/CalendarModal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import Fab from '../Fab/Fab';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Birthday',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    user: {
      _id: '123',
      name: 'Fernando',
    },
  },
];

const eventStyleGetter = () => {
  const style = {
    backgroundColor: '#367CF7',
    borderRadius: '0px',
    opacity: 0.9,
    display: 'block',
    color: 'white',
  };
  return {
    style,
  };
};

const Calendar = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const dispatch = useDispatch();

  const onDoubleClick = () => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
    dispatch(uiOpenModal());
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        components={{ event: CalendarEvent }}
        onView={onViewChange}
        view={lastView}
        onSelectEvent={onSelectEvent}
      />
      <Fab />
      <CalendarModal />
    </div>
  );
};

export default Calendar;
