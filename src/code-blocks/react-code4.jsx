function App(){
    return(
        <div id="App">
            <h1>My To-do app</h1>

            <h2>Pending tasks</h2>
            <div id="todo-list">
                <ul>
                    {toDoItems.map((item) => <li>
                            <a href={"/task/" + item.id}>Buy groceries</a>
                            <div>Added: {item.added}</div>
                            <div>Deadline: {item.deadline}</div>
                        </li>
                    )}
                    
                </ul>
            </div>
        </div>
    )
}