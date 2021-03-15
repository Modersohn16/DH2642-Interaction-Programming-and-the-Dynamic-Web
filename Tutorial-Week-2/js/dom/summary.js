function Summary({model}){
  const root = h("div"); //div that will hold the view
  root.append(h(SummaryView, {guests:model.getNumberOfGuests()}));
  model.addObserver(function(){
    root.firstChild.remove();
    root.append(h(SummaryView, {guests:model.getNumberOfGuests()}));
  });
  return root;
}
