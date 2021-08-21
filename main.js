import { usersList } from "@notionhq/client/build/src/api-endpoints"

const userEl = document.querySelector('#users')
const loadingEl = document.querySelector('#loading')
let loading =false

const getUsersFromBackend = async () => {
    loading = true
    const res = await fetch('http://localhost:3000/users')
    const data = await res.json()
    loading = false
    return data
}

const addUsersToDom = async() => {
    const users = await getUsersFromBackend()
    console.log(videas);

    if(!loading){
        console.log('err');
    }

    // userszList.forEach(user => {
    //     const div = document.createElement('div')
    //     div.className = 'user'
    //     div.innerHTML = `
    //     <h3>${user.id}</h3>
    //     <ul>
    //     <li>${user.data}</li>
    //     <li>${user.description}</li>
    //     <li>${user.data}</li>
    //     </ul>
    //     `
    }
}

addUsersToDom()