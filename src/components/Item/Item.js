const Item = ({ name, onDelete }) => {
    return (
        <div data-testid="item">
            <h3 data-testid="task">{name}</h3>
            <button data-testid="button" onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Item;