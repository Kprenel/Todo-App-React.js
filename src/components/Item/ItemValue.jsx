function ItemValue({ edit_mode, input_value, set_input_value }) {
    return <input type="text" 
        value={input_value} 
        readOnly={!edit_mode}
        onChange={({ target }) => (set_input_value(target.value))} />
}

export default ItemValue;