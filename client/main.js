console.log('IT`S WORK')

const render = async() =>{
    const root = document.querySelector('.counter')

    const inc = root.querySelector('.inc')
    const dec = root.querySelector('.dec')
    const num = root.querySelector('.num')

    const { data } = await axios.get('/num')
    num.innerHTML = data
    
    inc.addEventListener('click', () =>{
         axios.get('/inc')
    })

    dec.addEventListener('click', () =>{
         axios.get('/dec')
    })

    num.addEventListener('change', async() =>{
        await axios.get('/num')
        
    })
    console.log(data)
}

render()