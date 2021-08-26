import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      const url = `https://cors.bridged.cc/https://api.notion.com/v1/page/page_id`;
      try {
        setData(null);
        console.log("요청!");
        const response = await axios.get(url, {
          headers: {
            "Notion-Version": "2021-08-16",
            "Authorization": `Bearer ${process.env.REACT_APP_NOTION_KEY}`,
          }
        });
        // setData(response.data.results);
        console.log(response);
      } catch (error) {
        setError(error);
        console.log("으악");
      }
    }
    getApi();
  }, []);

  return (
    <div>
      {/* {error ? error : (data ? data.map((data) => (
          <ul>
            <li key={data.id}>{data.name}</li>
            <li key={`${data.id} + 1`}>{data.person? data.person.email : 'no E-mail'}</li>
            <li key={`${data.id} + 2`}>{data.type}</li>
            <img src={data.avatur_id} alt={data.name}>{data.avatur_id}</img>
          </ul>
        )) : 'No')} */}
    </div>
  )
}
export default App;