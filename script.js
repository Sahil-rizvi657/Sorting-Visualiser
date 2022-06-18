// show the sorting code solution
function show_SS(){
     /* Get image and change value
            of src attribute */
            let image = document.getElementById("image_SS");
 
            image.src = "selcsort.png"
 
            document.getElementById("show-btn-ss")
                    .style.display = "none";
}

function show_BS(){
    /* Get image and change value
           of src attribute */
           let image = document.getElementById("image_BS");

           image.src = "bubsort.PNG"

           document.getElementById("show-btn-bs")
                   .style.display = "none";
}
function show_IS(){
    /* Get image and change value
           of src attribute */
           let image = document.getElementById("image_IS");

           image.src = "insertsort.jpg"

           document.getElementById("show-btn-is")
                   .style.display = "none";
}

// to generate the bars
const container = document.querySelector(".data-container");

function generatebars(num = 20){

    for(let i=0;i<num;i++){
        
        // generate random values from 3 to 100
        const value = Math.floor(Math.random()*100)+6;

        //creating the element "div"
        const bar = document.createElement("bar");

        // add class bar to div
        bar.classList.add("bar");

        // height to the bar
        bar.style.height = `${value*3.2}px`;

        // translate the bar towards positive X axis
        bar.style.transform=`translateX(${i*30}px)`;

        // creating elemnt label
        const barLabel = document.createElement("label");

        //add class bar_id to label
        barLabel.classList.add("bar_label");
        
        // assignig value to the label
        barLabel.innerHTML = value;

        // append label to div
        bar.appendChild(barLabel);
        // append div to data-container
        container.appendChild(bar);
    }


}
// code for the sorting algorithm

// using the asynchoronous function to perform selection sort
async function SelectionSort(delay=300){

    let bars = document.querySelectorAll(".bar");

    // strating with min_index = 0;

    var min_index = 0 ;
    for(var i=0;i<bars.length;i++){
        // assign i to the min_index
        min_index = i;
        // provide ---- color to the ith bar
        bars[i].style.backgroundColor = "red";

        for(var j=i+1;j<bars.length;j++){
            // provide ---- color to the jth bar
            bars[j].style.backgroundColor ="grey";

            // pausing the excution of code for 300 milliseconds
            await new Promise((resolve)=> setTimeout(()=>{
                resolve();
            },200));

            // storing the j th value
            var jValue = parseInt(bars[j].childNodes[0].innerHTML);
            // storing the minVlaue
            var minValue = parseInt(bars[min_index].childNodes[0].innerHTML);
            // now compare both of them
            if(minValue>jValue){
                if(min_index!==i){
                    bars[min_index].style.backgroundColor = "orange"
                }
                min_index = j;
            }
            else{
                bars[j].style.backgroundColor = "orange";
            }
        }
         // swap the min_index with ith 
         var temp1 = bars[min_index].style.height;
         var temp2 = bars[min_index].childNodes[0].innerText;
         bars[min_index].style.height = bars[i].style.height;
         bars[i].style.height = temp1;
         bars[min_index].childNodes[0].innerText = bars[i].childNodes[0].innerText;
         bars[i].childNodes[0].innerText = temp2;

         // pause the execution 
                await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 200)
            );

            bars[min_index].style.backgroundColor = "orange";
            bars[i].style.backgroundColor = "lightgreen";
        }

      enable();


}

// code for bubble sort


//Asynchronous function to perform Bubble sort
function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two bars
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 200);
        });
    });
}

async function BubbleSort(){

    var bars = document.querySelectorAll(".bar");
  
    // BubbleSort Algorithm
    for (var i = 0; i <bars.length; i += 1) {
        for (var j = 0; j <bars.length - i - 1; j += 1) {
  
            // To change background-color of the
            // bars to be compared
            bars[j].style.backgroundColor = "yellow";
            bars[j + 1].style.backgroundColor = "yellow";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );
  
           

            var value1 = Number(bars[j].childNodes[0].innerHTML);
            var value2 = Number(bars[j + 1].childNodes[0].innerHTML);
  
            // To compare value of two bars
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            bars[j].style.backgroundColor = "orange";
            bars[j + 1].style.backgroundColor = "orange";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        bars[bars.length - i - 1]
                .style.backgroundColor = "lightgreen";
    }

    

   enable();


}
// code for Insertion sort

async function InsertionSort(){

    var bars = document.querySelectorAll(".bar");

    bars[0].style.backgroundColor = "lightgreen";

    for(var i=1;i<bars.length;i++){

        var j = i-1;

        var tempValue = bars[i].childNodes[0].innerHTML;
        var tempHeight = bars[i].style.height;

        bars[i].style.backgroundColor = "orange";

        // waitng
        await new Promise( (resolve) => setTimeout( () => { resolve(); },600) );

        while(j>=0 && parseInt(bars[j].childNodes[0].innerText)>tempValue){

            bars[j].style.backgroundColor = "orange";
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
        
            // Assign j-1 to j
            j--;
        
            // To pause the execution of code for 600 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 200)
            );
                
            // Provide lightgreen color to the sorted part
            for(var k=i;k>=0;k--){
                bars[k].style.backgroundColor = "lightgreen";
            }

        }

        bars[j+1].childNodes[0].innerText = tempValue;
        bars[j+1].style.height = tempHeight;
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      );
        
      // Provide light green color to the ith bar
      bars[i].style.backgroundColor = "lightgreen";


    }
    enable();
}








// To generates small bars
generatebars();


//create new array
function generate(){
    window.location.reload();
}



function enable(){

    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "darkcyan";
    
    // To disable the button "Selection Sort"
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button2").style.backgroundColor = "darkcyan";  
  
    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "darkcyan";
    
    document.getElementById("Button4").disabled = false;
    document.getElementById("Button4").style.backgroundColor = "darkcyan";
  
    // document.getElementById("Button5").disabled = false;
    // document.getElementById("Button5").style.backgroundColor = "darkcyan";

}

// to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "plum";
  
  // To disable the button "Selection Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "plum";  

  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "plum";
  
  document.getElementById("Button4").disabled = true;
  document.getElementById("Button4").style.backgroundColor = "plum";

//   document.getElementById("Button5").disabled = true;
//   document.getElementById("Button5").style.backgroundColor = "plum";
}