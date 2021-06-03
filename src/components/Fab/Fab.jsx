import { useDispatch } from 'react-redux';
import { eventCleanActive } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';

const Fab = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(eventCleanActive());
    dispatch(uiOpenModal());
  };
  return (
    <button className="btn btn-primary fab" onClick={handleClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default Fab;
