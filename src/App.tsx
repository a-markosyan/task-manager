import "./App.css";
import { useGetTasksQuery } from "./features/tasks/taskApi";

function App() {
  const { data: tasks } = useGetTasksQuery();

  return <div>aaaa</div>;
}

export default App;
