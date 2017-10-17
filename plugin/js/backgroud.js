var param = ",大连中钰睿泓科技有限公司,博龙软件（大连）有限公司,中远网络物流信息科技有限公司,上海集钢电子商务有限公司,大连多麦德信息科技有限责任公司,大连卓信财务咨询有限公司,甲骨文WDP （大连）授权实训中心,北京中软国际教育科技股份有限公司,大连兰花科技有限公司,大连特攻科技有限公司,大连威翔科技有限公司,大连海蓝达科技有限公司,大连豆瓣网络信息技术有限公司,北京百知尚行科技有限公司,大连三协精密模具有限公司,大连凌致软件有限公司,大连北大青鸟崇德IT教育,大连聚佳信息技术有限公司,大连众卓云科技服务有限公司,大连雨琳信息技术有限公司,大连东软睿创科技发展有限公司,大连东软睿道教育信息服务有限公司,大连友道信软科技有限公司,大连中软卓越信息技术有限公司,大连知润信息科技有限公司,大连淘车网络科技有限公司,易新博恩信息技术（大连）有限公司,中青才智教育投资（北京）有限公司";

function filter(){
	var list = $("#resultList");
	var jobs = list.children(".el");
	for(var i=0;i<jobs.length;i++){
		var name = jobs[i].children[1].innerText;
		if(param.indexOf(name)>0){
			jobs[i].remove();
		}
	}
}
filter();

function addCom(name){
	param+=(","+name);
	filter(name);
}

function filterSigle(value){
	// noinspection JSAnnotator
    let params = ","+values;
	var list = $("#resultList");
	var jobs = list.children(".el");
	for(var i=0;i<jobs.length;i++){
		var name = jobs[i].children[1].innerText;
		if(params.indexOf(name)>0){
			jobs[i].remove();
		}
	}
}

