import{j as e}from"./jsx-runtime.PRPpl5vZ.js";import{R as u,r as m}from"./index.RYns6xqu.js";import{C as f,O as j,u as h,V as p}from"./OrbitControls.zd0-FmQl.js";import{T as y}from"./Text.DsjkOTRh.js";function g({start:i,end:r,intensity:a=1,color:t="#3b82f6"}){m.useRef();const o=m.useRef(Array.from({length:5},()=>({progress:Math.random(),speed:Math.random()*.02+.01,size:Math.random()*.05+.02})));h(()=>{o.current.forEach(n=>{n.progress+=n.speed,n.progress>1&&(n.progress=0)})});const s=new p(...i),c=new p(...r),d=c.clone().sub(s).length();return e.jsxs("group",{children:[e.jsxs("mesh",{children:[e.jsx("cylinderGeometry",{args:[.02,.02,d,8]}),e.jsx("meshStandardMaterial",{color:t,transparent:!0,opacity:.3})]}),o.current.map((n,l)=>{const x=s.clone().lerp(c,n.progress);return e.jsxs("mesh",{position:x,children:[e.jsx("sphereGeometry",{args:[n.size,8,8]}),e.jsx("meshStandardMaterial",{color:t,emissive:t,emissiveIntensity:a})]},l)})]})}function v({position:i,name:r,type:a="device",connections:t=[]}){const o=m.useRef();return h(({clock:s})=>{o.current&&(o.current.rotation.y=s.getElapsedTime()*.5)}),e.jsxs("group",{position:i,children:[e.jsxs("group",{ref:o,children:[e.jsxs("mesh",{children:[e.jsx("boxGeometry",{args:[.5,.5,.5]}),e.jsx("meshStandardMaterial",{color:"#1e293b",metalness:.7,roughness:.3})]}),[0,1,2,3].map(s=>e.jsxs("mesh",{position:[Math.cos(s/4*Math.PI*2)*.4,0,Math.sin(s/4*Math.PI*2)*.4],children:[e.jsx("sphereGeometry",{args:[.1,16,16]}),e.jsx("meshStandardMaterial",{color:"#3b82f6",emissive:"#3b82f6",emissiveIntensity:.5})]},s))]}),e.jsx(y,{position:[0,.8,0],fontSize:.3,color:"white",anchorX:"center",anchorY:"middle",children:r}),t.map((s,c)=>e.jsx(g,{start:i,end:s.position,intensity:s.intensity,color:s.color},c))]})}function R(){const[i,r]=u.useState([]);return m.useEffect(()=>{r([{name:"Hub",position:[0,0,0],type:"hub",connections:[{position:[-3,2,-3],intensity:.8,color:"#3b82f6"},{position:[3,2,-3],intensity:.6,color:"#22c55e"},{position:[-3,2,3],intensity:.4,color:"#8b5cf6"},{position:[3,2,3],intensity:.7,color:"#eab308"}]},{name:"Device 1",position:[-3,2,-3],type:"device",connections:[]},{name:"Device 2",position:[3,2,-3],type:"device",connections:[]},{name:"Device 3",position:[-3,2,3],type:"device",connections:[]},{name:"Device 4",position:[3,2,3],type:"device",connections:[]}])},[]),e.jsx("div",{className:"w-full h-[500px]",children:e.jsxs(f,{camera:{position:[8,8,8],fov:45},children:[e.jsx("ambientLight",{intensity:.5}),e.jsx("pointLight",{position:[10,10,10],intensity:.5}),e.jsx("spotLight",{position:[0,10,0],angle:.5,penumbra:1,intensity:.5}),i.map((a,t)=>e.jsx(v,{...a},t)),e.jsx(j,{minPolarAngle:Math.PI/4,maxPolarAngle:Math.PI/2,minDistance:5,maxDistance:15})]})})}export{R as NetworkTraffic};