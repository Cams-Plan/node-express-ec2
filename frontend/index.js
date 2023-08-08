const postButton = document.querySelector('#btn-post')
const form = document.querySelector('form')
const favGame = document.querySelector('#gameRecomm')

function handleData(e) {
    e.preventDefault()
    
    const data = new FormData(e.target)
    const recommObj = Object.fromEntries(data.entries())
    // let id = (Object.keys(recommObj).length)-1
    console.log(recommObj)
    postToServer(recommObj)

}

form.addEventListener('submit', handleData)

async function postToServer(formData){
    const data = JSON.stringify(formData)
    console.log(data)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    }
    console.log(data)
    await fetch('http://localhost:3001/games', options)
}
