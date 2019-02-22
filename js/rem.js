function setHtmlFoot(){
	var win=document.documentElement||document.getElementsByTagName("html")[0];
	var winWidth=win.offsetWidth;
	var footsize=100*winWidth/750;
	win.style.fontSize=footsize+"px";
}
window.onpageshow=function(){
	//加延时解决ios6p以上机型点到外部在返回回来页面布局乱掉就是rem失效问题
	setTimeout(function(){
		setHtmlFoot();
	},10)
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