// Task 1
function show(a, b){

            if(a<b){
                alert("-1")
            }
            else if(a>b){
                alert("1")
            }
            else 
            alert("0")
        }

        show(5, 9)
        show(11, 9)
        show(9, 9)

// Task 2
function factorial(num){
         let mult=1   
      for(let i=1; i<=num; i++){  
       mult*=i }
 return mult
        }
 
        alert(factorial(3)) 
        alert(factorial(2)) 



//Task 3

      function concat(a, b, c){
return `${a}${b}${c}`

        }

        alert(concat(1, 2, 3))
        alert(concat(1, 0, 3)) 



        //Task 4

         function area(en, uzun){
             return en*(uzun||en)
         }
         alert(area(3, 4))
         alert(area(3))


        //Task 5

        function check(num) {
        let sum = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
    
       
     sum === num ? alert(`${num} - mukemmel ededdir`) : alert("Mukemmel eded deyildir")   
    
    }
    
    check(6)
    check(9) 
    check(28)


// Task 6

       function mukkemelEdediTap(min, max) {
            let arr = []
            for (let i = min; i <= max; i++) {

                let sum = 0
                for (let j = 1; j <= i / 2; j++) {
                    if (i % j === 0) sum += j;
                }
                if (sum === i && sum !== 0) arr.push(i)
            }
            alert(`${arr}`)

        }
        mukkemelEdediTap(1, 10000)


// Task 7

       
       function showTime(saat, deqiqe = 0, saniye = 0) {

  return `${saat}:${deqiqe}:${saniye}`;
}


console.log(showTime(12, 35, 45))
console.log(showTime(13))
console.log(showTime(15, 45))
console.log(showTime(15, 0, 0)) 



        // Task 8

       function showTime(saat, deqiqe, saniye){
       
        let indikiSaat;
           saat > 12 ? indikiSaat = saat % 12 : indikiSaat = saat
           let yeniSaat = indikiSaat * 3600;
           let yeniDeqiqe = deqiqe * 60;  
        let saniyeler=yeniSaat+yeniDeqiqe+saniye
        return `${saniyeler}`
         }
        
         console.log(showTime(18, 30, 25))
         console.log(showTime(10, 30, 25))
         console.log(showTime(8, 30, 25))
         console.log(showTime(13, 30, 25))



// Task 9

        function showTime(saniyeler) {
            let saat = Math.floor(saniyeler/ 3600);
            let deqiqe =Math.floor((saniyeler % 3600) / 60);
            let saniye = saniyeler % 60;

            return `${saat}:${deqiqe}:${saniye}`
        }

      
        console.log(showTime(36025))
        console.log(showTime(46808)) 


// Task 10

      function showTime(saat1, deqiqe1, saniye1, saat2, deqiqe2, saniye2){
       let umumiSaniye1 = saat1 * 3600 + deqiqe1 * 60 + saniye1;
     let umumiSaniye2 = saat2 * 3600 + deqiqe2 * 60 + saniye2;
     let saniyeFerqi = Math.abs(umumiSaniye2- umumiSaniye1);
     let umumiSaat = Math.floor(saniyeFerqi/ 3600);
     let umumiDeqiqe = Math.floor((saniyeFerqi % 3600) / 60);
     let umumiSaniye =saniyeFerqi % 60;
 
 
      return `${umumiSaat}:${umumiDeqiqe}:${umumiSaniye}`
 
         }
 
         console.log(showTime(18, 30, 25, 8, 30, 25 ))
         console.log(showTime(8, 50, 25, 20, 23, 25 ))
         console.log(showTime(9, 50, 25, 20, 23, 25 ))
         console.log(showTime(12, 15, 30, 14, 20, 45))  




// Mentor task1

         let arr=[1, 2, 3, 4, 5, 6, 7]
        function f(array){
        let obj={}
        let sum=0;
            let mult=1;
            
        for(let i=0; i<array.length; i++){
            let num=array[i]
            sum+=num
            mult*=num
            
        
        }
            let aver=sum/array.length
        console.log(sum)
        console.log(mult)
        console.log(aver)
        obj.sum=sum
        obj.mult=mult
        obj.aver=aver
            console.log(obj)
    }
        
        f(arr)  

        // Mentor task2
        let arr1=[2, 90, 87, 0]
        let arr2=[2, 5, 7, 6, 8, 10, 90]
        //let arr1=["aa", "bb", "cc", "dd"]
        //let arr2=["aaa", "ba", "aa", "bb", "aaaa", "cccc", "hd"]
        function f(array1, array2){
        
            let arr=[]
        for(let i=0; i<array1.length; i++){
            for(let j=0; j<array2.length; j++){
                if(array1[i]===array2[j]){
                    arr.push(array1[i])
                }
            }
        }
        
            console.log(arr)
        }
        
        
        f(arr1, arr2) 

        // Mentor task3

          let arr=["one", "two", "twenty two", "three", "hundred", "four", "eleven", "twenty",  ]
         function longWord(array){
             let longword=""
                 for(let i=0; i<array.length; i++){
                    if(array[i].length>longword.length) longword=array[i]
                 }
                 
                  console.log(longword)
         }
         longWord(arr) 



        // Mentor task4

         let str1 = "Hello World"
        let str2 = "l"
        function show(string1, string2) {
            let arr = string1.split("")
            for (let i = 0; i < arr.length; i++) {

                if (arr[i] === string2) {
                    arr.splice(i, 1);
                    i--;
                }
            }

            let result = arr.join("");
            console.log(result);
        }
        show(str1, str2)



 // Mentor task5
 
 let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

 function sadeEdedler(array){

for(let i=0; i<array.length; i++){
let sade=true

if (array[i] <= 1) {
            sade = false;
        } 
        else
for(let j=2; j<array[i]; j++){
if(array[i]%j===0){
    sade=false
    break
}}

if(!sade){
    array.splice(i, 1)
    i-- } }
console.log(array)
}

 
 sadeEdedler(arr)
 


 // Mentor task6

 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 6, 3, 5, 2, 22, 6, 30, 1, 5];

function getNumber(array) {
    let tekrarlanan = {};
    let count = 0;
    let enCoxTekrarlanan = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        if (tekrarlanan[num] === undefined) {
            tekrarlanan[num] = 1;
        } else {
            tekrarlanan[num]++;
        }

        if (tekrarlanan[num] > count) {
            count = tekrarlanan[num];
            enCoxTekrarlanan = [num]; 
        } else if (tekrarlanan[num] === count) {
            enCoxTekrarlanan.push(num); 
        }
    }

    console.log(`En cox tekrarlanan reqem(ler): ${enCoxTekrarlanan.join(', ')}, terkarlanma sayi: ${count}`); 

}

getNumber(arr);
       

        
