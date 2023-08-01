import "./NavBar.css";
import Button from "./Button"  ;
import CartWidget from "./CartWidget";
 export function NavBar (){
    return (
        <nav className="navbar">
            <img className="zapa" src="https://cdn-icons-png.flaticon.com/512/1785/1785175.png" alt="" />
            <Button texto= "Zapatillas"/>
            <Button texto= "Botines"/>
            <Button texto= "Tacones"/>
            <CartWidget items={4}/>
        </nav>
    );
    
}

