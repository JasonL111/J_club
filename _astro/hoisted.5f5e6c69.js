import"https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js";import"./hoisted.6096ba31.js";let p,u,d;const y=(e,t)=>{if(e==null||e==null)return[];let s=e.toString().trim().toLowerCase(),r=[];for(let n=0;n<=s.length-2;n++){let l=lunr.utils.clone(t)||{};l.position=[n,n+2],l.index=r.length,r.push(new lunr.Token(s.slice(n,n+2),l))}return r},R=e=>{const t=e.toString().trim().toLowerCase(),s=[];for(let r=0;r<=t.length-2;r++)s.push(t.slice(r,r+2));return s.join(" ")},k="/search-index.json",E=()=>{let e=new XMLHttpRequest;e.open("GET",k,!0),e.onload=function(){this.status>=200&&this.status<400?(d=JSON.parse(this.response),p=lunr(function(){this.tokenizer=y,this.pipeline.reset(),this.ref("slug"),this.field("title",{boost:10}),this.field("body"),this.metadataWhitelist=["position"],d.forEach(t=>{this.add(t)},this)})):console.error("Error getting Hugo index flie")},e.onerror=function(){console.error("connection error")},e.send()},S=e=>(u=p.search(R(e)),u.map(t=>d.filter(s=>s.slug===t.ref)[0])),q=()=>{const e=document.querySelector("#searchBox");e!==null&&e.addEventListener("keyup",function(t){let s=document.querySelector("#searchResults"),r=t.currentTarget.value;if(r.length<2){s.style.display="none";return}T(S(r)),s.style.display="block"})},T=e=>{const t=document.querySelector("#searchResults"),s=document.querySelector("#searchBox").value,r=100,n=10;for(;t.firstChild;)t.removeChild(t.firstChild);if(!e.length){let o=document.createElement("div");o.className="searchResultPage",o.innerHTML='没有找到 "'+s+'"',t.append(o);return}let l=new Mark(document.querySelector("#searchResults"));e.slice(0,n).forEach((o,f)=>{let i=document.createElement("div");i.className="searchResultPage";let h=u[f].matchData.metadata,m=h[Object.keys(h)[0]].body.position[0][0],g=m-r/2>0?m-r/2:0,a=document.createElement("a");a.className="searchResultTitle",a.href=`/posts/${o.slug}`,a.innerHTML=o.title,i.append(a);let c=document.createElement("div");c.className="searchResultBody",c.innerHTML=o.body.substr(g,r),i.append(c),t.append(i),l.mark(s)})};E();q();
