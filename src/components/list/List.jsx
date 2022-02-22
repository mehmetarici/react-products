import PropTypes from "prop-types";

import "./List.scss"

List.propTypes = {
    data: PropTypes.elementType.isRequired
}

function List({data}) {
    return (
        <ul className="custom-list">
            { data.map((d, index) => (
                <li key={ index }>
                    { d }
                </li>
            )) }
        </ul>);
}

export default List;
