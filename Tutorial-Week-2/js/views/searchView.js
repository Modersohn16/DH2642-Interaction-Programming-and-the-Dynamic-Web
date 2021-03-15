const SearchResultsView=({SearchResults})=>
<div>{ 
//    JSON.stringify(SearchResults)
    SearchResults.map(dish=>
    <span key={dish.id}>{dish.title}</span>)
} </div>