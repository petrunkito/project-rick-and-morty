const urlApi = `http://localhost:3000/api/favorites/`
const getAll = async () => {
    try {

        let response = await fetch(urlApi)
        if (!response.ok) throw new Error('data collection failed')
        let data = (await response.json()).result
        return data
    } catch (err) {
        console.log(err)
    }
}

const getOne = async (id) => {
    try {
        let response = await fetch(urlApi + id)
        if (!response.ok) throw new Error('data collection failed')
        let data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

const create = async (body) => {
    try {
        let response = await fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if (!response.ok) throw new Error('data collection failed')
        let data = await response.json()
        console.log("data: ", data)
        return data
    } catch (err) {
        console.log(err)
    }
}

const deleteOne = async (id) => {
    try{
        let response = await fetch(urlApi+id, {
            method:"DELETE"
        })
        if (!response.ok) throw new Error('data collection failed')
        let data = await response.json()
        console.log("data: ", data)
    }catch(err){
        console.log(err)
    }
}

export default {
    getAll,
    getOne,
    create,
    deleteOne
}