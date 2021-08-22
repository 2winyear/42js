import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
	const [data, setData] = useState(null);
  const [error, setError] = useState(null);

	useEffect(() => {
		const getApi = async () => {
			const url = `https://cors.bridged.cc/https://api.notion.com/users/:id`;
			try {
        setError(null);
        setData(null);
        console.log("요청!")
				const response = await axios.get(url, {
					headers: {
						"Notion-Version": "2021-08-16",
						"Authorization": `Bearer ${process.env.REACT_APP_NOTION_KEY}`,
					}
				});
        setData(response);
        console.log(response.data);
        // console.log(response());
        // console.log(response.name);
			} catch (error) {
        // console.log(error);
        setError(error);
        console.log('으악');
			}
		}
		getApi();
	}, []);

	return (
		<div>
      hi
    </div>
	)
}
export default App;