import sharp from "sharp";
const [file,l,t,w,h,scale,out] = process.argv.slice(2);
await sharp(file).extract({left:+l,top:+t,width:+w,height:+h}).resize({width: Math.round(+w*(+scale||2))}).toFile(out);
console.log("ok", out);
