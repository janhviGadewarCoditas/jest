import { useState } from "react";
import List from "../../components/List/List"
const Dashboard = () => {

    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [id, setId] = useState();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        const newTodo = { keyId: Date.now(), text: inputValue };
        setTodoList([...todoList, newTodo]);
        setInputValue("")
    }

    console.log("todoList", todoList);
    
const handleDelete = (keyId) => {
    setTodoList(todoList.filter((todo) => todo.keyId !== keyId))
}
    return (
        <div data-testid="dashboard">
            fyfguggg
            <form data-testid="form" onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Type your task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}></input>
                <button data-testid="button" type="submit">Add</button>
            </form>
            <List data={todoList} onDelete={handleDelete}/>
        </div>
    )
}
export default Dashboard;