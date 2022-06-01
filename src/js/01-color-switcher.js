const refs = {
    startColorSwitcherBtn: document.querySelector('button[data-start]'),
    stopColorSwitcherBtn: document.querySelector('button[data-stop]'),
}

refs.startColorSwitcherBtn.addEventListener('click', changeColor);
refs.stopColorSwitcherBtn.addEventListener('click', stopSwitcher);

// Styles

refs.startColorSwitcherBtn.style.backgroundColor = '#ebebeb';
refs.startColorSwitcherBtn.style.padding = '28px 44px';
refs.startColorSwitcherBtn.style.fontSize = '40px';
refs.stopColorSwitcherBtn.style.backgroundColor = '#ebebeb';
refs.stopColorSwitcherBtn.style.padding = '28px 44px';
refs.stopColorSwitcherBtn.style.fontSize = '40px';





let timerId = null;
let isActive = false;
function changeColor() {
    if (isActive) {
        return;
    }
    
    timerId = setInterval(() => {
        const color = '#' + Math.random().toString(16).slice(2, 8);
        document.body.style.backgroundColor = color;
    }, 1000);
    isActive = true;
    refs.startColorSwitcherBtn.style.opacity = '.5';
    refs.stopColorSwitcherBtn.style.opacity = '1';
}

function stopSwitcher() {
    isActive = false;
    refs.startColorSwitcherBtn.style.opacity = '1';
    refs.stopColorSwitcherBtn.style.opacity = '.5';
    return clearInterval(timerId);
}


