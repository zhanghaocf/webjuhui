window.onload=function(){
	var detail=document.getElementById("rule");
	var mask=document.getElementById("z_mask");
	var close=document.getElementById("z_close");
	detail.addEventListener('touchstart',function(){
		mask.style.display="block";
	},false);
	close.addEventListener('touchstart',function(){
		mask.style.display="none";
	},false)
	mask.addEventListener('touchmove',function(e){
		var e=e||window.event;
		e.preventDefault();
	},false)
	document.querySelector('.z_wrap').addEventListener('touchmove',function(e){
		var e=e||window.event;
		e.cancelBubble=true;
	},false)
}