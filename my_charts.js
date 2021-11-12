const ctx = document.getElementById('my-chart').getContext('2d');
const earning  = document.getElementById('earning').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['DuckDuckGo', 'Google', 'Yahoo', 'Bing'],
        datasets: [{
            label: '# of Votes',
            data: [1200, 1900, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

const myChart_1 = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'Febulary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Earning',
            data: [1200, 1900, 1000, 1231, 4324, 2345, 1232, 3123, 4321, 1234, 4123, 1261,],
            backgroundColor: [
                'rgba(255, 229, 32, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});