import { useEffect, useRef } from "react"
import * as echarts from "echarts";
const PieNet=()=>{
    const chartRef=useRef(null)
    let getY = function (x) {
        let y = Math.sqrt((1 - Math.pow(x / 38, 2)) * Math.pow(30, 2));
        return y;
      };
      let getOutY = function (x) {
        let y = Math.sqrt((1 - Math.pow(x / 50, 2)) * Math.pow(42, 2));
        return y;
      };
     
    useEffect(()=>{
        let items = [
            {
              symbol: "",
              name: "市监狱局",
              value: [5, getOutY(5)],
              pointType: "point",
              belong: "南开区",
            },
            {
              symbol: "",
              name: "南开区政府",
              value: [7.5, getOutY(7.5)],
              pointType: "point",
              belong: "南开区",
            },
            {
              symbol: "",
              name: "市税务局",
              value: [10, getOutY(10)],
              pointType: "point",
              belong: "河北区",
            },
            {
              symbol: "",
              name: "河北区政府",
              value: [12.5, getOutY(12.5)],
              pointType: "point",
              belong: "河北区",
            },
            {
              symbol: "",
              name: "市公安局",
              value: [15, getOutY(15)],
              pointType: "point",
              belong: "西青区",
            },
            {
              symbol: "",
              name: "西青区政府",
              value: [17.5, getOutY(17.5)],
              pointType: "point",
              belong: "西青区",
            },
            {
              symbol: "",
              name: "市税务局数据中心",
              value: [20, getOutY(20)],
              pointType: "point",
              belong: "空港IDC",
            },
            {
              symbol: "",
              name: "空港数据中心",
              value: [22.5, getOutY(22.5)],
              pointType: "point",
              belong: "空港IDC",
            },
            {
              symbol: "",
              name: "武清区政府",
              value: [25, getOutY(25)],
              pointType: "point",
              belong: "武清区",
            },
            {
              symbol: "",
              name: "市惩防教育基地",
              value: [27.5, getOutY(27.5)],
              pointType: "point",
              belong: "市电子政务中心",
            },
            {
              symbol: "",
              name: "市教委",
              value: [30, getOutY(30)],
              pointType: "point",
              belong: "市电子政务中心",
            },
            {
              symbol: "",
              name: "市残联",
              value: [32.5, getOutY(32.5)],
              pointType: "point",
              belong: "市电子政务中心",
            },
            {
              symbol: "",
              name: "市党委校",
              value: [35, getOutY(35)],
              pointType: "point",
              belong: "市电子政务中心",
            },
            {
              symbol: "",
              name: "市城管委",
              value: [37.5, getOutY(37.5)],
              pointType: "point",
              belong: "市电子政务中心",
            },
            {
              symbol: "",
              name: "市生态环境局",
              value: [40, getOutY(40)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [10, 5],
              },
            },
            {
              symbol: "",
              name: "市水务局",
              value: [42.5, getOutY(42.5)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [12, 8],
              },
            },
            {
              symbol: "",
              name: "市规自局",
              value: [45, getOutY(45)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [15, 10],
              },
            },
            {
              symbol: "",
              name: "市卫健局",
              value: [47.2, getOutY(47.2)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [15, 15],
              },
            },
            {
              symbol: "",
              name: "市应急局",
              value: [49, getOutY(49)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [15, 15],
              },
            },
            {
              symbol: "",
              name: "市气象局",
              value: [49.95, getOutY(49.95)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [15, 20],
              },
            },
            {
              symbol: "",
              name: "市合作交流办",
              value: [49.6, -getOutY(49.6)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [15, -15],
              },
            },
            {
              symbol: "",
              name: "市交通运输委",
              value: [48.2, -getOutY(48.2)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [12, -10],
              },
            },
            {
              symbol: "",
              name: "市司法局",
              value: [46.3, -getOutY(46.3)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [12, -8],
              },
            },
            {
              symbol: "",
              name: "市高法",
              value: [44, -getOutY(44)],
              pointType: "point",
              belong: "市电子政务中心",
              label: {
                show: true,
                offset: [10, -5],
              },
            },
            {
              symbol: "",
              name: "东丽区政府",
              value: [41, -getOutY(41)],
              pointType: "point",
              belong: "东丽区",
              label: {
                show: true,
                offset: [10, -5],
              },
            },
            {
              symbol: "",
              name: "宝坻区政府",
              value: [38, -getOutY(38)],
              pointType: "point",
              belong: "宝坻区",
              label: {
                show: true,
                offset: [10, -5],
              },
            },
            {
              symbol: "",
              name: "市科技局",
              value: [35, -getOutY(35)],
              pointType: "point",
              belong: "和平区",
              label: {
                show: true,
                offset: [10, -5],
              },
            },
            {
              symbol: "",
              name: "市统计局",
              value: [32, -getOutY(32)],
              pointType: "point",
              belong: "和平区",
              label: {
                show: true,
                offset: [10, -5],
              },
            },
            {
              symbol: "",
              name: "和平区政府",
              value: [29, -getOutY(29)],
              pointType: "point",
              belong: "和平区",
            },
            {
              symbol: "",
              name: "蓟州区政府",
              value: [26, -getOutY(26)],
              pointType: "point",
              belong: "蓟州区",
            },
            {
              symbol: "",
              name: "河东区政府",
              value: [23, -getOutY(23)],
              pointType: "point",
              belong: "河东区",
            },
            {
              symbol: "",
              name: "市人防办",
              value: [20, -getOutY(20)],
              pointType: "point",
              belong: "河东区",
            },
            {
              symbol: "",
              name: "市粮食和物资储备局",
              value: [17, -getOutY(17)],
              pointType: "point",
              belong: "河东区",
            },
            {
              symbol: "",
              name: "市场监管委",
              value: [14, -getOutY(14)],
              pointType: "point",
              belong: "河东区",
            },
            {
              symbol: "",
              name: "河西区政府",
              value: [11, -getOutY(11)],
              pointType: "point",
              belong: "河西区",
            },
            {
              symbol: "",
              name: "市戒毒局",
              value: [8, -getOutY(8)],
              pointType: "point",
              belong: "河西区",
            },
            {
              symbol: "",
              name: "市安全局",
              value: [5, -getOutY(5)],
              pointType: "point",
              belong: "河西区",
            },
            {
              symbol: "",
              name: "市农委",
              value: [2, -getOutY(2)],
              pointType: "point",
              belong: "河西区",
            },
            {
              symbol: "",
              name: "市文旅局",
              value: [-1, -getOutY(-1)],
              pointType: "point",
              belong: "河西区",
            },
            {
              symbol: "",
              name: "市纪检委",
              value: [-4, -getOutY(-4)],
              pointType: "point",
              belong: "河西区",
            },
            {
              symbol: "",
              name: "静海区政府",
              value: [-7, -getOutY(-7)],
              pointType: "point",
              belong: "静海区",
            },
            {
              symbol: "",
              name: "北辰区政府",
              value: [-10, -getOutY(-10)],
              pointType: "point",
              belong: "北辰区",
            },
            {
              symbol: "",
              name: "红桥区政府",
              value: [-13, -getOutY(-13)],
              pointType: "point",
              belong: "红桥区",
            },
            {
              symbol: "",
              name: "滨海新区政府",
              value: [-16, -getOutY(-16)],
              pointType: "point",
              belong: "滨海新区",
            },
            {
              symbol: "",
              name: "宁河区政府",
              value: [-19, -getOutY(-19)],
              pointType: "point",
              belong: "宁河区",
            },
            {
              symbol: "",
              name: "市退役军人局",
              value: [-22, -getOutY(-22)],
              pointType: "point",
              belong: "烟台道联通机房",
            },
            {
              symbol: "",
              name: "市公积金中心",
              value: [-25, -getOutY(-25)],
              pointType: "point",
              belong: "烟台道联通机房",
            },
            {
              symbol: "",
              name: "市人社局",
              value: [-28, -getOutY(-28)],
              pointType: "point",
              belong: "烟台道联通机房",
            },
            {
              symbol: "",
              name: "市发改委",
              value: [-31, -getOutY(-31)],
              pointType: "point",
              belong: "烟台道联通机房",
            },
            {
              symbol: "",
              name: "市国安委",
              value: [-34, -getOutY(-34)],
              pointType: "point",
              belong: "烟台道联通机房",
            },
            {
              symbol: "",
              name: "市政法委",
              value: [-36, -getOutY(-36)],
              pointType: "point",
              belong: "烟台道联通机房",
              label: {
                show: true,
                offset: [-10, -5],
              },
            },
            {
              symbol: "",
              name: "市财政局",
              value: [-39, -getOutY(-39)],
              pointType: "point",
              belong: "烟台道联通机房",
              label: {
                show: true,
                offset: [-10, -8],
              },
            },
            {
              symbol: "",
              name: "市金融局",
              value: [-42, -getOutY(-42)],
              pointType: "point",
              belong: "烟台道联通机房",
              label: {
                show: true,
                offset: [-10, -8],
              },
            },
            {
              symbol: "",
              name: "市医保局",
              value: [-45, -getOutY(-45)],
              pointType: "point",
              belong: "烟台道联通机房",
              label: {
                show: true,
                offset: [-12, -10],
              },
            },
            {
              symbol: "",
              name: "市信访办",
              value: [-47.5, -getOutY(-47.5)],
              pointType: "point",
              belong: "烟台道联通机房",
              label: {
                show: true,
                offset: [-12, -12],
              },
            },
            {
              symbol: "",
              name: "市住建局",
              value: [-49.3, -getOutY(-49.3)],
              pointType: "point",
              belong: "烟台道联通机房",
              label: {
                show: true,
                offset: [-15, -15],
              },
            },
            {
              symbol: "",
              name: "市商务局",
              value: [-49.99, getOutY(-49.99)],
              pointType: "point",
              belong: "烟台道联通机房",
              label: {
                show: true,
                offset: [-15, -18],
              },
            },
            {
              symbol: "",
              name: "市委组织部",
              value: [-49, getOutY(-49)],
              pointType: "point",
              belong: "市政府",
              label: {
                show: true,
                offset: [-15, 20],
              },
            },
            {
              symbol: "",
              name: "市政府服务办",
              value: [-47.2, getOutY(-47.2)],
              pointType: "point",
              belong: "市政府",
              label: {
                show: true,
                offset: [-15, 15],
              },
            },
            {
              symbol: "",
              name: "市信息中心",
              value: [-45, getOutY(-45)],
              pointType: "point",
              belong: "市政府",
              label: {
                show: true,
                offset: [-15, 15],
              },
            },
            {
              symbol: "",
              name: "市工信局",
              value: [-42.5, getOutY(-42.5)],
              pointType: "point",
              belong: "市政府",
              label: {
                show: true,
                offset: [-15, 10],
              },
            },
            {
              symbol: "",
              name: "市高检",
              value: [-40, getOutY(-40)],
              pointType: "point",
              belong: "市政府",
              label: {
                show: true,
                offset: [-12, 8],
              },
            },
            {
              symbol: "",
              name: "市机关管理局",
              value: [-37.5, getOutY(-37.5)],
              pointType: "point",
              belong: "市政府",
              label: {
                show: true,
                offset: [-10, 5],
              },
            },
            {
              symbol: "",
              name: "市编办",
              value: [-35, getOutY(-35)],
              pointType: "point",
              belong: "市政府",
            },
            {
              symbol: "",
              name: "市机要局",
              value: [-32.5, getOutY(-32.5)],
              pointType: "point",
              belong: "市政府",
            },
            {
              symbol: "",
              name: "市政府办公厅",
              value: [-30, getOutY(-30)],
              pointType: "point",
              belong: "市政府",
            },
            {
              symbol: "",
              name: "市委网信办",
              value: [-27.5, getOutY(-27.5)],
              pointType: "point",
              belong: "市政府",
            },
            {
              symbol: "",
              name: "市委办公厅",
              value: [-25, getOutY(-25)],
              pointType: "point",
              belong: "市政府",
            },
            {
              symbol: "",
              name: "市财政局数据中心",
              value: [-22.5, getOutY(-22.5)],
              pointType: "point",
              belong: "市人大",
            },
            {
              symbol: "",
              name: "市政协办公厅",
              value: [-20, getOutY(-20)],
              pointType: "point",
              belong: "市政协",
            },
            {
              symbol: "",
              name: "津南区政府",
              value: [-17.5, getOutY(-17.5)],
              pointType: "point",
              belong: "津南区",
            },
            {
              symbol: "",
              name: "市人大办公厅",
              value: [-15, getOutY(-15)],
              pointType: "point",
              belong: "津南区",
            },
            {
              symbol: "",
              name: "华苑数据中心",
              value: [-12.5, getOutY(-12.5)],
              pointType: "point",
              belong: "华苑IDC",
            },
            {
              symbol: "",
              name: "市民政局",
              value: [-10, getOutY(-10)],
              pointType: "point",
              belong: "华苑IDC",
            },
            {
              symbol: "",
              name: "市审计局",
              value: [-7.5, getOutY(-7.5)],
              pointType: "point",
              belong: "科技信息所",
            },
            {
              symbol: "",
              name: "市国资委",
              value: [-5, getOutY(-5)],
              pointType: "point",
              belong: "科技信息所",
            },
            {
              symbol: "",
              name: "南开区",
              value: [6, getY(6)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "河北区",
              value: [12, getY(12)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "西青区",
              value: [18, getY(18)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "空港IDC",
              value: [24, getY(24)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "武清区",
              value: [30, getY(30)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "市电子政务中心",
              value: [36, getY(36)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "东丽区",
              value: [36, -getY(36)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "宝坻区",
              value: [30, -getY(30)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "和平区",
              value: [24, -getY(24)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "蓟州区",
              value: [18, -getY(18)],
              pointType: "cloud",
            },
            {
              level: 4,
              symbol: "",
              name: "河东区",
              value: [11, -getY(11)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "河西区",
              value: [4, -getY(4)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "静海区",
              value: [-4, -getY(-4)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "北辰区",
              value: [-11, -getY(-11)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "红桥区",
              value: [-18, -getY(-18)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "滨海新区",
              value: [-24, -getY(-24)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "宁河区",
              value: [-30, -getY(-30)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "烟台道联通机房",
              value: [-36, -getY(-36)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "市政府",
              value: [-36, getY(-36)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "市人大",
              value: [-30, getY(-30)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "市政协",
              value: [-24, getY(-24)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "津南区",
              value: [-18, getY(-18)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "华苑IDC",
              value: [-12, getY(-12)],
              pointType: "cloud",
            },
            {
              symbol: "",
              name: "科技信息所",
              value: [-6, getY(-6)],
              pointType: "cloud",
            },
          ];
        let chartInit=echarts.init(chartRef.current)
        items.forEach((el, index) => {
  if (el.pointType === "cloud") {
    /* (el.symbol ='E:/桌面/image/下载.png') */ 
      (el.symbolSize = [56, 35]);
    el.label = {
      normal: {
        show: true,
        position: "bottom",
        borderWidth: 1,
        borderRadius: 12,
        padding: [4, 8, 4, 8],
        distance: 10,
        color: "rgb(255,255,255)",
        borderColor: "rgb(89,197,238)",
      },
    };
  } else if (el.pointType === "point") {
    el.itemStyle = {
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
          offset: 0,
          color: "#0ceffd",
        },
        {
          offset: 1,
          color: "#0fffff",
        },
      ]),
    };
    if (!el.label) {
      el.label = {
        show: true,
      };
    }
    el.label.width = 200;
    el.label.color = {
      lineColor: {
        color: "rgb(24,163,239)",
      },
    };
    if (index < 38) {
      el.label.rotate = 57 - 3 * index;
      el.label.align = "left";
      if (!el.label.offset) {
        el.label.offset = [8, 0];
      }
      if (index < 20) {
        el.label.position = "top";
      } else {
        el.label.position = "bottom";
      }
    } else {
      el.label.rotate = -57 + 3 * (75 - index);
      el.label.align = "right";
      if (!el.label.offset) {
        el.label.offset = [-8, 0];
      }
      if (index > 56) {
        el.label.position = "top";
      } else {
        el.label.position = "bottom";
      }
    }
  }

});
 const dataArr = [];
const targetCoord = [0, 0];
items.forEach((el) => {
  if (el.belong) {
    items.forEach((element) => {
      if (el.belong === element.name) {
        dataArr.push([
          {
            coord: element.value,
          },
          {
            coord: el.value,
          },
        ]);
      }
    });
  } else if (el.pointType !== "none") {
    dataArr.push([
      {
        coord: targetCoord,
      },
      {
        coord: el.value,
      },
    ]);
  }
});
var option = {
    backgroundColor: "#111",
    legend: [],
    xAxis: {
      show: false,
      type: "value",
      max: 50,
      min: -51,
    },
    yAxis: {
      show: false,
      type: "value",
      max: 50,
      min: -50,
    },
    series: [
      {
        type: "graph",
        layout: "none",
        coordinateSystem: "cartesian2d",
        symbolSize: [15, 15],
        z: 3,
        circular: {
          rotateLabel: true,
        },
  
        itemStyle: {
          normal: {
            shadowColor: "none",
          },
        },
        data: items,
      },
      {
        name: "",
        type: "lines",
        coordinateSystem: "cartesian2d",
        z: 1,
        effect: {
          show: true,
          smooth: false,
          trailLength: 0,
          symbol:
            "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAhCAYAAADtR0oPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB2ElEQVQ4T32USU7DQBBFbcKMAAFigcSSg3ADtmzZc0juwQ6JMA9hCBAG81/Rv9W2HEp6cae7fk1tuW6appLVCWwmPTEOw0H2ww8CHHEaiLmERTh9ic/0bBBwiNOiWE7MCwynsXgVH2KCYFYLnNfFhtgSiMj8Lu4TIzFGQLQ1sS12xZFA8CZuxYk4FVdiRDmwIBDtiH1xIA7FsdgTZF4SA5xJTcNE3RSeio1gq4I+a08DAaWtiBhfMpqmP0T0mgXlaL/ZSMY4icx+3JMFRKUUnozPNhHs+TzuwBtEJiJztzEpAlBaXBwCR0bAIZdkQ2xBBC4FbJLhWdhehAUEzBn4A9SMkw0xe87QKolNDh+FjTUZyEzAXJKzcMA7Y0PgDFNLehC2O9HbQ5mBHnDAeEvLKYUA448z8EozTvZ4W8sessAZEHBZ3AWi8h6ikq6ASGSgrCfRvbj8LiFgk0MEzJ9psfaU8Gm9fGVJRKdhMljQyoCx6ZIYLSN1hmhYtEpik5LIgPNNWpdNt0pik2hEZZyXad1bkpt2D0S/EGUPvSW5Bz4pQ0E5UzN4Sjhdi3Pxb9NEcQbqPxNuGEGYv94Iux9ll1ESH2M9wywyWDj9LWOdM9hKZxsOyamqfgG1ZQ8JFbfSTwAAAABJRU5ErkJggg==",
          symbolSize: [10, 30],
          period: 4,
          delay: 2,
        },
  
        lineStyle: {
          width: 2,
          color: "rgb(255,255,255)",
          curveness: 0,
        },
        data: dataArr,
      },
    ],
  };
  chartInit.setOption(option)
    },[])
    return <div style={{ textAlign: "center" }}>
   
    <div ref={chartRef} style={{ height: 920,width:'1550px',display:'flex',justifyContent:'center' }}></div>
  </div>
}

export default PieNet