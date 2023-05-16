import ContactListItem from "./ContactListItem/ContactListItem"
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contact_list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
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