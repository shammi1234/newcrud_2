
document.getElementById("myForm").addEventListener("submit",(e)=>{ e.preventDefault()
    manageData()});
  

let id="no";
// localStorage.clear();
selectData();

function manageData(){
	 document.getElementById('msg').innerHTML="";
	 let name=document.getElementById('fullname').value;
  
	if(name==''){
       
		document.getElementById('msg').innerHTML='Please enter name';
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[name];
				setCrudData(data);
			}else{
				arr.push(name);
               
				setCrudData(arr);
               
			document.getElementById('msg').innerHTML='Data added';
		}}else{
            updateData();
            document.getElementById('msg').innerHTML='Data updated';
        }
		document.getElementById('fullname').value='';
		selectData();
		 document.getElementById('msg').innerHTML="";
	}
   
  
}
const updateData=()=>{
   
    let name=document.getElementById('fullname').value;
    let arr=getCrudData();
    arr[id]=name;
    setCrudData(arr);
    document.getElementById('msg').innerHTML='';
}



function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		let sno=1;
		for(let k in arr){
			html=html+`<tr><td>${sno}</td><td>${arr[k]}</td><td><button  onclick="editData(${k})">Edit</button>&nbsp;<button onclick="deleteData(${k})">Delete</button></td></tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function editData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('fullname').value=arr[rid];
   
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}

