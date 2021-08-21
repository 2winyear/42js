import { Client } from ('@notionhq/client'); 

const notion = new Client({ auth: process.env.NOTION_KEY })

const database_id = process.env.NOTION_DATABASE_ID

const getUsers = async() => {
    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST'
    }
    const {results} = await notion.request(payload)

    const users = results.map((page) => {
        console.log(page.properties.name.rich_text);
        return {
            id: page.id,
            userName: page.properties.name.rich_text[0].text.content,
            type: page.properties.Property.select.name,
            Email: page.properties.Email.email,
            Image: page.properties.profile.url
        }
    })
    return users;
}

export default getUsers;