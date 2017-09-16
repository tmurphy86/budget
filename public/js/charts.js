$(document).ready(function() {

 page()

 function page(){
    $.get("/api/lineitem", function(data) {
        console.log(data);
    });

    $.get("/api/category", function(data) {
      chart(data);
    });
}



function chart(array){

    var chartCategory = [];
    for (var i = 0; i < array.length; i++) {
        chartCategory.push(array[i].name);
    }.then(chartBuild(chartCategory)),
}

function chartBuild(cleanArray){
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            labels: chartCategory,
            datasets: [{
                label: "Cost (Thousands)",
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
}
});