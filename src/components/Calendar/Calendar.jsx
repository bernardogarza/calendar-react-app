import moment from 'moment';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';

import Navbar from '../Navbar/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import { useState } from 'react';
import CalendarModal from '../CalendarModal/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import Fab from '../Fab/Fab';
import DeleteFab from '../DeleteFab/DeleteFab';

const localizer = momentLocalizer(moment);

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
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const onDoubleClick = () => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
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
      {activeEvent && <DeleteFab />}
      <CalendarModal />
    </div>
  );
};

export default Calendar;
