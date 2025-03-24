import React, { useState, useEffect } from 'react';

 export const Index = () => {
  const [data2, setData2 ] = useState();



  useEffect(() => {
    fetch('https://api.stripe.com/v1/charges?limit=100'), {

      }
    })
      .then(response => response.json())
      .then(data => {
        setData2(data2.data);
      })

 
      
      
      
      return (
        <div>

    </div>
  );
};



