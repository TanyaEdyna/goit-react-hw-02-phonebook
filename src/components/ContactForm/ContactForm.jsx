import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from "./ContactForm.module.css";

export class ContactForm extends Component {
    state = {
    contacts: [],
    contactName: '',
    number: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { contactName, number } = this.state;
        const { onSubmit } = this.props;
        onSubmit({ contactName, number });
        this.setState({ contactName: '', number: '' })
    };
    render() {
        const { contactName, number } = this.state;
        return (
        <section className={css.form_section}>
        
        <form className={css.form} onSubmit={this.handleSubmit}>
            <input
                className={css.input}
                type="text"
                name="name"
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={contactName}
                onChange={this.handleChange}  
                required
            
            />
            <input
                className={css.input}
                type="tel"
                name="number"
                placeholder="Phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={this.handleChange}
                required
            />
            <button className={css.form_button} type="submit">New Contact</button>
        </form>
        </section>
    )

    }
    
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

