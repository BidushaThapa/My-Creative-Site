
const TaskCard = (props) => {
      const {data} = props;

  return (
    <div>
      <div className="grid grid-cols-3 ">
          <div className=' flex flex-col justify-center text-center  text-white border-2 border-amber-700  gap-2 m-2 '>
            <p>{data.id}</p>
             <h1>{data.todo}</h1>
            <p>{data.completed?"True":"False"}</p>
            {/* <p>{data.userId}</p> */}
        </div>
      </div>
    </div>
  )
}

export default TaskCard