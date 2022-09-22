import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function PieChart() {
  const POWER_USED = 80;
  const POWER_AVAILABLE = 100 - POWER_USED;
  const PIE_ANGLE = 200;
  const PIE_DEPTH = 55;
  const PIE_SIZE = "100%";
  const PIE_COLOR = "rgb(156, 34, 75)";
  const PIE_CSS_CLASSNAME = "highlight";
  // css:
  // .highlight {
  //   stroke: rgba(255, 255, 255, 0.836);
  // }

  const options = {
    credits: { enabled: false },
    chart: {
      type: "pie",
      backgroundColor: "rgba(0,0,0,0)",
      options3d: {
        enabled: true,
        alpha: 65,
        beta: 0,
      },
    },
    title: { text: undefined },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        startAngle: PIE_ANGLE,
        depth: PIE_DEPTH,
        size: PIE_SIZE,
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
      series: {
        name: "Share",
        dataLabels: {
          enabled: false,
          format: "{point.name}",
        },
      },
    },
    series: [
      {
        data: [
          {
            name: `Used: ${POWER_USED}%`,
            y: POWER_USED,
            selected: true,
            color: PIE_COLOR,
            className: PIE_CSS_CLASSNAME,
          },
          {
            name: "Free",
            y: POWER_AVAILABLE,
            sliced: true,
            color: "rgba(255, 255, 255, 0.137)",
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default PieChart;
