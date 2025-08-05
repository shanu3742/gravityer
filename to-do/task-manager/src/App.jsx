import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import TodoApp from "./Page/TodoApp/TodoApp";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to={"/app/todo"} />} />
        <Route
          path="/app/todo"
          element={
            <>
              <TodoApp />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
