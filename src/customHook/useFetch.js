import { useEffect, useState } from "react";
function useFetch(request) 
{
    let[data,setData]=useState(null);
    let[pending,setPending]=useState(true);
    let[error,setError]=useState(null);
    useEffect(()=>
    {
        setTimeout(()=>
        {
            fetch(request)
        .then((response)=>
        {
            if(response.ok)
            {
                return response.json();
            }
            throw Error("Data can't Be Fetch Try again later")
        })
        .then((data)=>
        {
            setData(data);setPending(false)
        })
        .catch((err)=>
        {
            setError(err.message);setPending(false)
        }
        )
        },3000)
    },[])
    console.log(data);
    return {data,pending,error}
}

export default useFetch;