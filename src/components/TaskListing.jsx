import ApiStore from "../store/Store";
import TaskCard from "./TaskCard";

const TaskListing = () => {
  const productList = ApiStore((state) => state.productList);
  return (
    <div>

      {productList.length === 0 && <p>No todos found</p>}

     <div className="grid grid-cols-2 gap-4">
      {/* right column completed */}
     <div>
      <p className="text-xl flex justify-center text-green-500 font-bold">Todos Completed</p>
       {productList.filter(product=>product.completed).map(product=>
      <TaskCard key={product.id} data={product} className="border-green-500"/>

      )}
     </div>
     {/* left column incomplete */}
    <div>
      <p className="text-xl flex justify-center text-red-500 font-bold">Todos Yet to Complete</p>

       {productList.filter(product=>!product.completed).map(product=>
      <TaskCard key={product.key} data={product} className="border-red-500"/>
     )}
    </div>
     </div>
    </div>
  );
};

export default TaskListing;
