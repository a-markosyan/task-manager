import ListComponent from "./components/list/List";
import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <h1>Менеджер задач</h1>
      <ListComponent />
    </div>
  );
};

export default App;
