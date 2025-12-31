import ApiStore from "../store/Store";
import TaskCard from "./TaskCard";

const TaskListing = () => {
  const productList = ApiStore((state) => state.productList);
  return (
    <div>
      <h1>Task List</h1>

      {productList.length === 0 && <p>No todos found</p>}

      {productList.map((product) => (
      <TaskCard key={product.id} data={product}/>
      ))}
    </div>
  );
};

export default TaskListing;
