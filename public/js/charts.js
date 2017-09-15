$(document).ready(function() {

    var items = $.get("/api/lineitem", function(data) {
        console.log(data);
    });

    var category = $.get("/api/category", function(data) {
        console.log(data);
    });

    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            labels: category,
            datasets: [{
                label: "Cost (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [2478, 5267, 734, 784, 433]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Prosperity Now' + "" + 's IT Budget (thousands) in 2017'
            }
        }
    });


});