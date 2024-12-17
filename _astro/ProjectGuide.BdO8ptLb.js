import{j as e}from"./jsx-runtime.PRPpl5vZ.js";import{r}from"./index.RYns6xqu.js";function f({title:x,description:h,sections:l}){const[t,d]=r.useState(0),[s,a]=r.useState(0),[i,m]=r.useState(!1),n=l[t],c=n.steps[s],b=()=>{s<n.steps.length-1?a(s+1):t<l.length-1&&(d(t+1),a(0))},u=()=>{s>0?a(s-1):t>0&&(d(t-1),a(l[t-1].steps.length-1))};return e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-accent-light mb-4",children:x}),e.jsx("p",{className:"text-accent-light/90 mb-8",children:h}),e.jsxs("div",{className:"mb-8",children:[e.jsx("div",{className:"flex justify-between mb-2",children:l.map((g,o)=>e.jsx("button",{onClick:()=>{d(o),a(0)},className:`text-sm font-medium ${o===t?"text-accent":"text-accent-light/60"}`,children:g.title},o))}),e.jsx("div",{className:"h-2 bg-background-dark rounded-full",children:e.jsx("div",{className:"h-full bg-accent rounded-full transition-all duration-300",style:{width:`${(t*n.steps.length+s+1)/(l.length*n.steps.length)*100}%`}})})]}),e.jsxs("div",{className:"bg-background-dark rounded-lg border border-accent/20 p-6 mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-accent-light mb-4",children:c.title}),e.jsx("div",{className:"prose prose-invert max-w-none mb-6",children:e.jsx("p",{children:c.content})}),c.code&&e.jsxs("div",{className:"mt-4",children:[e.jsx("button",{onClick:()=>m(!i),className:"text-accent hover:text-accent-light mb-2",children:i?"Hide Code":"Show Code"}),i&&e.jsx("pre",{className:"bg-[#1a1b26] p-4 rounded-lg overflow-x-auto",children:e.jsx("code",{className:"text-accent-light",children:c.code})})]}),c.image&&e.jsx("img",{src:c.image,alt:c.title,className:"mt-4 rounded-lg border border-accent/20"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{onClick:u,disabled:t===0&&s===0,className:"px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed",children:"Previous"}),e.jsx("button",{onClick:b,disabled:t===l.length-1&&s===n.steps.length-1,className:"px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed",children:"Next"})]})]})}export{f as default};