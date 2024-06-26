import styles from './Head.module.css';


function Head({ save, clear_all, input_value, children }) {
    return (
        <div className={styles.head}>
            {children}
            <button onClick={() => save(input_value)}>save</button>
            <button onClick={clear_all}>clear all</button>
        </div>
    );
}

export default Head;