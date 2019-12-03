var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Hagia Sophia', 'Taj Mahal', 'Jerusalem', 'Makkah', 'Wadi Rum', 'Mount Everest','Cape Town','Aqua Club Dolphin','Petra','Great Wall of China','pyramids','Rome','Dubai','Malaysia','Norway','Turkey'],
    datasets: [{
      label: '# of Vistor',
      data: [120, 190, 200, 115, 222, 123,111,451,232,212,333,254,289,247,166,398],
      backgroundColor:
        'rgb(12, 75, 75)',

      borderColor:
        'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});
