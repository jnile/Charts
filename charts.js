function areaChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="linechart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("linechart");

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January","February","March","April","May","June","July"],
            datasets: [
            {
                label: "First Dataset",
                data: [65,59,80,81,56,55,40],
                fill: {
                    target: {value: 70},
                    above: 'rgb(75, 150,150)',   // Area will be red above the origin
                    below: 'rgb(192, 75,192)'    // And blue below the origin
                },
                borderColor: 'rgb(75, 192,192)',
                tension: 0
            }
            ]
        },
        options: {
            responsive: false
        }
    });
}

function barChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="achart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("achart");

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: false
        }
    });
}

function bubbleChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="bchart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("bchart");

    myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label:'first dataset',
                data: [{
                    x:20,
                    y:20,
                    r:10,
                }, {
                    x:25,
                    y:15,
                    r:10,
                }, {
                    x:30,
                    y:10,
                    r:10,
                }],
                backgroundColor: "rgb(255,99, 132)"
            }]
        },
        options: {
            responsive: false
        }
    });
}

function dpChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="dpchart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("dpchart");

    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: false
        }
    });
}

function lineChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="linechart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("linechart");

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January","February","March","April","May","June","July"],
            datasets: [{
                label: "First Dataset",
                data: [65,59,80,81,56,55,40],
                fill: false,
                borderColor: 'rgb(75, 192,192)',
                tension: 0
            }]
        },
        options: {
            responsive: false
        }
    });
}

function mixedChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="mixedchart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("mixedchart");

    myChart = new Chart(ctx, {
        data: {
            datasets: [{
                type: 'bar',
                label: 'Bar Dataset',
                data: [10,20,30,40],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)'
            }, {
                type: 'line',
                label: 'Line Dataset',
                data: [25,50,60,30],
                fill: false,
                borderColor: 'rgb(54, 162, 235)'
            }],
            labels: ["January", "February", "March", "April"]
        },
        options: {
            responsive: false
        }
    });
}

function polarChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="polarchart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("polarchart");

    myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [11,16,7,3,14],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)'
                ]
            }]
        },
        options: {
            responsive: false
        }
    });
}

function radarChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="radarchart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("radarchart");

    myChart = new Chart(ctx, {
        type: "radar",
        data: {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'My Second Dataset',
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            responsive: false
        }
    });
}

function scatterChart() {
    let odiv = document.getElementById("canvass");
    odiv.innerHTML = '<canvas id="scatterchart" width="400" height="400"></canvas>';
    const ctx = document.getElementById("scatterchart");

    myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                data: [
                    {
                        x: -10,
                        y: 0
                    }, {
                        x: 0,
                        y: 10
                    }, {
                        x: 10,
                        y: 5
                    }, {
                        x: 0.5,
                        y: 5.5
                    }
                ],
                backgroundColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            responsive: false,
            scales: {
                x: {
                    type: "linear",
                    position: 'bottom'
                }
            }
        }
    });
}