
const getPage = async (num=1) => {
    try {

        let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${num}`)
        if (!response.ok) throw new Error('data collection failed')
        let data = (await response.json()).results
        return data
    } catch (err) {
        console.log(err)
    }
}

const getOne = async (id) => {
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        if (!response.ok) throw new Error('data collection failed')
        let data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

const getInfo = async () =>{
    try{
        let response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) throw new Error('data collection failed')
        let data = (await response.json()).info
        return data
    }catch(err){
        console.log(err)
    }
}

export default {
    getPage,
    getOne,
    getInfo
}