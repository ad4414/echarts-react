import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const Three3D = () => {
  const stageRef = useRef(null);

  useEffect(() => {
    console.log(stageRef.current);
    let mesh = [];
    let geometry = [];
    const scene = new THREE.Scene();
    // 模型对象
    for (let i = 0; i <= 3; i++) {
      geometry[i] = new THREE.CylinderGeometry(30, 30, 30);
      const material = new THREE.MeshLambertMaterial({
        color: "red",
      });
      mesh[i] = new THREE.Mesh(geometry[i], material);
    
      
      if (i % 2 === 0 ) {
        mesh[i].position.set(50 * i, 0, 0);
      } else if (i % 2 === 1) {
        mesh[i].position.set(0, i * 50, 0);
      } else {
        mesh[i].position.set(0, 0, i * 50);
      }

      scene.add(mesh[i]);
    }

    //点光源位置
    /* const pointLight = new THREE.PointLight(0xffffff, 1.0);
        pointLight.intensity = 100000;//光照强度
        pointLight.decay = 0.0;//设置光源不随距离衰减
        pointLight.position.set(400, 400, 400);//点光源放在x轴上
        scene.add(pointLight); //点光源添加到场景中
        */

    const ambient = new THREE.AmbientLight(0xffffff, 4);
    scene.add(ambient);
    // AxesHelper：辅助观察的坐标系
    const axesHelper = new THREE.AxesHelper(350);
    scene.add(axesHelper);
    const width = window.innerWidth; //宽度
    const height = window.innerHeight; //高度
    // 相机
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    camera.position.set(592, 423, 585);
    camera.lookAt(80, 80, 80);

    // WebGL渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.render(scene, camera);
    const controls = new OrbitControls(camera, renderer.domElement);
    // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
    controls.addEventListener("change", function () {
      renderer.render(scene, camera); //执行渲染操作
    }); //监听鼠标、键盘事件

    //three.js执行渲染命令会输出一个canvas画布(HTML元素)，你可以插入到web页面中
    stageRef.current.appendChild(renderer.domElement);
    function render() {
      renderer.render(scene, camera); //执行渲染操作
      for (let i = 0; i <= 3; i++) {
        if (i % 2 === 0) {
          mesh[i].rotateX(3);
        } else if (i % 2 === 1) {
          mesh[i].rotateY(3);
        } else {
          mesh[i].rotateZ(3);
        }
        requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
      }
    }
    render();
  });
  return <div id="stage" ref={stageRef}></div>;
};
export default Three3D;
