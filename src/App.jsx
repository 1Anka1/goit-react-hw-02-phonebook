import React, { Component } from 'react'
//COMPONENTS
import Section from 'components/Section'
import ContactForm from 'components/ContactForm'

export default class App extends Component {
	state = {
		contacts: [],
		filter: '',
	}
	render() {
		return (
			<Section title={'Task - 2 Contact book'}>
				<h1>Phonebook</h1>
				<ContactForm />

				<h2>Contacts</h2>
				{/* <Filter/>
      <ContactList/> */}
			</Section>
		)
	}
}
