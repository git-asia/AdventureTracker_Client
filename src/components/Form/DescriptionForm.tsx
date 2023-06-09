import React from 'react';
import { FormWrapper } from './FormWrapper/FormWrapper';


type DescriptionData = {

    tags: string
    description: string
}

type DescriptionFormProps = DescriptionData & {
    updateFields: (fields: Partial<DescriptionData>) => void
}

export function DescriptionForm({

	tags,
	description,
	updateFields,
}: DescriptionFormProps) {
	return (
		<FormWrapper title="Opis wycieczki">

			<label>Tagi</label>
			<input
				type="text"
				value={tags}
				onChange={e => updateFields({ tags: e.target.value })}
			/>

			<label>Opis *</label>
			<input
				required
				type="text"
				value={description}
				onChange={e => updateFields({ description: e.target.value })}
			/>
		</FormWrapper>
	);
}
