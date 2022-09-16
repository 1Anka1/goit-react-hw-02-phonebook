import React from 'react'
import css from './ContactList.module.css'
export default function ContactList({ items, removeContact }) {
	console.log(items)
	const elem = items.map(({ name, number, id }) => {
		return (
      <li className={css.contactListItem } key={id}>
        {name} : {number} <button className={ css.remoteBtn} onClick={() => removeContact(id)}>x</button>
			</li>
		)
	})

	return (
		<div>
			<p>Find contact by name:</p>
			<ol>{elem}</ol>
		</div>
	)
}
