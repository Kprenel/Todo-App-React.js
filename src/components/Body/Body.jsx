import styles from './Body.module.css';

function Body({ children }) {
    return (
        <div className={styles.body}>
            <ul>
                {children}
            </ul>
        </div>
    );
}

export default Body;