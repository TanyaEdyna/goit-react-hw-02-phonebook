import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

const ContactList = ({ contacts, filter, deleteContact }) => {
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    return (
        <ul className={css.contact_list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li className={css.contact_item} key={id}>
                    <p className={css.contact_name}>{name}: {number}</p>
                    <button className={css.contact_btn_delete} type="button" onClick={() => deleteContact(id)}>Del</button>
                </li>
            )  
            )}
        </ul>
    );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;