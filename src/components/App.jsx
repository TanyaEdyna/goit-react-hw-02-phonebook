import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import toContacts from "../components/contacts.json"
import css from "./App.module.css";
import { nanoid } from "nanoid";

export class App extends Component { 
  state = {
    contacts: toContacts,
    filter: "",
  };

  handleFormSubmit = ({ contactName, number }) => {
    const newContact = { contactName, number, id: nanoid() };
    const { contacts } = this.state;

    if (contacts.some((contact) => contactName === contact.contactName)) {
      alert(`${contactName} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div className={css.form_block}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleFormSubmit}
          contacts={contacts} />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onChange={this.handleChangeFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact} />
      </div>
    );
  }
}
