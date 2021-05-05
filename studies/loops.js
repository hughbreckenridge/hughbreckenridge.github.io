/* Loops

There are 3 kinds of loops:

1. for loops
   
    loop through an appry
   
    have 3 parts the index aka start, the end and the increment 
   
    example: 
    
        var str = '';

        for (let i = 0; i < 9; i++) {
        str = str + i;
            }

        console.log(str);
            expected: "012345678"


2. for in loops
   
    loops over all the key:value pairs in an object
    
    Structure: for (var key in object){
        }
    
    example:
            
            var object = {
            name: "hugh",
            height: '67',
            origin: "new orleans"
            }

        for (var key in object){
            console.log(object[key]);
        }
        The console will print all of the values in th obect
        
3. while loops
    
    this type of loop will work as long as a condition is true
    
    example:
    
         var count = 5
        while (count < 15){
        console.log(count);
        count++
            } 
        
        The console will print numbers 5 - 14 because the while loop is saying while the count is less 
        that 15 return count ++ (add 1 to count each time until you get to 15)




*/