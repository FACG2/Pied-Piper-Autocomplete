(function(){

var countries=document.getElementById('countryQ');
var universties=document.getElementById('uniQ');
var submit=document.getElementById('submited');

var urls={
	coun:'/api/country/q?=',
	uni:'/api/uni/q?='
}
countries.addEventListner('keyup',function(){
	_request(url , ()=>{
		if()
	})

}) 




}
function showSug(data ,thisElement){
	var OptionList=document.getElementById(thisElement.list)
		data.map(function(option)){
		var optionItem=document.createElement('option');
		optionItem.classlist.add('option');
		optionItem.textContent=option;
		OptionList.appendChiled(optionItem);
		}
	}

})()




// <datalist id="browsers">
//   <option value="Internet Explorer">
//   <option value="Firefox">
//   <option value="Chrome">
//   <option value="Opera">
//   <option value="Safari">
// </datalist>