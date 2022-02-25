import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import "./RadioButton.scss"

RadioButton.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

function RadioButton({id, value, label, onChange}) {
    const {sortBy} = useSelector(state => state.productStore)
    return (
        <>
            <input className="radio-button-input" type="radio" onChange={onChange} value={value} name="radio" id={id} checked={sortBy===value}/>
            <label className="radio-button-label" htmlFor={id}>{label}</label>
        </>
    );
}

export default RadioButton;
