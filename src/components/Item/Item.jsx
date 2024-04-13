import { useState } from 'react';

import ItemValue from './ItemValue';
import { FaPen, FaSave, FaTrash } from 'react-icons/fa';

import styles from './Item.module.css';


function Item({ id, edit, remove, value }) {
    const [input_value, set_input_value] = useState(value);
    const [edit_mode, setEdit_mode] = useState(false);

    // SAVE
    function save_edit() {
        edit({ id, input_value });
        setEdit_mode(!edit_mode);
    }

    return (
        <li className={styles.item}>
            <ItemValue {...{ value, edit_mode, input_value, set_input_value }} />

            {
                edit_mode 
                ? 
                <button onClick={save_edit}>
                    <FaSave />
                </button> 
                : 
                <button onClick={() => setEdit_mode(!edit_mode)}>
                    <FaPen />
                </button>
            }

            {!edit_mode && <button onClick={() => remove(id)}>
                <FaTrash />
            </button>}
        </li>
    );
}

export default Item;