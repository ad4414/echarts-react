import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
const FlightGL = () => {
  const chartRef = useRef(null);
  const location = useLocation();
  console.log(location);

  let url = location.pathname + location.search + location.hash;
  console.log(url);
  const data = useLoaderData();
  let flightGLData = data.data;
  console.log(data);
  console.log(flightGLData);
  useEffect(() => {
    let chartInit = echarts.init(chartRef.current);
    let airports = flightGLData.airports.map((item) => {
      return {
        coord: [item[3], item[4]],
      };
    });
    const getAirportCoord = (idx) => {
      return [flightGLData.airports[idx][3], flightGLData.airports[idx][4]];
    };
    let routesGroupByAirline = {};
    flightGLData.routes.forEach((route) => {
      let airline = flightGLData.airlines[route[0]];
      let airlineName = airline[0];
      if (!routesGroupByAirline[airlineName]) {
        routesGroupByAirline[airlineName] = [];
      }
      routesGroupByAirline[airlineName].push(route);
    });
    let pointsData = [];
    flightGLData.routes.forEach((airline) => {
      pointsData.push(getAirportCoord(airline[1]));
      pointsData.push(getAirportCoord(airline[2]));
    });
    let series = flightGLData.airlines
      .map((airline) => {
        let airlineName = airline[0];
        let routes = routesGroupByAirline[airlineName];
        if (!routes) {
          return null;
        }
        return {
          type: "lines3D",
          name: airlineName,
          effect: {
            show: true,
            trailWidth: 2,
            trailLength: 0.15,
            trailOpacity: 1,
            trailColor: "rgb(30, 30, 60)",
          },
          lineStyle: {
            width: 1,
            color: "rgb(50, 50, 150)",
            // color: 'rgb(118, 233, 241)',
            opacity: 0.1,
          },
          blendMode: "lighter",
          data: routes.map(function (item) {
            return [airports[item[1]].coord, airports[item[2]].coord];
          }),
        };
      })
      .filter((series) => {
        return !!series;
      });
    series.push({
      type: "scatter3D",
      coordinateSystem: "globe",
      blendMode: "lighter",
      symbolSize: 2,
      itemStyle: {
        color: "rgb(50, 50, 150)",
        opacity: 0.2,
      },
      data: pointsData,
    });
    chartInit.setOption({
      legend: {
        selectedMode: "single",
        left: "left",
        data: Object.keys(routesGroupByAirline),
        orient: "vertical",
        textStyle: {
          color: "#fff",
        },
      },
      globe: {
        environment: "/data-gl/asset/starfield.jpg",
        heightTexture: "/data-gl/asset/bathymetry_bw_composite_4k.jpg",
        displacementScale: 0.1,
        displacementQuality: "high",
        baseColor: "#000",
        shading: "realistic",
        realisticMaterial: {
          roughness: 0.2,
          metalness: 0,
        },
        postEffect: {
          enable: true,
          depthOfField: {
            enable: false,
            focalDistance: 150,
          },
        },
        temporalSuperSampling: {
          enable: true,
        },
        light: {
          ambient: {
            intensity: 0,
          },
          main: {
            intensity: 0.1,
            shadow: false,
          },
          ambientCubemap: {
            texture: "/data-gl/asset/lake.hdr",
            exposure: 1,
            diffuseIntensity: 0.5,
            specularIntensity: 2,
          },
        },
        viewControl: {
          autoRotate: false,
        },
        silent: true,
      },
      series: series,
    });
  });
  return (
    <div style={{ textAlign: "center" }}>
      <div
        ref={chartRef}
        style={{
          height: "920px",
          width: "92%",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
};

export default FlightGL;
