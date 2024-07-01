const submit = document.querySelector('#submit')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
// const tickBtn = document.querySelector('#tick')
// const deleteBtn = document.querySelector('#delete')


submit.addEventListener("click", () => {
    // console.log(input.value)
    const li = document.createElement("li")
    li.style.width = "500px"
    li.style.height = "35px"
    li.style.display = "flex"
    li.style.justifyContent = "space-between"
    li.style.alignItems = "center"
    li.style.cursor = "pointer"
    li.style.fontSize = "1.5rem"
    li.style.backgroundColor = "#e2e2e2"
    li.style.borderRadius = "5px"


    li.innerHTML = `
    <p>${input.value}</p>
    <div>
    <button id="tick"><i class="fa-regular fa-circle-check"></i></button>
     <button id="delete"><i class="fa-solid fa-trash"></i></button>
    </div>    
    `
    ul.appendChild(li)

    // Add event listener to the delete icon
    // const deleteIcon = li.querySelector('#delete')
    // deleteIcon.addEventListener('click', function () {
    //     li.remove()
    // })

    // const lineDash = p.querySelector('#tick')
    // lineDash.addEventListener('click', function () {
    //     p.style.textDecoration = 'line-through'
    // })

    // const deleteLi = li.querySelector('#delete')
    // deleteLi.addEventListener('click', function () {
    //     li.remove()
    // })

    // input.value = ''
    const tickBtn = li.querySelector('#tick')
    tickBtn.addEventListener('click', function () {
        tickBtn.parentElement.parentElement.style.textDecoration = "line-through"
        // console.log('btn chala')
    })
    const deleteBtn = li.querySelector('#delete')
    deleteBtn.addEventListener('click', function () {
        deleteBtn.parentElement.parentElement.remove()
        // console.log('btn chala')
    })
    input.value = ""
})






// function itemcompleted(list) {
//     if (list.nextElementSibbling.style.textDecoration == "line-through") {
//         list.nextElementSibbling.styl.textDecoration = "none"

//     } else {
//         list.nextElementSibbling.style.textDecoration = "line-through"
//     }

// }