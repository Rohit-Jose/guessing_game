b= 7;
count=0;
function submit(){
            a=document.getElementById("in").value;
            console.log(a);
            if(a<b) window.alert("Enter a higher value");
            if(a>b) window.alert("Enter lower value");
            count++;
            console.log(count);
            c=document.getElementById("res").textContent="Number of tries: "+count;
            if(a==b) window.alert("You win!!!!"+"\nNumber of tries: "+count); 
} 

        