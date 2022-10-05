import React, { useEffect, useState} from 'react';

function FetchFamilyData(){
    const [dataFam, setData] = useState (null);
    useEffect(() => {
      fetch("https://acs-api-utt.herokuapp.com/api/grupo")
        .then((res) => res.json())
        .then((APIdata) =>{
          setData(APIdata.estadisticas.alumnos);
    });
  },[]);

  return (
    console.log(dataFam)
  )

}

export default FetchFamilyData;