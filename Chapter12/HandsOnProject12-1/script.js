function display(event) {
    $(event.currentTarget).next().toggle();
}

// the $ acts as a query selector to select every h3 in the document
$("h3").click(display);