function Sidebar({model}) {

     const guests = useModelProp(model, "numberOfGuests");


    return h(SidebarView, {
           guests : guests,
           setGuests: n=> model.setNumberOfGuests(n),
           minusOne:()=>model.setNumberOfGuests(model.getNumberOfGuests()-1),
           plusOne:()=>model.setNumberOfGuests(model.getNumberOfGuests()+1)
        });
}
