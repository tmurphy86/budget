//front end js file for uploading data from submit form to DB for Line item handlebars

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
        var form = document.getElementById("lineAdd");
        var dog = $("#categoryfill").val();
        console.log(dog);
        if (form.checkValidity() == false) {
            console.log("check failed")
            event.preventDefault();
            event.stopPropagation();
        } else {
            form.classList.add("was-validated");
            console.log("check passed");
            var costRe;
            if ($("#costRe").val()==='on'){
                costRe = true;
                console.log(costRe);
            }else { 
                costRe = false
            }
            upsertItem({
                name: $("#item-name").val().trim(),
                reoccurance: costRe,
                model: $('#disabledSelect').val(),
                cost: $('#money').val(),
                description: $('#comment').val(),
                categoryId: $("#categoryfill").val(),
                archive: false
            });
        }
    }


    function upsertItem(itemData) {
        $.post("/create/post/lineitem", itemData)
            .then(console.log(itemData));
    }
});