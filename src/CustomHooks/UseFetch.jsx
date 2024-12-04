import { useState, useEffect } from 'react';

export const UseFetch = (url, setIsFetching) => {
    const [data, setData] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);
    


    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
                setIsDataFetched(true)
                console.log(data)
               
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsDataFetched(false)
            } finally {
                setIsFetching(false);
                
            }
        };

        fetchData();
    }, [url]);

    return [data, isDataFetched];
}