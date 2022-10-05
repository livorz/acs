export const fetchFamilyData = () =>{
  return fetch("https://acs-api-utt.herokuapp.com/api/grupo")
    .then((res) => res.json())
    .catch((err) =>{console.log(err);})
  };