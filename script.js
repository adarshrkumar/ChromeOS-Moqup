var views = document.querySelectorAll('.views .view')

var iList = document.createElement('section')
iList.classList.add('items')

views.forEach(v => {
    var name = v.id
    name = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`

    var lItem = document.createElement('a')
    lItem.href = `#${v.id}`
    lItem.textContent = name

    iList.appendChild(lItem)

    lItem.addEventListener('click', itemClick)
})

document.querySelector('.computer').appendChild(iList)

function itemClick() {
    document.querySelector('#launchpad').checked = false
}