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
}