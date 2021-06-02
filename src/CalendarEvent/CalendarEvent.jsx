const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  return (
    <div>
      <b>{title}</b>
      <span> - {user.name}</span>
    </div>
  );
};

export default CalendarEvent;
