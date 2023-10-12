function Cards(props)
{
    return(
        <div class="card col-md-3 col-sm-6">
            <img class="card-img-top" src={props.obj.thumbnail} alt="logo" style={{height:"300px"}}/>
            <div class="card-body">
                <h3 class="card-title">{props.obj.title}</h3>
                <p class="card-text">{props.obj.description}</p>
            </div>
        </div>
    )
}
export default Cards;
