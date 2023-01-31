import { useState, useEffect } from "react";

// Custom Hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [urlDelete, setUrlDelete] = useState("");

    const [loading, setLoading] = useState(false);

    //Tratando erros
    const [error, setError] = useState(null);

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
        }else if (method === 'DELETE'){

            setConfig({
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              });
        
              setMethod("DELETE");  
              setUrlDelete(data); 
              console.log(urlDelete);           

        }            
    }



    useEffect(() => {
 

        const fetchData = async () => {

            //Loading
            setLoading(true);
            //tentando carregar os dados
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                //caso aconteça o erro
                console.log(error.message)
                setError("Falha no carregamento dos dados.")
            }
            setLoading(false);

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
        } else if (method === 'DELETE'){

            console.log(urlDelete);

            const res = await fetch(urlDelete, config);
            const json = await res.json();

             setCallFetch(json);
        }
      }
      httpRequest();
    },[config, urlDelete])

    return {data, httpConfig, loading, error};
};