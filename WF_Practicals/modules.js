//write node.js script to build your own node.js module. use require(http) module as built-in module that involves the functionality of http lib to create a local server.
//also use the export statement to make functions in your module available externally.
//create a new text file to contain the functions in your module called module.js and add this function to return todays date and time.


exports.myDateTime = function(){
    return Date();
};
