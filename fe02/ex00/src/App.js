import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { userInfo } from 'os';

const App = () => {
    const getUsers = async() => {
      try {
        const response = await axios({
          method: "get",
          url: "https://cors.bridged.cc/https://api.notion.com/v1/users/",
          headers: {
            "Authorition": process.env.development.REACT_APP_NOTION_DATABASE_ID,
            "Notion-Version": "2021-08-16"
          }
      })
      console.log(response.url);
      } catch (e) {
        console.log('error');
        console.log(e);
      }
    }
    getUsers();
    return (
      <ul>
        {userInfo}
      </ul>
    )
}

export default App;