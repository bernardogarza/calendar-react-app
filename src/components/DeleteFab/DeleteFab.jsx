import { useDispatch } from 'react-redux';
import { eventDelete } from '../../actions/events';

const DeleteFab = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(eventDelete());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleClick}>
      <i className="fas fa-trash"></i>
      <span> Remove event</span>
    </button>
  );
};

export default DeleteFab;
