const  DishSource={
    apiCall(params){
     return fetch(BASE_URL+params, {
             "method": "GET",
             "headers": {
          'X-Mashape-Key' : API_KEY
          }
     })
 // from headers to response data
        .then(response => response.json());
    }
    ,
    searchDishes(searchParams){
        return this.apiCall("recipes/search?"+new URLSearchParams(searchParams))          
 // leave out the unimportant parts of the response data
        .then(data=>data.results);       
     }
     ,  
     getDishDetails(id){
        return this.apiCall("recipes/"+id+"/information")          
 // leave out the unimportant parts of the response data
        .then(data=>data);       
     }
 }; // end of DishSource
 