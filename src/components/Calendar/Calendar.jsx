import moment from 'moment';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';

import Navbar from '../Navbar/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import { useEffect, useState } from 'react';
import CalendarModal from '../CalendarModal/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventCleanActive, eventSetActive, eventStartLoading } from '../../actions/events';
import Fab from '../Fab/Fab';
import DeleteFab from '../DeleteFab/DeleteFab';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { uid } = useSelector((state) => state.auth);

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

  const onSelectSlot = () => {
    dispatch(eventCleanActive());
  };

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '4px',
      opacity: 0.9,
      display: uid === event.user._id ? 'block' : 'none',
      color: 'white',
      textAlign: 'center',
    };
    return {
      style,
    };
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
        onSelectSlot={onSelectSlot}
        selectable
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
