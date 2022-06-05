function favoritesCol ()
{

// get favorites from local storage or empty array
var favoritesCol = JSON.parse(localStorage.getItem('favorites')) || [];
// add class 'fav' to each favorite
favoritesCol.forEach(function(favoriteCol) {
  document.getElementById(favoriteCol).className = 'fav';
  document.getElementById(favoriteCol).parentElement.parentElement.parentElement.classList.add('className');
});
// register click event listener
document.querySelector('.content').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favoritesCol.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.classList.add("fav");

  // item is already favorite
  } else {
    favoritesCol.splice(index, 1);
    item.className = 'class';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favoritesCol));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage




}

export default favoritesCol
