import "./CartWidget.css"

function CartWidget({ items }) {
    return ( 
    
    <div>
      <img className="carrito" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
      <span>{items}</span>
    </div>
    
    
    );
  }
  
  export default CartWidget;