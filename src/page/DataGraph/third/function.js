import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import React from "react";
const DrawFunc = () => {
  const chartRef = useRef(null);
  function func(x) {
    return  Math.sin(Math.exp(2+x))
  }
  function generateData() {
    let data = [];
    for (let i = -200; i <= 200; i += 0.1) {
      data.push([i, func(i)]);
    }
    return data;
  }
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      animation: false,
      grid: {
        top: 40,
        left: 50,
        right: 40,
        bottom: 50,
      },
      xAxis: {
        name: "x",
        minorTick: {
          show: true,
        },
        minorSplitLine: {
          show: true,
        },
      },
      yAxis: {
        name: "y",
        min: -100,
        max: 100,
        minorTick: {
          show: true,
        },
        minorSplitLine: {
          show: true,
        },
      },
      dataZoom: [
        {
          show: true,
          type: "inside",
          filterMode: "none",
          xAxisIndex: [0],
          startValue: -20,
          endValue: 20,
        },
        {
          show: true,
          type: "inside",
          filterMode: "none",
          yAxisIndex: [0],
          startValue: -20,
          endValue: 20,
        },
      ],
      series: [
        {
          type: "line",
          showSymbol: false,
          clip: true,
          data: generateData(),
        },
      ],
    };
    myChart.setOption(option);
  });
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

export default DrawFunc;
