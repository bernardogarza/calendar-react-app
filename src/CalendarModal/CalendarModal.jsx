import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOne = now.clone().add(1, 'hours');

const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlusOne.toDate());
  const [formValues, setFormValues] = useState({
    title: 'Event',
    notes: '',
    start: now.toDate(),
    end: nowPlusOne.toDate(),
  });

  const { title, notes } = formValues;

  const closeModal = () => {};

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-background"
    >
      <h1> New Event </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Start date and time</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>End date and time</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={dateEnd}
            className="form-control"
            minDate={dateStart}
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Title and notes</label>
          <input
            type="text"
            className="form-control"
            placeholder="Event Title"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            A brief description
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Additional info...
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Save</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;
