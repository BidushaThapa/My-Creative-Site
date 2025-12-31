import ApiStore from "../store/Store";


const GetApi = async () => {
  const { setProductList, setLoading } = ApiStore.getState();

  try {
    setLoading(true);

    const response = await fetch("https://dummyjson.com/todos");
    
    const data = await response.json();

    setProductList(data.todos);
  } catch (error) {
    console.error("API Error:", error);
  } finally {
    setLoading(false);
  }
};

export default GetApi;
