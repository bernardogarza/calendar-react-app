import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

const Fab = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiOpenModal());
  };
  return (
    <button className="btn btn-primary fab" onClick={handleClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default Fab;
