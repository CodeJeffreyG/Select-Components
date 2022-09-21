type selectOptions = {
   label: string,
   value: string 
}

type SelectProps = {
    options:selectOptions[]
    value?: selectOptions | undefined
    onChange: (value: selectOptions | undefined) => void
}

export default function Select({value, onChange, options} : SelectProps)