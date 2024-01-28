import { useState, useEffect } from "react";
import Forms from "./Forms";
import "./App.css";
import List from "./List";

function App() {
  const [request, setRequest] = useState("users");
  const [data, setData] = useState([]);

  const URL = "https://fakestoreapi.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/${request}`);
        if (!response.ok) throw new Error("Failed to fetch users");
        const reqData = await response.json();
        console.log(reqData);
        setData(reqData);
      } catch (err) {
        setData([err.message]);
      }
    };
    fetchData();
  }, [request]);

  return (
    <>
      <main>
        <Forms request={request} setRequest={setRequest} />
        <div className="tableDiv">
          <List data={data} />
        </div>
      </main>
    </>
  );
}

export default App;
