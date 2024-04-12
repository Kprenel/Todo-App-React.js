import { useEffect, useState } from 'react';

import Head from './Head/Head';
import Body from './Body/Body';
import Item from './Item/Item';

import styles from './Todo.module.css';


function Todo() {
    const [DATA, setDATA] = useState(new Map([
        [12, 'GABRIEL'],
        [32, 'LUIZ'],
        [1, 'KILDER']
    ]));

    // INPUT
    const [input_value, setInput_value] = useState('');


    const data_ids = [...DATA.keys()];
    

    function save() {
        if (input_value.trimEnd()) {
            setDATA(map => new Map([
                ...map,
                [Math.random(), input_value]
            ]));

            setInput_value('');
        }
    }

    function input_save({ target: input, keyCode }) {
        if (keyCode === 13) {
            save(input.value);
        }
    }

    function remove(ids) {
        const new_map = DATA;

        [ids]
            .flat()
            .forEach(id => {
                new_map.delete(id);
            }); 

        setDATA(new Map([...new_map]));
    }

    function clear_all() {
        setDATA(new Map());
    }

    return (
        <div className={styles.todo}>
            <Head {...{ save, clear_all }}>
                <input type="text" placeholder="Enter a text here..." 
                    onChange={({ target }) => setInput_value(target.value)} 
                    onKeyUp={input_save}
                    value={input_value} 
                />
            </Head>
            <Body>
                {data_ids.map((id, index) => {
                    return (
                        <Item key={id} {...{ id, remove }}>
                            {DATA.get(id)}
                        </Item>
                    );
                })}
            </Body>
        </div>
    );
}

export default Todo;