import React from 'react'
import { LoadingSpinner } from '../LoadingSpinner.tsx';

const WithLoader = (Elem,url) => {
    return (props) => {
        const [data, setData] = React.useState(null);
    
        React.useEffect(() => {
          fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res));
        }, []);
    
        if (!data) return <LoadingSpinner />;
    
        return <Elem {...props} data={data} />;
      };
}

export default WithLoader