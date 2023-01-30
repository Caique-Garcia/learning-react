import { useState, useEffect } from "react";

// Custom Hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    //Refatorando POST
       const httpConfig = (data, method) => {
            if(method === 'POST'){
                setConfig({
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                setMethod("POST");
        }            
    }



    useEffect(() => {
 

        const fetchData = async () => {

            const res = await fetch(url);
            const json = await res.json();
            setData(json);

        }
        fetchData();
    }, [url, callFetch]);

    //POST
    useEffect(() => {
    
      const httpRequest = async () => {        
        if(method === 'POST'){

            let fetchOpitions = [url, config];
            const res = await fetch(...fetchOpitions);
            const json = await res.json();

            setCallFetch(json);
            console.log(fetchOpitions);

        }
      }
      httpRequest();
    },[config])

    return {data, httpConfig};
};