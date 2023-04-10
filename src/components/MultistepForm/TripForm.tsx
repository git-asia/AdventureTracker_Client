import { FormWrapper } from "./FormWrapper";

type TripData = {
    coordinates: string
    title: string
    date: string
    duration: string
}

type TripFormProps = TripData & {
    updateFields: (fields: Partial<TripData>) => void
}

export function TripForm({
                             coordinates,
                             title,
                             date,
                             duration,
                             updateFields,
                         }: TripFormProps) {
    return (
        <FormWrapper title="Informacje o wycieczce">
            <label>Koordynaty</label>
            <input
                autoFocus
                required
                type="text"
                value={coordinates}
                onChange={e => updateFields({ coordinates: e.target.value })}
            />
            <label>Tytuł</label>
            <input
                required
                type="text"
                value={title}
                onChange={e => updateFields({ title: e.target.value })}
            />
            <label>Data</label>
            <input
                required
                type="date"
                value={date}
                onChange={e => updateFields({ date: e.target.value })}
            />
            <label>Czas trwania (dni)</label>
            <input
                required
                min={1}
                type="number"
                value={duration}
                onChange={e => updateFields({ duration: e.target.value })}
            />
        </FormWrapper>
    )
}
