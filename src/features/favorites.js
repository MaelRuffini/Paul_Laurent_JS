function favorites ()
{ 
// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fav__button fav';
});


// register click event listener
document.querySelector('.content').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.classList.add("fav");

  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = 'fav__button';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage

}

export default favorites
