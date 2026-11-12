// Desktop has its own fixed 1707 CSS px layout viewport; mobile keeps its 500 px baseline.
(()=>{if(window.top!==window.self||innerWidth<=700)return;const page=location.pathname.split('/').pop()||'index.html';if(page==='desktop-preview.html'||page==='measure-desktop-baseline.html')return;location.replace('desktop-preview.html?page='+encodeURIComponent(page+location.search+location.hash));})();
