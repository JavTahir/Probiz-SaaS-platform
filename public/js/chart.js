// console.log(chartData["chartData"]["datasets"]);

new Chart("myChart", {
    type: "line",
    data: {
        labels: chartData.chartData.labels,
        datasets: [
            {
                data: chartData.chartData.datasets[0].data, // Twitter dataset
                borderColor: "#87CEFA",
                fill: false,
                label: "Twitter Followers",
            },
            {
                data: chartData.chartData.datasets[1].data, // Linkedin dataset
                borderColor: "#0A66C2",
                fill: false,
                label: "Linkedin Connections",
            },
        ],
    },
    options: {
        legend: { display: true },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    },
});