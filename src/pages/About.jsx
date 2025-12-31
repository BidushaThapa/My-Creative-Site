import { useEffect, useState } from "react"

const About = () => {
  const [data,setData]=useState([])
  useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => setData(data.products));
}, []);

  return (
   <div>
    {data?.map((product)=>(
      <div key={product.id}> 
  <p>
        {product.title}
  </p>
      </div>
    ))}
   </div>
  )
}

export default About