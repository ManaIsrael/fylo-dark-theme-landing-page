/** to return error message if given email is not correct */
function validemail(userinput) {
    var mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (userinput.value.match(mailformat)) {
        var a = document.getElementById('err')
        a.style.visibility = 'hidden'
        document.querySelector('input').focus()
        return true
    }
    else {
        var b = document.getElementById('err')
        b.style.visibility = 'visible'
        return false
    }
}

/** image needs to change to mobile's image */
if(window.innerWidth < 376) {
    var img = document.getElementById('intro')
    img.setAttribute('src', './images/bg-curvy-mobile.svg')
}