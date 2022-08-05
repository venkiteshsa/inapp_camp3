const ans = document.getElementById('ans');
var newExp = true;

function buttonPress(event) {
    const inp = event.target.innerText;
    if(inp == 'C:') {
        ans.value = '';
    } else if (inp == '=') {
        ans.value = eval(ans.value)
        newExp = true
    } else {
        if(newExp) {
            ans.value = event.target.innerText
            newExp = false
        } else {
            ans.value += event.target.innerText
        }
    }
}

buttonList = Array.prototype.slice.call(document.getElementsByTagName('button'))
buttonList.forEach(btn => {
    btn.addEventListener('click', buttonPress)
});