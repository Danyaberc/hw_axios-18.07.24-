console.log('IT`S WORK')

const render = async () => {
    const root = document.querySelector('.counter')

    const inc = root.querySelector('.inc')
    const dec = root.querySelector('.dec')
    const num = root.querySelector('.num')

    const { data } = await axios.get('/num')

    axios.get('/num').then((res) => {
        num.innerHTML = res.data
    })

    inc.addEventListener('click', () => {
        num.innerHTML = 'loading'

        axios.get('/inc').then((res) => {
            console.log(res.data)
            num.innerHTML = res.data

        })
    })

    dec.addEventListener('click', () => {
        num.innerHTML = 'loading'
        //then.catch.finally.spinner

        axios.get('/dec').then((res) => {
            console.log(res.data)
            num.innerHTML = res.data
        })
    })


    console.log(data)
}

render()