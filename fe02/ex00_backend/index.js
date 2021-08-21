import { Client } from "@notionhq/client"
import express from 'express'

const PORT = process.env.PORT || 3000
const app = express()

const notion = new Client({ auth: process.env.NOTION_KEY })

const database_id = process.env.NOTION_DATABASE_ID

const getUsers = async() => {
    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST'
    }

    const {results} = await notion.request(payload)

    const users = results.map((page) => {
        return {
            id: page.id,
            userName: page.properties.name.rich_text[0].text.content,
            type: page.properties.Property.select.name,
            Email: page.properties.Email.email,
            Image: page.properties.profile.url
        }
    })
    return users
}

// (async () => {
//     const nUsers = await getUsers();
//     console.log(nUsers);
// })()

app.use(express.static('public'))
app.get('/users', async (req, res) => {
    const users = await getUsers()
    res.json(users)
})

app.listen(PORT, console.log(`Server ${PORT}`))