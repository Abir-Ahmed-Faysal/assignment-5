
document.getElementById('theme-btn').addEventListener
('click',function(event){  
    const baseColor=document.getElementById('rootColor');

    const random =Math.floor(Math.random()*10);
    const colorList=[
        "bg-blue-500","bg-red-500","bg-green-500","bg-yellow-500","bg-purple-500","bg-pink-500","bg-teal-500","bg-orange-500","bg-indigo-500","bg-gray-500"
    ];
    for(i=0;i<colorList.length;i++){
         if(i===random){
            for(let includeClass of colorList){
         baseColor.classList.remove(includeClass)}
         baseColor.classList.add(colorList[i]);  
         }
    }
})


            // Clear Button
            document.getElementById('clear-btn').addEventListener('click' ,function(){
                let parent = document.getElementById("terry-parent");
                parent.replaceChildren();
                })



            // link discover btn
a=document.getElementById('discover-Btn').addEventListener('click',function(){
window.location.href='./q&a.html';
})


                                // get day
            const dayList=["Sun",'Mon','Tue','Wed','Thu','Fri',"Sat"];
            const currentDay=new Date().getDay();
             const day=dayList[currentDay];
             document.getElementById('day').innerText=day;

                                //  get Day
            const currentDate=new Date().getDate();
            document.getElementById('date').innerText=currentDate

                                // get month
             const monthList=["Jan",'Feb','Mar','Apr','May','Jun','Jul','Aug',"Sep",'Oct','Nov',"Dec"];
            const currentMonth=new Date().getMonth();
            const month=monthList[currentMonth];
             document.getElementById('Month').innerText=month;

                                //  get year
            const currentYear=new Date().getFullYear();
            document.getElementById('year').innerText=currentYear;

            

const featureList=document.querySelectorAll('.feature');
for(core of featureList){
    core.addEventListener('click',function(event){

            //include disabled attribute& alert showing
            event.target.setAttribute("disabled", "true");
         alert('Board Updated Successfully');
         
            //total process increase
        const totalProcess=parseInt(document.getElementById('total-process').innerText);
        if(event.target.classList.contains("feature")){
            const sum=totalProcess+1;
            document.getElementById('total-process').innerText=sum;
        };

                // current time
        const currentTime = new Date().toLocaleTimeString();

                //heading innerText 
        const mainParent=event.target.parentNode.parentNode.parentNode;
        const heading=mainParent.querySelector('h2').innerText;
        
                // parentElement
        const activityTerry=document.getElementById('terry-parent');

                // create new Element
        const newDiv=document.createElement('div');
        newDiv.classList.add('bg-gray-200','rounded-xl','overflow-hidden','p-2','remover-child');
        
        
        
        newDiv.innerHTML=`
        <p>You have completed the task ${heading} at ${currentTime}</p>
        `;
                // append child
        activityTerry.appendChild(newDiv);
        

        // limit of Six task
        const taskLimit=parseInt(document.getElementById('task-limit').innerText);
        
        if(event.target.classList.contains("feature")){
            const sum=taskLimit-1;
            document.getElementById('task-limit').innerText=sum;
             if(sum===0){
                alert('Congrats!!! You have completed all the current tasks')
                return;
             }
         }
    })
}



