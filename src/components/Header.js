import "../../src/App.css"
function Header(){
    const h2style = {
        color : "green"
        
    }
    return (
        <div class="bg-dark text-center text-light my-0">
            <h1 style = {{color: "green",}}>Shoppy Website</h1>
            <h2 style = {h2style}> Low cost more products</h2>
            <p id="paragraph">Explore more ... various products</p>
        </div>
    )
}
export default Header ;