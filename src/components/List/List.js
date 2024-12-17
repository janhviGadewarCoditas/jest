import Item from "../Item/Item"
const List = ({ data, onDelete }) => {
    console.log("data from List", data);
    
    return (
        <div data-testid="list">
            {data.map((d) => {
                return (
                    <Item key={d.keyId} name={d.text} onDelete={() => onDelete(d.keyId)} />
                )
            })}
        </div>
    )
}

export default List;