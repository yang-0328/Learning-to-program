// 当前util.js为工具类 任何人都可以使用
/**
* 动态添加class
**/
function addClass(el,className){
	var oldClassStr = '';
	// 给表添加属性 添加之前应该先合并之前的class
	//假如有class属性
	// 0 '' null  undefined false  ==> 在if()语句中都是false
	if(el.getAttribute('class')){
		// 添加之前应该判断有没有 如果已经存在 直接return
		oldClassStr = el.getAttribute('class'); // null
		//danger strong ==> ['danger','strong'];
		var oldClassArr = oldClassStr.split(' '); 
		//判断数组['danger','strong']是否存在className
		if(oldClassArr.indexOf(className)!=-1){
			console.log('已存在"'+className+'",无需添加.');
			return ;
		}else{
			oldClassStr += ' ';
		}
	}
	//追加
	oldClassStr += className;
	el.setAttribute('class',oldClassStr);
}

function delClass(el,className){
	// 1.判断有没有class属性
	if(!el.getAttribute('class')){
		return ;
	}
	// 没学过: 'danger strong active' ==> 'danger active';
	var oldClassStr = el.getAttribute('class');
	//可以实现 ['danger','strong','active'] ==> ['danger','active'];
	var oldClassArr = oldClassStr.split(' ');
	//获取字符串在数组中对应的下标
	var index = oldClassArr.indexOf(className);
	//如果!=-1 说明存在 才可以执行删除
	if(index!=-1){
		//执行删除
		oldClassArr.splice(index,1); //['danger','active'];
	}
	//数组变字符串 重新赋值['danger','active'] ==> 'danger active';
	oldClassStr = oldClassArr.join(' '); // 
	el.setAttribute('class',oldClassStr);
}
