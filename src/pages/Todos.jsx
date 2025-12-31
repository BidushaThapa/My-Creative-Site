import { useEffect } from "react";
import GetApi from "../assets/Api";
import ApiStore from "../store/Store";
import TaskListing from "../components/TaskListing";

const Todos = () => {
     const loading = ApiStore((state) => state.loading);
  useEffect(() => {
    GetApi();
  }, []);
  return (
    <div>
      <h1>Todos</h1>
       {loading ? <p>Loading...</p> : <TaskListing />}
    </div>
  );
};

export default Todos;
