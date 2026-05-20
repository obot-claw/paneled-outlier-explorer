d3.csv('https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/renderer-specific/adbds.csv').then(data => {
  const measures = ['Albumin','Creatinine','Total Bilirubin'];
  const charts = document.getElementById('charts');
  charts.innerHTML = '';
  measures.forEach((m, idx) => {
    const box = document.createElement('section'); box.className = 'panel'; box.innerHTML = `<h2>${m}</h2><canvas></canvas>`; charts.appendChild(box);
    const rows = data.filter(d => d.TEST === m && d.VISITN && d.STRESN);
    const visits = [...new Set(rows.map(d => +d.VISITN))].sort((a,b)=>a-b);
    const mean = visits.map(v => { const vals = rows.filter(d=>+d.VISITN===v).map(d=>+d.STRESN).filter(Number.isFinite); return vals.reduce((a,b)=>a+b,0)/vals.length; });
    new Chart(box.querySelector('canvas'), { type:'line', data:{ labels:visits, datasets:[{label:m, data:mean, borderColor:['#2563eb','#16a34a','#dc2626'][idx]}] }, options:{plugins:{legend:{display:false}}, scales:{x:{title:{display:true,text:'Visit'}}, y:{title:{display:true,text:'Mean result'}}}} });
  });
});
