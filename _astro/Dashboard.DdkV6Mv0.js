import{j as e}from"./jsx-runtime.PRPpl5vZ.js";import{r as c}from"./index.RYns6xqu.js";import{u as h}from"./AuthContext.DoUrysdl.js";import{C as g,O as u}from"./OrbitControls.zd0-FmQl.js";function j(){const[s,r]=c.useState([]);return c.useEffect(()=>{r([{id:"1",name:"Main Hub",status:"online",type:"hub",lastSeen:new Date},{id:"2",name:"Temperature Sensor",status:"online",type:"sensor",lastSeen:new Date},{id:"3",name:"Light Controller",status:"warning",type:"controller",lastSeen:new Date}])},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"h-48",children:e.jsxs(g,{children:[e.jsx("ambientLight",{intensity:.5}),e.jsx("pointLight",{position:[10,10,10]}),e.jsx(u,{}),s.map((t,l)=>e.jsx(v,{position:[Math.cos(l*(Math.PI*2)/s.length)*2,Math.sin(l*(Math.PI*2)/s.length)*2,0],status:t.status},t.id))]})}),e.jsx("div",{className:"space-y-2",children:s.map(t=>e.jsxs("div",{className:"flex items-center justify-between p-2 bg-primary rounded-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium",children:t.name}),e.jsxs("p",{className:"text-sm text-secondary",children:["Last seen: ",t.lastSeen.toLocaleTimeString()]})]}),e.jsx(y,{status:t.status})]},t.id))})]})}function v({position:s,status:r}){const t=r==="online"?"#22c55e":r==="warning"?"#eab308":"#ef4444";return e.jsxs("mesh",{position:s,children:[e.jsx("sphereGeometry",{args:[.3,32,32]}),e.jsx("meshStandardMaterial",{color:t})]})}function y({status:s}){const r={online:"bg-green-500",warning:"bg-yellow-500",offline:"bg-red-500"};return e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${r[s]}`,children:s})}function b(){const[s,r]=c.useState(0),[t,l]=c.useState(0),[m,x]=c.useState([{id:"1",name:"Secure Messaging",status:"secure",resource:15},{id:"2",name:"Encryption Service",status:"secure",resource:25},{id:"3",name:"Network Scanner",status:"secure",resource:10}]);c.useEffect(()=>{const n=setInterval(()=>{r(a=>{const i=Math.random()*10-5;return Math.max(20,Math.min(80,a+i))}),l(a=>{const i=Math.random()*10-5;return Math.max(30,Math.min(70,a+i))})},2e3);return()=>clearInterval(n)},[]);const d=n=>{switch(n){case"secure":return"bg-green-400";case"warning":return"bg-yellow-400";case"threat":return"bg-red-400";default:return"bg-gray-400"}};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h3",{className:"text-sm text-gray-400",children:"CPU Security"}),e.jsxs("span",{className:"text-sm text-accent-light",children:[Math.round(s),"%"]})]}),e.jsx("div",{className:"relative h-2 bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-accent transition-all duration-500",style:{width:`${s}%`}})}),e.jsxs("div",{className:"mt-2 flex justify-between text-xs text-gray-500",children:[e.jsx("span",{children:"Secure"}),e.jsx("span",{children:"Protected"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h3",{className:"text-sm text-gray-400",children:"Memory Integrity"}),e.jsxs("span",{className:"text-sm text-accent-light",children:[Math.round(t),"%"]})]}),e.jsx("div",{className:"relative h-2 bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 h-full bg-accent transition-all duration-500",style:{width:`${t}%`}})}),e.jsxs("div",{className:"mt-2 flex justify-between text-xs text-gray-500",children:[e.jsx("span",{children:"Protected"}),e.jsx("span",{children:"Encrypted"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsx("h3",{className:"text-sm text-gray-400 mb-4",children:"Secure Processes"}),e.jsx("div",{className:"space-y-3",children:m.map(n=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${d(n.status)}`}),e.jsx("span",{className:"text-sm text-accent-light",children:n.name})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-16 h-1 bg-gray-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-accent",style:{width:`${n.resource}%`}})}),e.jsxs("span",{className:"text-xs text-gray-500",children:[n.resource,"%"]})]})]},n.id))})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsx("h3",{className:"text-sm text-gray-400 mb-2",children:"Memory Protection"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-400"}),e.jsx("span",{className:"text-sm text-accent-light",children:"Active Guard"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsx("h3",{className:"text-sm text-gray-400 mb-2",children:"Process Integrity"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-400"}),e.jsx("span",{className:"text-sm text-accent-light",children:"Verified"})]})]})]})]})}function p(){const[s,r]=c.useState("Active"),[t,l]=c.useState("Maximum"),[m,x]=c.useState("Secure Tunnel"),[d,n]=c.useState(100);return c.useEffect(()=>{const a=setInterval(()=>{n(i=>{const o=Math.random()*10-5;return Math.max(80,Math.min(100,i+o))})},2e3);return()=>clearInterval(a)},[]),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-30"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm text-gray-400",children:"Encryption Status"}),e.jsx("p",{className:"text-lg font-semibold text-accent mt-1",children:s})]}),e.jsx("div",{className:"w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center",children:e.jsx("svg",{className:"w-6 h-6 text-accent",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsx("h3",{className:"text-sm text-gray-400 mb-3",children:"Connection Strength"}),e.jsx("div",{className:"flex space-x-1 h-6",children:[1,2,3,4,5].map(a=>{const i=a*20,o=d>=i;return e.jsx("div",{className:`flex-1 rounded-sm transition-all duration-500 ${o?"bg-accent":"bg-gray-700"}`,style:{height:`${Math.min(100,a*20)}%`,opacity:o?1:.3}},a)})}),e.jsxs("div",{className:"mt-2 text-right text-sm text-accent-light",children:[Math.round(d),"%"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsx("h3",{className:"text-sm text-gray-400 mb-2",children:"Security Level"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-400"}),e.jsx("span",{className:"text-accent-light",children:t})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsx("h3",{className:"text-sm text-gray-400 mb-2",children:"Network Type"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-400"}),e.jsx("span",{className:"text-accent-light",children:m})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 border border-accent/20",children:[e.jsx("h3",{className:"text-sm text-gray-400 mb-3",children:"Security Events"}),e.jsx("div",{className:"space-y-3",children:[{time:"2m ago",event:"Encryption key rotation completed"},{time:"15m ago",event:"Security scan completed"},{time:"1h ago",event:"Connection verified"}].map((a,i)=>e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-accent mt-1.5"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-accent-light",children:a.event}),e.jsx("p",{className:"text-xs text-gray-500",children:a.time})]})]},i))})]})]})}function M(){const{user:s,signOut:r}=h();return e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsxs("div",{className:"flex justify-between items-center mb-8",children:[e.jsxs("h1",{className:"text-3xl font-bold",children:["Welcome, ",s?.email]}),e.jsx("button",{onClick:()=>r(),className:"px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors",children:"Sign Out"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-secondary p-6 rounded-lg shadow-theme",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Device Status"}),e.jsx(j,{})]}),e.jsxs("div",{className:"bg-secondary p-6 rounded-lg shadow-theme",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Resource Usage"}),e.jsx(b,{})]}),e.jsxs("div",{className:"bg-secondary p-6 rounded-lg shadow-theme",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Network Status"}),e.jsx(p,{})]})]})]})}export{M as default};
