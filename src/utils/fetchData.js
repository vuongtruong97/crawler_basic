const fetch = require('node-fetch')

const fetchData = async (api) => {
    const res = await fetch(api,{
        "referrerPolicy": "strict-origin-when-cross-origin",
        })
    const data = await res.json()
    return data
}

module.exports = {fetchData}