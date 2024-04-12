import { useEffect, useRef, useState } from 'react';

import Head from './Head/Head';
import Body from './Body/Body';
import Item from './Item/Item';

import styles from './Todo.module.css';
import Bottom from './Bottom/Bottom';


function Todo() {
    const [DATA, setDATA] = useState(new Map([
        [12, 'GABRIEL'],
        [32, 'LUIZ'],
        [1, 'KILDER']
    ]));

    // INPUT
    const [input_value, setInput_value] = useState('');

    // PRE
    const pre_ref = useRef(null);

    useEffect(() => {
        pre_ref.current.innerHTML = [...DATA].reduce((a, b) => {
            return `${a + b} </br>`;
        }, `[DATA LIST - Array] </br></br>`);

        setInput_value('');
    }, [DATA]);

    const data_ids = [...DATA.keys()];


    function save(value) {
        if (value.trimEnd()) {
            setDATA(map => new Map([
                ...map,
                [Math.random(), value]
            ]));
        }
    }

    function edit({ id, input_value: value }) {
        const new_map = DATA;

        DATA.delete(id, value);

        setDATA(map => new Map([
            ...new_map,
            [id, value],
        ]));
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
            <Head {...{ save, clear_all, input_value }}>
                <input type="text" 
                    placeholder="Enter a text here..." 

                    onChange={({ target }) => setInput_value(target.value)} 
                    onKeyUp={input_save}

                    value={input_value} 
                />
            </Head>
            <Body>
                {data_ids.map(id => {
                    return (
                        <Item key={id} {...{ id, remove, save, value: DATA.get(id), edit }} />
                    );
                })}
            </Body>
            <Bottom>
                <pre ref={pre_ref}>
                    
                </pre>
            </Bottom>
        </div>
    );
}

export default Todo;