function Sidebar({model}){
  const root = h("div"); //div that will hold the view
  root.append(h(SidebarView,
    {guests:model.getNumberOfGuests(),
      minusOne:()=>model.setNumberOfGuests(model.getNumberOfGuests()-1),
      plusOne:()=>model.setNumberOfGuests(model.getNumberOfGuests()+1),
      setGuests:(x)=>model.setNumberOfGuests(x)}));
  model.addObserver(function(){
    root.firstChild.remove();
    root.append(h(SidebarView, {guests:model.getNumberOfGuests(),
       minusOne:()=>model.setNumberOfGuests(model.getNumberOfGuests()-1),
     plusOne:()=>model.setNumberOfGuests(model.getNumberOfGuests()+1),
   setGuests:(x)=>model.setNumberOfGuests(x)}));
  });
  return root;
}
