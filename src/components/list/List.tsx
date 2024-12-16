import { List, Space } from "antd";
import { useGetTasksQuery } from "../../features/tasks/taskApi";
import { Task } from "../../features/tasks/taskTypes";
import { priorityOptions, statusOptions } from "../../constants";
import SelectComponent from "../select/Select";
import style from "./list.module.scss";

const   ListComponent: React.FC = () => {
  const { data } = useGetTasksQuery();

  return (
    <List
      dataSource={data}
      renderItem={({
        id,
        shortName,
        description,
        completed,
        priority,
      }: Task) => (
        <List.Item
          key={id}
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">delete</a>,
          ]}
        >
          <List.Item.Meta
            title={<span>{shortName}</span>}
            description={description}
          />
          <Space className={style.selectSection}>
            <SelectComponent
              options={priorityOptions}
              placeholder="Выберите приоритет"
              value={priority}
            />
            <SelectComponent
              options={statusOptions}
              placeholder="Выберите статус"
              value={completed}
            />
          </Space>
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
