function UnityProgress(a,b){console.log(b),a.Module&&(a.logo||(a.logo=document.createElement("div"),a.logo.className="logo "+a.Module.splashScreenStyle,a.container.appendChild(a.logo)),a.progress||(a.progress=document.createElement("div"),a.progress.className="progress "+a.Module.splashScreenStyle,a.progress.empty=document.createElement("div"),a.progress.empty.className="empty",a.progress.appendChild(a.progress.empty),a.progress.full=document.createElement("div"),a.progress.full.className="full",a.progress.appendChild(a.progress.full),a.container.appendChild(a.progress),a.progress.txt=document.createElement("div"),a.progress.txt.className="process-text",a.progress.txt.style="text-align: center;color: #ffffff;line-height: 43px;font-size: 23px;font-weight: bold;font-family: arial;",a.progress.appendChild(a.progress.txt)),a.progress.full.style.width=100*b+"%",a.progress.empty.style.width=100*(1-b)+"%",a.progress.txt.innerHTML=(100*b.toFixed(3)).toFixed(0)+"%",b>=.9&&(a.progress.txt.innerHTML="Initializing..."),1==b&&(a.logo.style.display=a.progress.style.display="none"))}window.onresize=function(){var a,b,c;"function"==typeof gameSizeInit&&gameSizeInit(),a="undefined"!=typeof window.gameInstance?window.gameInstance:unityInstance,a&&(b=a.container,c=document.getElementById("#canvas"),c&&b&&(c.setAttribute("width",b.style.width.split("px")[0]),c.setAttribute("height",b.style.height.split("px")[0])))},WebglCheckCount=0,WebglCheckInter=setInterval(function(){var a,c,b,d;if("undefined"!=typeof UnityLoader&&(a=UnityLoader.SystemInfo))if(a.mobile||a.hasWebGL<=1){if(window.alert=function(a){return console.error(a),!0},b=document.getElementsByTagName("button"),WebglCheckCount>8)return clearInterval(WebglCheckInter),void 0;b[0]?(c=b[0],document.all?c.click():(d=document.createEvent("MouseEvents"),d.initEvent("click",!0,!0),c.dispatchEvent(d)),clearInterval(WebglCheckInter)):WebglCheckCount++}else clearInterval(WebglCheckInter)},250);