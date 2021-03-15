//const promise= DishSource.searchDishes({});




function Search(){    
    const [promise, setPromise]= React.useState(null);  
    React.useEffect(()=>setPromise(DishSource.searchDishes({})),
    []);
    const [data, error]= usePromise(promise);
    //console.log("data "+data);
    
    /*const [data, setData] = React.useState(null);
    const [error,setError] = React.useState(null);
    React.useEffect(function(){
        setData(null);
        setError(null);
        if(promise!= null){
        promise.then(dt=> setData(data)).catch(er => setError(error));
        }
    }, [data]);
    */
   //debugger;
   console.log("data"+promise)
    return promiseNoData(promise,data,error)
    ||
        h(SearchResultsView,{SearchResults: data}) 
    /*return h("div", {}
            ,"data: ", JSON.stringify(data)
            ,"error: ", error);
            */
}