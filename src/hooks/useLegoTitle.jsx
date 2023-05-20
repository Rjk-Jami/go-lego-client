import React, { useEffect } from 'react';

const useLegoTitle = (title) => {
    
    useEffect(()=>{

        document.title = `${title} - GoLego`;

    },[title])
    
    
};

export default useLegoTitle;

