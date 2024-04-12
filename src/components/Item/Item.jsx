import { useEffect, useState } from 'react';

import ItemValue from './ItemValue';

import styles from './Item.module.css';


function Item({ id, edit, remove, value }) {
    const [input_value, set_input_value] = useState(value);
    const [edit_mode, setEdit_mode] = useState(false);

    // SAVE
    function save_edit() {
        edit({ id, input_value });

        // setEdit_mode(!edit_mode);
    }

    return (
        <li className={styles.item}>
            <ItemValue {...{ value, edit_mode, input_value, set_input_value }} />

            {edit_mode ? <button onClick={save_edit}>save</button> : <button onClick={() => setEdit_mode(!edit_mode)}>edit</button>}
            <button onClick={() => remove(id)}>remove</button>
        </li>
    );
}

export default Item;