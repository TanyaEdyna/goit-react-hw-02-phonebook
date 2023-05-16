import PropTypes from 'prop-types';
import css from "./ContactListItem.module.css"


const ContactListItem = ({id, name, number, deleteContact}) => {
    return (
        <li className={css.contact_item}>
            <p className={css.contact_name}>{name}: {number}</p>
            <button className={css.contact_btn_delete} type="button" onClick={() => deleteContact(id)}>Dlt</button>
        </li>

    );
    
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;