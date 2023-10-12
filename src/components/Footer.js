import logo from "../logo.svg";

export function Footer(){ 
    return (
        <div class="row bg-secondary">
            <div class = "col-lg-3 col md-4 col-sm-12">
                <h1>visit us on </h1>
                <ol>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagam</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://whatsapp.com">Whatsapp</a></li>
                </ol>
            </div>
            <div class = "col-lg-3 col md-4 col-sm-12">
                <h1>Blogs</h1>
                <ol>
                    <li><a href="#">Blog1</a></li>
                    <li><a href="#">Blog2</a></li>
                    <li><a href="#">Blog3</a></li>
                    <li><a href="#">Blog4</a></li>
                </ol>
            </div>
            <div class = "col-lg-3 col md-4 col-sm-12">
                    <h1>Topics</h1>
                    <p>subtopic1</p>
                    <p>subtopic2</p>
                    <p>subtopic3</p>
                    <p>subtopic4</p>
            </div>
            <div class = "col-lg-3 col md-4 col-sm-12">
                <img src={logo}></img>
            </div>   
        </div>
    )
}