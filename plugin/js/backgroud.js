var params = ['大连阿甘科技有限公司','东软睿道教育','大连华企倍力科技有限公司','约翰逊（大连）信息技术有限公司','大连昊天程科技有限公司','大连鲤想科技有限公司','大连鳌想科技有限公司','大连恒信联创电子科技有限公司','鹏讯科技（大连）有限公司','大连育知同创科技有限公司','大连亚迅科技有限公司','大连激发软件科技有限公司','南京西里尼软件科技有限公司','东软睿创科技发展有限公司','滕泰科技发展（大连）有限责任公司','成都迈思信息技术有限公司','北京才秀人人科技有限公司','大连中科云信息技术有限公司','智涵科技（大连）有限公司','大连中源卓志信息技术有限公司','沈阳易思特科技有限公司','东软睿博','大连中钰睿泓科技有限公司','大连焱展信息技术有限公司','大连天易科技有限公司','大连摩比维迪视频系统有限公司','上海众阮信息科技有限公司大连分公司','大连罗兰贝格计算机技术有限公司','博龙软件（大连）有限公司','中远网络物流信息科技有限公司','上海集钢电子商务有限公司','大连多麦德信息科技有限责任公司','大连卓信财务咨询有限公司','甲骨文WDP （大连）授权实训中心','北京中软国际教育科技股份有限公司','大连兰花科技有限公司','大连特攻科技有限公司','大连威翔科技有限公司','大连海蓝达科技有限公司','大连豆瓣网络信息技术有限公司','北京百知尚行科技有限公司','大连三协精密模具有限公司','大连凌致软件有限公司','大连北大青鸟崇德IT教育','大连聚佳信息技术有限公司','大连众卓云科技服务有限公司','大连雨琳信息技术有限公司','大连东软睿创科技发展有限公司','大连东软睿道教育信息服务有限公司','大连友道信软科技有限公司','大连中软卓越信息技术有限公司','大连知润信息科技有限公司','大连淘车网络科技有限公司','易新博恩信息技术（大连）有限公司','中青才智教育投资（北京）有限公司'];
(function filter(){
	var list = $("#resultList");
	var jobs = list.children(".el");
	for(var i=0;i<jobs.length;i++){
		var name = jobs[i].children[1].innerText;
		for(var j = 0;j<params.length;j++){
		    if(name === params[j]){
                jobs[i].remove();
                break;
            }
        }
	}
})();

function addCom(name){
	params[params.length] = name;
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
