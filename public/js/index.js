	(function(){
// var request= require('./request.js')
var countries=document.getElementById('countryQ');
var universties=document.getElementById('uniQ');
var submit=document.getElementById('submited');

var urls={
	coun:'https://pied-piper-universities.herokuapp.com/api/country/?q=',
	uni:'https://pied-piper-universities.herokuapp.com/api/uni/?q=',
	sUn:'https://pied-piper-universities.herokuapp.com/api/getUni/?q='
}
countries.addEventListener('keyup',function(event){
	
	_request(urls.coun+event.target.value, (err,data)=>{
		if(err)
		console.log(err);
		else{
		showSug(data, event.target);
			}
	})
}) 

universties.addEventListener('keyup',function(event){
	var country=document.getElementById('countryQ').value.replace(/ /g, '+') ;

	
	_request(urls.uni+event.target.value.replace(/ /g, '+')+'&\?c='+country, (err,data)=>{
		if(err)
			console.log(err);
		else{
			showSug(data, event.target);
		}
		
	})

}) 

submit.addEventListener('click',function(event){
	event.preventDefault();
	var universiy=document.getElementById('uniQ').value.replace(/ /g, '+') ;

	
	_request(urls.sUn+universiy.replace(/ /g, '+'), (err,data)=>{
		if(err){
			console.log(err);
		}else{
			showUniDet(data);
		}
		
	})

}) 


function showSug(data ,thisElement){
	var OptionList=document.getElementById(thisElement.list.id);
		OptionList.innerHTML="";
		data.map(function(option){
		var optionItem=document.createElement('option');
		optionItem.classList.add('option');
		optionItem.textContent=option;
		OptionList.appendChild(optionItem);
		})
	}

function showUniDet(data){

	if(data[0] != null){
		var uniDiv = document.getElementById("uni-details");
		uniDiv.innerHTML="";
		countries.value="";
		universties.value="";
		var universiyDomain=document.createElement('a');
		universiyDomain.classList.add('uniDomain');
		universiyDomain.setAttribute("href",data[0].web_page);
		universiyDomain.setAttribute("target","_blank");	

		uniDiv.appendChild(universiyDomain);

		var universiyName=document.createElement('h2');
		universiyName.classList.add('uniName');
		universiyName.textContent=data[0].name;
		universiyDomain.appendChild(universiyName);

		var universiyCountry=document.createElement('p');
		universiyCountry.classList.add('uniCountry');
		universiyCountry.textContent=data[0].country;
		uniDiv.appendChild(universiyCountry);			
		}else{
			ifUniNotFound();
		}
		


	}

function ifUniNotFound(){
var uniDiv = document.getElementById("uni-details");
	uniDiv.innerHTML = "";
	countries.value="";
	universties.value="";
	var notFound=document.createElement('p');
		notFound.classList.add('notFound');
		notFound.textContent="Oops! there is no university matches your search!";
		uniDiv.appendChild(notFound);
}

//uni-details
})()




// <datalist id="browsers">
//   <option value="Internet Explorer">
//   <option value="Firefox">
//   <option value="Chrome">
//   <option value="Opera">
//   <option value="Safari">
// </datalist>