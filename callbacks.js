//Promises

const doSomethingPromisse = new Promisse ((resolved, reject) => {
    setTimeout(function() {
        // did somenthing
        resolve('First data');
    }, 1000)
});

const doOtherThingpromisse = new Promisse((resolve, reject) => {
    setTimeout(function() {
        //did somenthig
        resolve('Second data')
    }, 1000);
});

console.log(doSomethingPromisse);


//CAllBACKS
function doSomething(callback) {
    setTimeout(function () {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try{
      doSomething(function(data){
          var processeData = data.split('');
          try{
            doOtherThing(function(data2) {
                var processeData2 = data2.split('');

                try{
                  setTimeout(function() {
                     console.log(processeData, processeData2);                     
                  }, 1000);  
                } catch (err) {
                   // handle error 
                }
            });  
      }  catch (err) {
          // Handle error
      }
    });
} catch (err) {
    // handle error
    }
}

doAll();