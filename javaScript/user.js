const searchBar = document.querySelector(".users .search input")
// console.log(searchBar);
const profileFindButton = document.querySelector(".users .search button")
// console.log(profileFindButton);
profileFindButton.addEventListener("click", ()=>{
searchBar.classList.toggle("active")
searchBar.focus()
profileFindButton.classList.toggle("active")
});