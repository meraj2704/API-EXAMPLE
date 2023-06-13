const getQutes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQutes(data))
}

const displayQutes = qutes =>{
    const block = document.getElementById('block');
    block.innerText = qutes.quote;
}