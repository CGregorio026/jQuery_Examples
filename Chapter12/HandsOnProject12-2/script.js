function convert() {
    var lb = $("#pValue").val();
    var kg = Math.round(lb / 2.2);
    // passes the value of kg to show it in the kValue id input section, uses html to update a p tag.
    $("#kValue").html(kg);
}

$("#convertButton").click(convert);