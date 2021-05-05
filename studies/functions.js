/* 
Functions

    Functions a flexible constructs that provide a way to reuse a set of procedures with multiple inputs. 
    
    the construct looks like this:
    
    First, you declare the function with the word function and then the name of the function with paramaters (optional)
     
     example:

        function name(parameter1, parameter2){
            some code up in here
            }


A function won't do anything until its called, which is the process of naming the parameters liek this: 
        
        function multiply(a, b) {
            console.log(a * b);
        }
        
        multiply(4, 6);  <=== this is the call and the numbers 4 and 6 are called the arguments
        expected: 24 because 4 * 6 = 24
        
        

In order to shorten a function it can be stored in a variable:
    
    var math = function multiply(a, b) {
                    console.log(a * b);
                }
            

Scope: 

    Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
    A variable that is created inside a function scope can not be used in globally

Closures: 

    Functions form closures around the data they house. If an object returned from the 
    Function and is held in memory somewhere (referenced), that closure stays ALIVE, 
    and data can continue to exist in these closures! 

*/