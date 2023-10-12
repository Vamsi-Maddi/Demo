import Axios from "axios";
import { useState,useEffect } from "react";
import Cards from "./Cards"
// https://dummyjson.com/products

export function Home()
{
    const [data,setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://dummyjson.com/products")
        .then((res)=>{
            if(res.status === 200)
            {
                setData(res.data.products);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err);})
    },[])
   
const Listcards = () => {
    return data.map((val) => {
        return <Cards obj = {val} />
    })
}

    return (
    <div>
        <h1>Home components</h1>
        <div class="row">
            {Listcards()}
        </div>
    </div>
    );
}


export function Contact()
{
    return <h1>Contact components</h1>
}

export function Blog()
{
    return <h1>Blog components</h1>
}

export function Project()
{
    return <h1>Projects components</h1>
}