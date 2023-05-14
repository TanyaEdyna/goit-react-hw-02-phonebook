import PropTypes from 'prop-types';
import css from "./Filter.module.css";

const Filter = ({filter, onChange}) => {
    return (
        <label className={css.label_filter}>
            <span className={css.label_name}>Find contacts by name:</span>
            <input
                className={css.filter_input}
                type="text"
                name="filter"
                value={filter}
                onChange={onChange} //вказує на подію
            />
        </label>
        ) 
        
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,

}
export default Filter;