import React from "react";
class C2 extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log("I am constructor");
    }
   
    static getDerivedStateFromProps()
    {
        console.log("I am getDerivedStateFromProps")
    }

    componentDidMount()
    {
        console.log("I am componentDidMount")
    }
    render()
    {
        console.log("I am render")
        return <h1>Life cycle methods</h1>
    }
}
export default C2;
