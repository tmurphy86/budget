$(document).ready(function() {

    $(document).on("click", "#item-form", handleItemFormSubmit);

    //allows for selection of categories for selection
    $.get("/api/category", function(data) {
        for (var index = 0; index < data.length; ++index) {
            $('#categoryfill').append("<option value='" + data[index].id + "'>" + data[index].name + "</option>");
        }
    });


    // A function to handle what happens when the form is submitted to create a new Author
    function handleItemFormSubmit(event) {
        console.log("we are trying to submit");
        var form = document.getElementById("lineAdd");
        console.log(form);
        if (form.checkValidity() == false) {
            console.log("check failed")
            event.preventDefault();
            event.stopPropagation();
        } else {
            form.classList.add("was-validated");
            console.log("check passed");

            upsertItem({
                name: $("#item-name").val().trim(),
                reoccurance: $("#costRe").val(),
                model: $('#disabledSelect').val(),
                cost: $('#money').val(),
                description: $('#comment').val(),
                archive: false,
            });
        }
    }


    function upsertItem(itemData) {
        $.post("/create/post/lineitem", itemData)
            .then(console.log(itemData));
    }
});