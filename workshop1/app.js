function addFavoriteBook(bookName) {
    var favoriteBooks = ["book1", "book2", "Book3"];
    var book = favoriteBooks.includes('great');
    if (book !== false) {
        console.log(true);
    } else {

        console.log(false);
        console.log(favoriteBooks);
        favoriteBooks.push('great');
        console.log('ajoutera une valeur à la fin du tableau');
        console.log(favoriteBooks);

    }

    function printFavoriteBooks() {
        var total = favoriteBooks.length;
        console.log("livre favoris:" + " " + total)
        for (let books of favoriteBooks) {
            console.log(books);
        }
    }
    printFavoriteBooks()
}
addFavoriteBook()