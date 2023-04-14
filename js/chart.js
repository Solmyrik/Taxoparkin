// window.addEventListener('scroll', function () {
//   /* Получение значения scrollTop (вертикальный отступ сверху) */
//   /* и установка свойства transform для внутреннего блока */
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   document.querySelector('.strategy__left').style.transform =
//     'translateY(' + scrollTop * 0.05 + 'px)';
// });

// const strategy = document.querySelector('.strategy');
// const strategyContainer = document.querySelector('.strategy__container');

// window.addEventListener('scroll', function () {
//   console.log(strategy.getBoundingClientRect().y, 'ok');
//   if (strategy.getBoundingClientRect().y < 200) {
//     strategyContainer.style.position = 'fixed';
//     strategyContainer.style.left = '50%';
//     strategyContainer.style.top = 0;
//     strategy.style.paddingBottom = 652 + Math.abs(strategy.getBoundingClientRect().y) + 'px';
//   }
// });
// const ctx = document.getElementById('myChart');

// const currentWidth = window.innerWidth;

// console.log(currentWidth);
// if (currentWidth < 500) {
//   ctx.height = 300;
// }

// const labels = [
//   '1 мес',
//   '2 мес',
//   '3 мес',
//   '4 мес',
//   '5 мес',
//   '6 мес',
//   '7 мес',
//   '8 мес',
//   '9 мес',
//   '10 мес',
//   '11 мес',
//   '1 год',
//   '2 года',
//   '3 года',
//   '4 года',
//   '5 лет',
// ];

// const chartAreaBorder = {
//   id: 'chartAreaBorder',
//   beforeDatesetsDraw(chart, args, options) {
//     const {
//       ctx,
//       chartArea: { left, top, width, height, right, bottom },
//     } = chart;
//     ctx.save();
//     ctx.beginPath();
//     ctx.lineWidth = 3;
//     ctx.moveTo(left, top);
//     ctx.lineTo(right, top);
//     ctx.lineTo(right, bottom);
//     // ctx.strokeStyle = options.borderColor;
//     // ctx.lineWidth = options.borderWidth;
//     // ctx.setLineDash(options.borderDash || []);
//     // ctx.lineDashOffset = options.borderDashOffset;
//     // ctx.strokeRect(left, top, width, height);
//     // ctx.lineTo(right, top);
//     // ctx.restore();
//   },
// };

// const chart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: labels,

//     datasets: [
//       {
//         label: '# of Votes',
//         data: [
//           20000, 30000, 40000, 55000, 66000, 68000, 70000, 100000, 150000, 200000, 400000, 500000,
//           800000, 900000, 930000, 960000,
//         ],
//         borderWidth: 1,
//         borderColor: '#4071B3',
//       },
//     ],
//   },
//   options: {
//     scales: {
//       x: {
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//     },
//     legend: {
//       display: false,
//     },
//   },
//   options: {
//     plugins: {
//       legend: { display: false },
//       chartAreaBorder: {
//         borderColor: 'red',
//         borderWidth: 2,
//         borderDash: [5, 5],
//         borderDashOffset: 2,
//       },
//     },
//     transitions: {
//       show: {
//         animations: {
//           x: {
//             from: 0,
//           },
//           y: {
//             from: 0,
//           },
//         },
//       },
//       hide: {
//         animations: {
//           x: {
//             to: 0,
//           },
//           y: {
//             to: 0,
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         drawBorder: false,
//         grid: {
//           // drawOnChartArea: false,
//         },
//       },
//       y: {
//         drawBorder: false,
//         beginAtZero: true,
//         position: 'right',
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//     },
//   },
//   plugins: [chartAreaBorder],
// });

const datik = [
  65000, 130000, 195000, 260000, 325000, 390000, 455000, 520000, 585000, 650000, 715000, 780000,
  1560000, 2340000, 3120000, 3900000,
];
const datik1 = [
  40000, 80000, 120000, 160000, 200000, 240000, 280000, 320000, 360000, 400000, 440000, 480000,
  960000, 1440000, 1920000, 2400000,
];
const datik2 = [
  30000, 60000, 90000, 120000, 150000, 180000, 210000, 240000, 270000, 300000, 330000, 360000,
  720000, 1080000, 1440000, 1800000,
];
const datik3 = [
  20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000, 180000, 200000, 220000, 240000,
  480000, 720000, 960000, 1200000,
];

const chartButtons = document.querySelectorAll('.chart__button');
const ch = document.querySelectorAll('.ch');
chartButtons.forEach((button, i) => {
  button.addEventListener('click', (e) => {
    chartButtons.forEach((b) => b.classList.remove('active'));
    ch.forEach((c) => c.classList.remove('active'));
    chartButtons[i].classList.add('active');
    ch[i].classList.add('active');
    if (i === 1) {
      datik.push(300000);
      starts1();
    }
    if (i === 2) {
      starts2();
    }
    if (i === 3) {
      starts3();
    }
  });
});

let start = false;

const currentWidth = window.innerWidth;

const chartBlock = document.querySelector('.chart');

console.log(window.pageYOffset);

window.addEventListener('scroll', (e) => {
  // console.log(window.pageYOffset, chartBlock.getBoundingClientRect().y);
  if (chartBlock.getBoundingClientRect().y < 550 && start === false) {
    starts();
    start = true;
  }
});

console.log(currentWidth);

const labels = [
  '1 мес',
  '2 мес',
  '3 мес',
  '4 мес',
  '5 мес',
  '6 мес',
  '7 мес',
  '8 мес',
  '9 мес',
  '10 мес',
  '11 мес',
  '1 год',
  '2 года',
  '3 года',
  '4 года',
  '5 лет',
];

