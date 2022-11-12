import React, { useRef } from 'react'

interface todoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<todoFormProps> = props => {
    // const [title, setTitle] = useState('')
    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
        <>
            <div className='input-field mt2'>
                <input
                    ref={ref}
                    // onChange={changeHandler}
                    type="text"
                    placeholder='Введіть справу'
                    id="title"
                    onKeyPress={keyPressHandler}
                />
                <label
                    htmlFor="title"
                    className='active'>
                    Введіть справу та натисніть Enter
                </label>
            </div>
        </>
    )
}