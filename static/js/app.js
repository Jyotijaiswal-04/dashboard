// full calendar initialization
const fullcalendar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
    });
    calendar.render();
  });
};

// toggle code
const toggleSidebar = () => {
  const wrapper = document.querySelector(".wrap");
  const togglebtn = document.querySelector("#toggle-sidebar");
  togglebtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
};
toggleSidebar();

// chart initialization

const chart = () => {
  var options = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
};

const chart1 = () => {
  var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#99C2A2", "#C5EDAC", "#66C7F4"],
    series: [
      {
        name: "Column A",
        type: "column",
        data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5],
      },
      {
        name: "Column B",
        type: "column",
        data: [10, 19, 27, 26, 34, 35, 40, 38],
      },
      {
        name: "Line C",
        type: "line",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
    ],
    stroke: {
      width: [4, 4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        seriesName: "Column A",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: "Columns",
        },
      },
      {
        seriesName: "Column A",
        show: false,
      },
      {
        opposite: true,
        seriesName: "Line C",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: "Line",
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);

  chart.render();

  // chart section:

  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart1"), options);
  chart.render();
};

// chart section
const piechart1 = () => {
  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart1"), options);
  chart.render();
};
// 2
const piechart2 = () => {
  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },
    title: {
      text: "Gradient Donut with custom Start-angle",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart2"), options);
  chart.render();
};
// 3
const piechart3 = () => {
  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
      width: 380,
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.5,
      },
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 1,
      },
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: true,
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines",
        ],
      },
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    theme: {
      palette: "palette2",
    },
    title: {
      text: "Favourite Movie Type",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart3"), options);
  chart.render();
};
// linechart 1

const linechart1 = () => {
  var options = {
    series: [
      {
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],
    chart: {
      type: "bar",
      height: 430,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
  };

  var chart = new ApexCharts(document.querySelector("#line-chart1"), options);
  chart.render();
};
// linechart2
const linechart2 = () => {
  var options = {
    series: [
      // George Washington
      {
        name: "George Washington",
        data: [
          {
            x: "President",
            y: [
              new Date(1789, 3, 30).getTime(),
              new Date(1797, 2, 4).getTime(),
            ],
          },
        ],
      },
      // John Adams
      {
        name: "John Adams",
        data: [
          {
            x: "President",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
          },
          {
            x: "Vice President",
            y: [
              new Date(1789, 3, 21).getTime(),
              new Date(1797, 2, 4).getTime(),
            ],
          },
        ],
      },
      // Thomas Jefferson
      {
        name: "Thomas Jefferson",
        data: [
          {
            x: "President",
            y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
          },
          {
            x: "Vice President",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
          },
          {
            x: "Secretary of State",
            y: [
              new Date(1790, 2, 22).getTime(),
              new Date(1793, 11, 31).getTime(),
            ],
          },
        ],
      },
      // Aaron Burr
      {
        name: "Aaron Burr",
        data: [
          {
            x: "Vice President",
            y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
          },
        ],
      },
      // George Clinton
      {
        name: "George Clinton",
        data: [
          {
            x: "Vice President",
            y: [
              new Date(1805, 2, 4).getTime(),
              new Date(1812, 3, 20).getTime(),
            ],
          },
        ],
      },
      // John Jay
      {
        name: "John Jay",
        data: [
          {
            x: "Secretary of State",
            y: [
              new Date(1789, 8, 25).getTime(),
              new Date(1790, 2, 22).getTime(),
            ],
          },
        ],
      },
      // Edmund Randolph
      {
        name: "Edmund Randolph",
        data: [
          {
            x: "Secretary of State",
            y: [
              new Date(1794, 0, 2).getTime(),
              new Date(1795, 7, 20).getTime(),
            ],
          },
        ],
      },
      // Timothy Pickering
      {
        name: "Timothy Pickering",
        data: [
          {
            x: "Secretary of State",
            y: [
              new Date(1795, 7, 20).getTime(),
              new Date(1800, 4, 12).getTime(),
            ],
          },
        ],
      },
      // Charles Lee
      {
        name: "Charles Lee",
        data: [
          {
            x: "Secretary of State",
            y: [
              new Date(1800, 4, 13).getTime(),
              new Date(1800, 5, 5).getTime(),
            ],
          },
        ],
      },
      // John Marshall
      {
        name: "John Marshall",
        data: [
          {
            x: "Secretary of State",
            y: [
              new Date(1800, 5, 13).getTime(),
              new Date(1801, 2, 4).getTime(),
            ],
          },
        ],
      },
      // Levi Lincoln
      {
        name: "Levi Lincoln",
        data: [
          {
            x: "Secretary of State",
            y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()],
          },
        ],
      },
      // James Madison
      {
        name: "James Madison",
        data: [
          {
            x: "Secretary of State",
            y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()],
          },
        ],
      },
    ],
    chart: {
      height: 350,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#3F51B5",
      "#546E7A",
      "#D4526E",
      "#8D5B4C",
      "#F86624",
      "#D7263D",
      "#1B998B",
      "#2E294E",
      "#F46036",
      "#E2C044",
    ],
    fill: {
      type: "solid",
    },
    xaxis: {
      type: "datetime",
    },
    legend: {
      position: "right",
    },
    tooltip: {
      custom: function (opts) {
        const fromYear = new Date(opts.y1).getFullYear();
        const toYear = new Date(opts.y2).getFullYear();

        const w = opts.ctx.w;
        let ylabel =
          w.config.series[opts.seriesIndex].data?.[opts.dataPointIndex]?.x;
        let seriesName = w.config.series[opts.seriesIndex].name
          ? w.config.series[opts.seriesIndex].name
          : "";
        const color = w.globals.colors[opts.seriesIndex];

        return (
          '<div class="apexcharts-tooltip-rangebar">' +
          '<div> <span class="series-name" style="color: ' +
          color +
          '">' +
          (seriesName ? seriesName : "") +
          "</span></div>" +
          '<div> <span class="category">' +
          ylabel +
          ' </span> <span class="value start-value">' +
          fromYear +
          '</span> <span class="separator">-</span> <span class="value end-value">' +
          toYear +
          "</span></div>" +
          "</div>"
        );
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#line-chart2"), options);
  chart.render();
};

// linechart3

const linechart3 = () => {
  var options = {
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14],
      },
      {
        name: "PRODUCT D",
        data: [21, 7, 25, 13, 22, 8],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadiusApplication: "end", // 'around', 'end'
        borderRadiusWhenStacked: "last", // 'all', 'last'
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };

  var chart = new ApexCharts(document.querySelector("#line-chart3"), options);
  chart.render();
};
