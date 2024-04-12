function Item({ children, id, remove }) {
    return (
        <li>
            {children}

            <button>edit</button>
            <button onClick={() => remove(id)}>remove</button>
        </li>
    );
}

export default Item;