import fs from "node:fs";
import path from "node:path";
const css = fs.readFileSync("app/globals.css","utf8") + fs.readFileSync("app/components.css","utf8");
const classes = [...new Set([...css.matchAll(/\.([a-zA-Z][\w-]*)/g)].map(m=>m[1]))];
let src = "";
const walk = d => fs.readdirSync(d,{withFileTypes:true}).forEach(e=>{
  const p = path.join(d,e.name);
  if (e.isDirectory()) { if (!["node_modules",".next"].includes(e.name)) walk(p); }
  else if (/\.(js|jsx|mjs)$/.test(e.name)) src += fs.readFileSync(p,"utf8");
});
["components","app","data"].forEach(walk);
const unused = classes.filter(c => !new RegExp("(?<![\w-])" + c + "(?![\w-])").test(src));
console.log("classes:", classes.length, "| unused:", unused.length);
console.log(unused.join("  "));
