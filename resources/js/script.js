function changeTheme(ele) {
    if(ele.value == 1) {
        document.body.classList.remove('dark-theme')
    } else {
        document.body.classList.add('dark-theme')
    }
}