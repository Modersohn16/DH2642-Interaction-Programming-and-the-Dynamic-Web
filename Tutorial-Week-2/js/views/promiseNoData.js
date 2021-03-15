function promiseNoData(promise, data, error){
    console.log("data \" " +data+" \"");
    //debugger; 
    return  !promise && "no data"     // case "0"  
          || error //&& <h1>TODO</h1>   // case 3 
          || !data //&& <img TODO/>     // case 1
}
