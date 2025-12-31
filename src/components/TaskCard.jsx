import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const TaskCard = ({ data ,className = "" }) => {
  const hoverStyle=data.completed? "hover:bg-green-400":"hover:bg-red-400"
  return (
  <div className={` relative text-white border-2 rounded-2xl border-amber-700 gap-2 m-2 p-2 text-center  ${hoverStyle} ${className}
  `}>
    {data.completed &&

    <div className="cursor-pointer  hover:text-green-500   hover:bg-white absolute right-1 top-1  border-2 w-5 h-5 rounded-full flex items-center justify-start  ">
     < TiTick/>
    </div>
}
   {!data.completed &&

    <div className="cursor-pointer hover:text-red-500   hover:bg-white absolute right-1 top-1 border-2 w-5 h-5 p-[0.1rem] rounded-full flex items-center justify-start  ">
<RxCross1  />

    </div>
}
    <div>
      <p>ID: {data.id}</p>
    <h1>Todo: {data.todo}</h1>
    <p>Status: {data.completed ? "True" : "False"}</p>
    <p>UserId: {data.userId}</p>
    </div>
  </div>
  );
};

export default TaskCard;
