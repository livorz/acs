import { useState } from "react";
import { useEffect } from "react";
import { fetchFamilyData } from "../../services/FamilyIncome";

const UseDashboard = () => {
    const [dashboard, setDashboard] = useState();

    const chargeFamily = async() =>{
		try {
      		const fillCharts = await fetchFamilyData()
			setDashboard(fillCharts.estadisticas);
		}
		catch(err){console.log(err)}
    }

    useEffect(()=>{
        chargeFamily();
    },[])
    
    return {
        dashboard
    }
}
 
export default UseDashboard;