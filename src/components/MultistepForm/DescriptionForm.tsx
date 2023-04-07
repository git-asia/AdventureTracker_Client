import { FormWrapper } from "./FormWrapper";

type DescriptionData = {
    kind: string
    tags: string
    description: string
}

type DescriptionFormProps = DescriptionData & {
    updateFields: (fields: Partial<DescriptionData>) => void
}

export function DescriptionForm({
                                kind,
                                tags,
                                description,
                                updateFields,
                            }: DescriptionFormProps) {
    return (
        <FormWrapper title="Opis wycieczki">
            <label>Rodzaj aktywności</label>
            <input
                autoFocus
                required
                type="text"
                value={kind}
                onChange={e => updateFields({ kind: e.target.value })}
            />
            <label>Tagi</label>
            <input
                type="text"
                value={tags}
                onChange={e => updateFields({ tags: e.target.value })}
            />
            <label>Opis</label>
            <input
                required
                type="text"
                value={description}
                onChange={e => updateFields({ description: e.target.value })}
            />
        </FormWrapper>
    )
}
