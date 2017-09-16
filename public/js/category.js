$(document).ready(function() {

    $(document).on("click", "#category-form", handleCategoryFormSubmit);


    function handleCategoryFormSubmit(event) {
        event.preventDefault();
        var val = $("#category-name").val().trim();
        upsertCategory({
            name: $("#category-name").val().trim()
        });
        $("#category-name").val('');
    }

    function upsertCategory(val) {
        $.post('/create/post/category', val);
    }

});