const I=["/images/produk-00.jpg", "/images/produk-01.jpg", "/images/produk-02.jpg", "/images/produk-03.jpg", "/images/produk-04.jpg", "/images/produk-05.jpg", "/images/produk-06.jpg", "/images/produk-07.jpg", "/images/produk-08.jpg", "/images/produk-09.jpg", "/images/produk-10.jpg", "/images/produk-11.jpg", "/images/produk-12.jpg", "/images/produk-13.jpg", "/images/produk-14.jpg", "/images/produk-15.jpg", "/images/produk-16.jpg", "/images/produk-17.jpg", "/images/produk-18.jpg", "/images/produk-19.jpg", "/images/produk-20.jpg"];
const WA="62816145650"+"8";
const C={all:"Semua",standing:"Standing flower",box:"Bunga box",meja:"Bunga meja",hampers:"Hampers",resmi:"Pita peresmian",kendaraan:"Pita kendaraan",dekor:"Simbolis & dekorasi"};
const P=[
{n:"Standing Balon Universal",c:"standing",p:500000,i:16,d:"Tinggi 1,5 m"},
{n:"Standing Flower Gold Festive",c:"standing",p:590000,i:17,w:1},
{n:"Standing Flower Merah Putih",c:"standing",p:590000,i:18,w:1},
{n:"Standing Flower Pink Ungu",c:"standing",p:750000,i:19,w:1},
{n:"Standing Flower Putih Hijau",c:"standing",p:790000,i:20,w:1},
{n:"Bunga Box Hortensia",c:"box",p:195000,i:0,w:1},
{n:"Bunga Box Villa",c:"box",p:250000,i:1,w:1},
{n:"Bunga Box Kiut",c:"box",p:250000,i:2},
{n:"Bunga Meja Harmoni",c:"meja",p:150000,i:4,d:"Bunga segar"},
{n:"Bunga Meja Artificial",c:"meja",p:50000,i:3,w:1,d:"Awet, tanpa layu"},
{n:"Hampers Buah",c:"hampers",p:500000,i:5,d:"Buah segar premium"},
{n:"Pita Peresmian Hokiplus",c:"resmi",p:150000,u:"set",i:6},
{n:"Pita Peresmian Tapita",c:"resmi",p:35000,u:"pcs",i:8,d:"Diameter 15 cm"},
{n:"Pita Kain Peresmian",c:"resmi",p:300000,u:"meter",i:7,d:"Bisa cetak logo"},
{n:"Pita Mobil Big Fortune",c:"kendaraan",p:690000,i:10},
{n:"Pita Mobil Rajawali",c:"kendaraan",p:99000,i:11},
{n:"Pita Motor Kilo",c:"kendaraan",p:60000,i:13},
{n:"Pita Sepeda Pedal",c:"kendaraan",p:40000,i:12},
{n:"Pita Dekorasi Besar",c:"dekor",p:350000,i:9,d:"90 × 200 cm"},
{n:"Simbolis Kunci",c:"dekor",p:150000,u:"pcs",i:14},
{n:"Simbolis Papan Cek",c:"dekor",p:50000,u:"pcs",i:15,d:"Ukuran A3"}];
const wa=t=>"https://wa.me/"+WA+"?text="+encodeURIComponent(t||"Halo, saya serius mau memesan produk dQueen Florist. Apakah bisa dibantu?");
const rp=n=>"Rp "+n.toLocaleString("id-ID");
document.querySelectorAll("a.wa").forEach(a=>{a.href=wa();a.target="_blank";a.rel="noopener"});
{const a=document.getElementById("promoWa");a.href=wa("Halo dQueen Florist, saya ingin klaim promo Kejutan Disc 10% untuk semua produk.");a.target="_blank";a.rel="noopener"}
document.querySelectorAll("img[data-i]").forEach(m=>m.src=I[m.dataset.i]);
document.getElementById("n").textContent=P.length;
document.getElementById("mn").textContent=rp(Math.min(...P.map(x=>x.p)));
const tabs=document.getElementById("tabs"),grid=document.getElementById("grid");
let cur="all";

function mix(list){
 const g={};
 list.forEach(x=>(g[x.c]=g[x.c]||[]).push(x));
 const q=Object.values(g),out=[];
 while(q.some(a=>a.length))q.forEach(a=>{if(a.length)out.push(a.shift())});
 return out;
}

function draw(){
 tabs.innerHTML=Object.keys(C).map(k=>`<button aria-pressed="${k===cur}" data-k="${k}">${C[k]}</button>`).join("");
 grid.innerHTML=(cur==="all"?mix(P):P.filter(x=>x.c===cur)).map(x=>`<article class="card"><div class="im${x.w?" wb":""}"><img loading="lazy" src="${I[x.i]}" alt="${x.n}"></div><div class="bd"><h3>${x.n}</h3><small>${x.d||C[x.c]}</small><div class="price">${rp(x.p)}${x.u?" / "+x.u:""}</div><a class="btn" target="_blank" rel="noopener" href="${wa("Halo dQueen Florist, saya tertarik dengan "+x.n+" ("+rp(x.p)+"). Apakah masih tersedia?")}">Pesan sekarang</a></div></article>`).join("");
}
tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(b){cur=b.dataset.k;draw()}});
draw();