function starts() {
  const chartik = document.querySelector('.chartik');
  var ctx = document.getElementById('chart').getContext('2d');
  if (window.innerWidth < 500) {
    console.log('ok');
    chartik.height = 340;
  }
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#28BBC0',
          borderColor: '#4071B3',
          borderWidth: 1,
          data: datik,
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        chartAreaBorder: {
          borderColor: 'red',
          borderWidth: 2,
          borderDash: [5, 5],
          borderDashOffset: 2,
        },
      },
      animation: {
        x: {
          duration: 5000,
          from: 0,
        },
        y: {
          duration: 3000,
          from: 500,
        },
      },
      scales: {
        x: {
          drawBorder: false,
          grid: {
            // drawOnChartArea: false,
          },
        },
        y: {
          drawBorder: false,
          beginAtZero: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });

  var data = [];
  var prev = 100;
  for (var i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
  }

  var delayBetweenPoints = 10;
  var started = {};
}

function starts1() {
  const chartik = document.querySelector('.chartik1');
  var ctx = document.getElementById('chart1').getContext('2d');
  if (window.innerWidth < 500) {
    console.log('ok');
    chartik.height = 340;
  }
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#28BBC0',
          borderColor: '#4071B3',
          borderWidth: 1,
          data: datik1,
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        chartAreaBorder: {
          borderColor: 'red',
          borderWidth: 2,
          borderDash: [5, 5],
          borderDashOffset: 2,
        },
      },
      animation: {
        x: {
          duration: 5000,
          from: 0,
        },
        y: {
          duration: 3000,
          from: 500,
        },
      },
      scales: {
        x: {
          drawBorder: false,
          grid: {
            // drawOnChartArea: false,
          },
        },
        y: {
          drawBorder: false,
          beginAtZero: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });

  var data = [];
  var prev = 100;
  for (var i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
  }

  var delayBetweenPoints = 10;
  var started = {};
}
function starts2() {
  const chartik = document.querySelector('.chartik2');
  var ctx = document.getElementById('chart2').getContext('2d');
  if (window.innerWidth < 500) {
    console.log('ok');
    chartik.height = 340;
  }
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#28BBC0',
          borderColor: '#4071B3',
          borderWidth: 1,
          data: datik2,
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        chartAreaBorder: {
          borderColor: 'red',
          borderWidth: 2,
          borderDash: [5, 5],
          borderDashOffset: 2,
        },
      },
      animation: {
        x: {
          duration: 5000,
          from: 0,
        },
        y: {
          duration: 3000,
          from: 500,
        },
      },
      scales: {
        x: {
          drawBorder: false,
          grid: {
            // drawOnChartArea: false,
          },
        },
        y: {
          drawBorder: false,
          beginAtZero: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });

  var data = [];
  var prev = 100;
  for (var i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
  }

  var delayBetweenPoints = 10;
  var started = {};
}
function starts3() {
  const chartik = document.querySelector('.chartik3');
  var ctx = document.getElementById('chart3').getContext('2d');
  if (window.innerWidth < 500) {
    console.log('ok');
    chartik.height = 340;
  }
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#28BBC0',
          borderColor: '#4071B3',
          borderWidth: 1,
          data: datik3,
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        chartAreaBorder: {
          borderColor: 'red',
          borderWidth: 2,
          borderDash: [5, 5],
          borderDashOffset: 2,
        },
      },
      animation: {
        x: {
          duration: 5000,
          from: 0,
        },
        y: {
          duration: 3000,
          from: 500,
        },
      },
      scales: {
        x: {
          drawBorder: false,
          grid: {
            // drawOnChartArea: false,
          },
        },
        y: {
          drawBorder: false,
          beginAtZero: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });

  var data = [];
  var prev = 100;
  for (var i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
  }

  var delayBetweenPoints = 10;
  var started = {};
}

// var ctx2 = document.getElementById('chart2').getContext('2d');
// var chart2 = new Chart(ctx2, {
//   type: 'line',
//   data: {
//     datasets: [
//       {
//         backgroundColor: 'transparent',
//         borderColor: 'rgb(255, 99, 132)',
//         borderWidth: 1,
//         pointRadius: 0,
//         data: data,
//         fill: true,
//         animation: (context) => {
//           var delay = 0;
//           var index = context.dataIndex;
//           var chart = context.chart;
//           if (!started[index]) {
//             delay = index * delayBetweenPoints;
//             started[index] = true;
//           }
//           var { x, y } =
//             index > 0
//               ? chart.getDatasetMeta(0).data[index - 1].getProps(['x', 'y'], true)
//               : { x: 0, y: chart.scales.y.getPixelForValue(100) };

//           return {
//             x: {
//               easing: 'linear',
//               duration: delayBetweenPoints,
//               from: x,
//               delay,
//             },
//             y: {
//               easing: 'linear',
//               duration: delayBetweenPoints * 500,
//               from: y,
//               delay,
//             },
//             skip: {
//               type: 'boolean',
//               duration: delayBetweenPoints,
//               from: true,
//               to: false,
//               delay: delay,
//             },
//           };
//         },
//       },
//     ],
//   },
//   options: {
//     scales: {
//       x: {
//         type: 'linear',
//       },
//     },
//   },
//   plugins: [
//     {
//       id: 'force_line_update',
//       beforeDatasetDraw(chart, ctx) {
//         ctx.meta.dataset.points = ctx.meta.data;
//       },
//     },
//   ],
// });
