function setHtmlFoot(){
	var win=document.documentElement||document.getElementsByTagName("html")[0];
	var winWidth=win.offsetWidth;
	var footsize=100*winWidth/750;
	win.style.fontSize=footsize+"px";
}
window.onpageshow=function(){
	setHtmlFoot();
}
setHtmlFoot();
//截流
function debounce(fn,time){
	var timer=null;
	return function(){
		clearTimeout(timer);
		var args=arguments;
		timer=setTimeout(function(){
			fn.apply(null,args);
			
		},time)
	}
}
var setsize=debounce(setHtmlFoot,300);
window.onresize=function(){
	setsize();
}