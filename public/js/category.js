$(document).ready(function() {

    $(document).on("click", "#category-form", handleCategoryFormSubmit);


    function handleCategoryFormSubmit(event) {
        event.preventDefault();
        var val = $("#category-name").val().trim();
        console.log("value passed" + val);
        upsertCategory({
            name: $("#category-name").val().trim()
        });
    }

    function upsertCategory(val) {
        $.post('/create/post/category', val)
            .then(console.log("sucess"));
    }

});