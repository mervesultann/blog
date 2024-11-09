import PropTypes from "prop-types";

import "./Button.css";

function Button(props) {
  const { color, addClass,  size, children , onClick} = props;

  return (
    <button className={`btn btn-${color} btn-${size} ${addClass}` } onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {

  size: PropTypes.string,
  addClass: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
