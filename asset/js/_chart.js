$(document).ready(function () {
    console.log("hello world")
    $("#jobFitStatus").html("Good");

    workLoadChart();
    controlChart();
    rewardChart();
    communityChart();
    fairnessChart();
    valuesChart();
});

function workLoadChart() {
    var data = {
        labels: [
            "Red",
            "Blue",
        ],
        datasets: [
            {
                data: [100, 10],
                borderWidth: 0,
                backgroundColor: [
                    "#54af33",
                    "#eaeaea"
                ]
            }]
    };

    new Chart($("#workloadChart"), {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: '75',
            legend: {
                display: false
            }
        }
    });
}

function controlChart() {
    var data = {
        labels: [
            "Red",
            "Blue",
        ],
        datasets: [
            {
                data: [100, 2],
                borderWidth: 0,
                backgroundColor: [
                    "#54af33",
                    "#eaeaea"
                ]
            }]
    };

    new Chart($("#controlChart"), {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: '75',
            legend: {
                display: false
            }
        }
    });
}

function rewardChart() {
    var data = {
        labels: [
            "Red",
            "Blue",
        ],
        datasets: [
            {
                data: [100, 25],
                borderWidth: 0,
                backgroundColor: [
                    "#54af33",
                    "#eaeaea"
                ]
            }]
    };

    new Chart($("#rewardChart"), {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: '75',
            legend: {
                display: false
            }
        }
    });
}

function communityChart() {
    var data = {
        labels: [
            "Red",
            "Blue",
        ],
        datasets: [
            {
                data: [100, 5],
                borderWidth: 0,
                backgroundColor: [
                    "#54af33",
                    "#eaeaea"
                ]
            }]
    };

    new Chart($("#communityChart"), {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: '75',
            legend: {
                display: false
            }
        }
    });
}

function fairnessChart() {
    var data = {
        labels: [
            "Red",
            "Blue",
        ],
        datasets: [
            {
                data: [100, 2],
                borderWidth: 0,
                backgroundColor: [
                    "#54af33",
                    "#eaeaea"
                ]
            }]
    };

    new Chart($("#fairnessChart"), {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: '75',
            legend: {
                display: false
            }
        }
    });
}

function valuesChart() {
    var data = {
        labels: [
            "Red",
            "Blue",
        ],
        datasets: [
            {
                data: [100, 5],
                borderWidth: 0,
                backgroundColor: [
                    "#54af33",
                    "#eaeaea"
                ]
            }]
    };

    new Chart($("#valuesChart"), {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: '75',
            legend: {
                display: false
            }
        }
    });
}