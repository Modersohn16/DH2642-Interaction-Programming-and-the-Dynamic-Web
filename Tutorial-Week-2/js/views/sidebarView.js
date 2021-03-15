const SidebarView=({guests, minusOne, plusOne, setGuests})=>
<div>
     <button onClick={minusOne} disabled={guests==1}>-</button>
     {guests}
     <button onClick={plusOne}>+</button>
</div>;
