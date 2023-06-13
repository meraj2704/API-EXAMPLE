const getRandomUser = ()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayRandomUserData(data.results))
    
}
const displayRandomUserData = datas =>{
    const userContainer = document.getElementById('user-container');
    for(da of datas)
    {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h1>Name : ${da.name.first}</h1>
        <p>Gender : ${da.gender}</p>
        `
        userContainer.appendChild(userDiv);
    }
}