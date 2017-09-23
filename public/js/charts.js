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
    var catCost = [];

     for (var i = 0; i < array.length; i++) {
        chartCategory.push(array[i].name);
        $.get("/api/lineitem/"+array[i].id, function(data) {
            catCost.push(data);
        });
    }

    chartBuild(chartCategory, catCost);

}

function chartBuild(cleanArray, catCost){
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            labels: cleanArray,
            datasets: [{
                label: "Cost (Thousands)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: catCost
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