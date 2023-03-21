import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ onClick }) => (
  <>
    <button type="button" onClick={onClick} className={style.button}>
      Load More
    </button>
  </>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func
};