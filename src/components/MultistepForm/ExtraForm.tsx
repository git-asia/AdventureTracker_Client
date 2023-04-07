import { FormWrapper } from "./FormWrapper"

type ExtraData = {
    url: string
    iframe: string
}

type ExtraFormProps = ExtraData & {
    updateFields: (fields: Partial<ExtraData>) => void
}

export function ExtraForm({
                                url,
                                iframe,
                                updateFields,
                            }: ExtraFormProps) {
    return (
        <FormWrapper title="Account Creation">
            <label>URL</label>
            <input
                autoFocus
                type="text"
                value={url}
                onChange={e => updateFields({ url: e.target.value })}
            />
            <label>iframe</label>
            <input
                type="text"
                value={iframe}
                onChange={e => updateFields({ iframe: e.target.value })}
            />
        </FormWrapper>
    )
}
