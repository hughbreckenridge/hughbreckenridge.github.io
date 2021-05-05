/*
Datatypes:
These are types of values that the interpreter recognizes have special 
properties and enable the interpreter to treat these values in useful ways.

    Number: A simple data type that is numeric data ie 5.

    String: A simple datatype that is character data enclosed in "".

    Boolean: A simple datatype that is the word true or false.

    Array: A complex datatype that holds a group of datatypes enclosed in [] and separated by commas.

    Object: A complex datatype that hold a group of key:value pairs wrapped in {} and separated by commas.

    Function: A complex datatype that allows us to isolate a block of code and execute it based on our intent.

    undefined: A primitive datatype. A variable that has not been assigned a value is classified as undefined. 
    A method or statement also returns undefined if the variable that is being evaluated does not have an 
    assigned value.

    null: A primitive datatype that represents the intentional absence of any object value and is treated as 
    falsy for boolean operations.

    NaN: (AKA - Not a Number) is a numeric data type that means an undefined value or value that cannot be 
    represented, especially results of floating-point calculations.

    Infinity and -Infinity: represent the numberic values of infinity and negative infinity. They show up when 
    a number reaches a the upper or lower limit of folating point numbers 
    
What is the difference between primitive/simple and complex data types?

    -Primitive datatypes are of a set finite size and can't hold other values.
    -Complex datatypes are of indefinite size and can hold other values.

Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and 
how are they different?
    
    -Passing BY COPY is for primitive datatypes and refers to what the value point to in memory. 
    BY COPY means the value points to a "copy" of the passed value not the "original"
    
    -Passing BY REFERENCE means the complex datatype value points to the same value point in memory not a copy. 
    When the valu point is changed so will the values that reference it. */