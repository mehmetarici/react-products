import PropTypes from 'prop-types';
import "./RadioButton.scss"

RadioButton.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

function RadioButton({id, value, label}) {
    return (
        <>
            <input className="radio-button-input" type="radio" value={value} name="radio" id={id}/>
            <label className="radio-button-label" htmlFor={id}>{label}</label>
        </>
    );
}

export default RadioButton;
