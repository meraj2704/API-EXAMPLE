const getSearchValue = () =>{
    const serachField = document.getElementById('search-field');
    const dish = serachField.value;
    getMeal(dish);
    serachField.value = '';
}
const getMeal = dish =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`
    fetch(url)
    .then(res => res.json())
    .then(data => showMeal(data.meals))
}
const showMeal = meal =>{
    const mealShow = document.getElementById('meals-show');
    mealShow.innerHTML = ``;
    meal.forEach(m => {
        console.log(m.strMeal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML=`
            <div class="card">
            <img src="${m.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${m.strMeal}</h5>
                    <p class="card-text">${m.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        </div>
        `;
         mealShow.appendChild(mealDiv);
    })
}