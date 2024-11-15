/* eslint-disable react/prop-types */



const Todos = ({ todos }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button id="mark_btn">
              {todo.completed ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
