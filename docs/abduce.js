(function(){
const DATA=[["Mercury",0.3871,0.2408],["Venus",0.7233,0.6152],["Earth",1.0,1.0],
            ["Mars",1.5237,1.8809],["Jupiter",5.2029,11.862],["Saturn",9.5367,29.457]];
const OPS=["*","/","+","-"], TOL=3e-3;
function trees(n){ if(n===1) return [null]; let out=[];
  for(let k=1;k<n;k++) for(const l of trees(k)) for(const r of trees(n-k)) out.push([l,r]);
  return out; }
function build(sh,lv,op,st){ if(sh===null) return lv[st.i++];
  const l=build(sh[0],lv,op,st), o=op[st.j++], r=build(sh[1],lv,op,st); return [o,l,r]; }
function ev(e,a,T){ if(e==="a") return a; if(e==="T") return T;
  const x=ev(e[1],a,T), y=ev(e[2],a,T); if(x===null||y===null) return null;
  let v; switch(e[0]){case "*":v=x*y;break; case "/":v=Math.abs(y)<1e-12?null:x/y;break;
    case "+":v=x+y;break; default:v=x-y;}
  return (v===null||!isFinite(v)||Math.abs(v)>1e12)?null:v; }
function show(e){ return (typeof e==="string")?e:"("+show(e[1])+e[0]+show(e[2])+")"; }
function spread(vs){ if(vs.some(v=>v===null)) return null;
  const m=vs.reduce((p,c)=>p+c,0)/vs.length; if(Math.abs(m)<1e-9) return null;
  return (Math.max(...vs)-Math.min(...vs))/Math.abs(m); }
function combos(pool,n){ let out=[[]];
  for(let k=0;k<n;k++){ const nx=[]; for(const c of out) for(const p of pool) nx.push(c.concat(p)); out=nx; }
  return out; }
window.abduce=function(){
  let seed=1, rnd=()=> (seed=(seed*1103515245+12345)%2147483648)/2147483648;
  const fake=[]; for(let i=0;i<8;i++) fake.push([0.2+rnd()*9.8, 0.2+rnd()*29.8]);
  let checked=0, seen=new Set(), hits=[];
  for(let n=1;n<=5;n++){
    for(const sh of trees(n)) for(const lv of combos(["a","T"],n)) for(const op of combos(OPS,n-1)){
      const e=build(sh,lv,op,{i:0,j:0}); checked++;
      const sr=spread(DATA.map(d=>ev(e,d[1],d[2]))); if(sr===null||sr>TOL) continue;
      const sf=spread(fake.map(d=>ev(e,d[0],d[1]))); if(sf===null||sf<0.1) continue;
      const vals=DATA.map(d=>ev(e,d[1],d[2]));
      const key=vals.map(v=>Math.log(Math.abs(v)+1e-30).toFixed(9)).join(",");
      if(seen.has(key)) continue; seen.add(key);
      hits.push({expr:show(e), val:vals.reduce((p,c)=>p+c,0)/vals.length, sr:sr, sf:sf, n:n});
    }
    if(hits.length) return {hits:hits, checked:checked, leaves:n};
  }
  return {hits:[], checked:checked, leaves:null};
};
})();
