var employees = [
    {
       emp_id:"cap101",
       emp_name:"sai",
       emp_photo:"https://media-public.canva.com/MADesQ4d7jk/1/thumbnail_large.jpg",
       emp_age:21,
       emp_gender:"male",
       emp_company:"TCS",
       emp_salary:30000,
       emp_designation:"web developer",
       emo_doj: new Date('2015/05/05'),
       emp_location:"orissa",
       emp_education:"btech"
    },
    {
       
        emp_id:"cap102",
        emp_name:"sairam",
        emp_photo:"https://media-public.canva.com/MADesMllVjc/1/thumbnail_large.jpg",
        emp_age:20,
        emp_gender:"male",
        emp_company:"IBM",
        emp_salary:20000,
        emp_designation:"java developer",
        emo_doj: new Date('2016/05/05'),
        emp_location:"hyderabad",
        emp_education:"btech"
    },
    
    {
        emp_id:"cap103",
        emp_name:"ram",
        emp_photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6Ut6xRxQwkvoLVMtIgLWPxCOe39Ooxrh4XSMseF8zYWSARQON",
        emp_age:22,
        emp_gender:"male",
        emp_company:"testyantra",
        emp_salary:10000,
        emp_designation:"sql developer",
        emo_doj: new Date('2014/05/05'),
        emp_location:"banguluru",
        emp_education:"btech"
     },
     {
        emp_id:"cap104",
        emp_name:"sahiti",
        emp_photo:"https://media-public.canva.com/MADaqJSC-xk/1/thumbnail_large-1.jpg",
        emp_age:23,
        emp_gender:"female",
        emp_company:"accenture",
        emp_salary:40000,
        emp_designation:"sql tester",
        emo_doj: new Date('2014/10/05'),
        emp_location:"mumbai",
        emp_education:"btech"
     },
     {
        emp_id:"cap105",
        emp_name:"srija",
        emp_photo:"https://cdn.pixabay.com/photo/2017/07/30/05/08/own-2553537__340.jpg",
        emp_age:26,
        emp_gender:"female",
        emp_company:"capgemini",
        emp_salary:40000,
        emp_designation:"java tester",
        emo_doj: new Date('2019/10/05'),
        emp_location:"delhi",
        emp_education:"btech"   
     }
    ];
    var emp = [];
    employees.forEach(empData => {
         emp.push(` 
         <div class="card">
  <img src="${empData.emp_photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${empData.emp_name}</h5>
     <span class="badge badge-sucess float-right>${empData.emp_id}</span>  <br>
     <span class="badge badge-sucess float-right>${empData.emp_designation}</span> <br>
     <li class="llist-group-item>salary: ${empData.emp_salary}</li>
     <li class="llist-group-item>location: ${empData.emp_location}</li>
     <li class="llist-group-itemeducation: ${empData.emp_education}</li>
     <li class="llist-group-item>gender: ${empData.emp_gender}</li>
     <li class="llist-group-item>company: ${empData.emp_company}</li>
     <li class="llist-group-item>Date of join: ${empData.emp_doj}</li>


    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
         `);
    });
    document.getElementById("template").innerHTML = emp;

