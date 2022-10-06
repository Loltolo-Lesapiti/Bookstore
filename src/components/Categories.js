import { useDispatch } from 'react-redux';
import categoryActionReducer from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="checkStatus"
      onClick={() => {
        dispatch(categoryActionReducer());
      }}
    >
      Check status
    </button>
  );
};
export default Categories;
