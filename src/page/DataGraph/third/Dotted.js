import { useEffect, useRef } from "react";
import * as echarts from "echarts";
const Dotted = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);
    let category = [];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];
    for (let i = 0; i < 20; i++) {
      let date = new Date((dottedBase += 3600 * 24 * 1000));
      category.push(
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
      );
      let b = Math.random() * 200;
      let d = Math.random() * 200;
      barData.push(b);
      lineData.push(d + b);
    }
    const option = {
      backgroundColor: "#0f375f",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["line", "bar"],
        textStyle: {
          color: "#ccc",
        },
      },
      xAxis: {
        data: category,
        axisLine: {
          lineStyle: {
            color: "#ccc",
          },
        },
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: "#ccc",
          },
        },
      },
      series: [
        {
          name: "line",
          type: "line",
          smooth: true,
          showAllSymbol: true,
          symbol: "emptyCircle",
          symbolSize: 15,
          data: lineData,
        },
        {
          name: "bar",
          type: "bar",
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#14c8d4" },
              { offset: 1, color: "#43eec6" },
            ]),
          },
          data: barData,
        },
        {
          name: "line",
          type: "bar",
          barGap: "-100%",
          barWidth: 10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(20,200,212,0.5)" },
              { offset: 0.2, color: "rgba(20,200,212,0.2)" },
              { offset: 1, color: "rgba(20,200,212,0)" },
            ]),
          },
          z: -12,
          data: lineData,
        },
        {
          name: "dotted",
          type: "pictorialBar",
          symbol: "rect",
          itemStyle: {
            color: "#0f375f",
          },
          symbolRepeat: true,
          symbolSize: [12, 4],
          symbolMargin: 1,
          z: -10,
          data: lineData,
        },
      ],
    };
    chartInstance.setOption(option);
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div
          ref={chartRef}
          style={{
            height: 950,
            width: 1550,
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Dotted;
