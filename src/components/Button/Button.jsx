import style from './Button.module.css';

const Button = ({ onClick }) => (
  <>
    <button type="button" onClick={onClick} className={style.Button}>
      Load More
    </button>
  </>
);

export default Button;
