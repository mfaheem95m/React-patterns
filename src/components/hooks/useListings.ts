import React from 'react'

const useListings = (url) => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    return [data]
}

export default useListings