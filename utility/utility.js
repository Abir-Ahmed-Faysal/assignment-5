document.getElementById('theme-btn').addEventListener('click',function(event){  
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