function searchSubjects() {
    var input, filter, section, cards, h3, i, txtValue;

    // Get the input value and convert to lowercase
    input = document.getElementById("searchInput");
    filter = input.value.toLowerCase();

    // Get the section containing the cards
    section = document.querySelector("#courses");

    // Get all the cards within the section
    cards = section.getElementsByClassName("course-card");

    // Loop through all cards and hide those that don't match the search query
    for (i = 0; i < cards.length; i++) {
        h3 = cards[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
