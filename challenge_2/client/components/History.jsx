import React from 'react';
import Chart from 'chart.js';

const History = (props) => {
  console.log(props.data)
  var cfg = {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Bitcoin Closing Price',
        data: props.data,
        type: 'line',
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'day'
          },
          distribution: 'series',
          ticks: {
            source: 'data',
            autoSkip: true
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: `Closing price (${props.currency})`
          }
        }]
      },
      tooltips: {
        intersect: false,
        mode: 'index',
        callbacks: {
          label: function (tooltipItem, myData) {
            var label = myData.datasets[tooltipItem.datasetIndex].label || '';
            if (label) {
              label += ': ';
            }
            label += parseFloat(tooltipItem.value).toFixed(2);
            return label;
          }
        }
      }
    }
  };
  var ctx = document.getElementById('myChart').getContext('2d');
  ctx.canvas.width = 1000;
  ctx.canvas.height = 300;
  if (props.data.length !== 0) {
    let lineChart = new Chart(ctx, cfg)
  }
  return (
    <div>History component rendering</div>
  )
}

export default History;