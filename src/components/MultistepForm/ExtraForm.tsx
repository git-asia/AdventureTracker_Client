import { FormWrapper } from "./FormWrapper";
import {Select} from "@chakra-ui/react";
import './ExtraForm.scss';


type ExtraData = {
    url: string
    iframe: string
    kind: string
}

type ExtraFormProps = ExtraData & {
    updateFields: (fields: Partial<ExtraData>) => void
}

export function ExtraForm({
                                url,
                                iframe,
                                kind,
                                updateFields,
                            }: ExtraFormProps) {
    return (
        <FormWrapper title="Dodatkowe informacje">
            <label>URL</label>
            <input
                autoFocus
                required
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
            <label>Aktywność</label>
            <Select
                placeholder='Wybierz rodzaj aktywności'
                _placeholder={{ opacity: .5, color: 'gray' }}
                required
                value={kind}
                onChange={e => updateFields({ kind: e.target.value })}
            >
                <option value='Hiking'>Hiking</option>
                <option value='Wspinaczka'>Wspinaczka</option>
                <option value='Alpinizm'>Alpinizm</option>
                <option value='Via ferrata'>Via ferrata</option>
                <option value='Rower'>Rower</option>
                <option value='Kajak'>Kajak</option>
                <option value='Jacht'>Jacht</option>
            </Select>

        </FormWrapper>
    )
}
