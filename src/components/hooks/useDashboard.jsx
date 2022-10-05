import { useState } from "react";
import { useEffect } from "react";
import { fetchAll } from "../../services/Data";

const UseDashboard = () => {
    const [dashboard, setDashboard] = useState();

    const loadCharts = async() =>{
		try {
      		const fillCharts = await fetchAll()
			setDashboard(fillCharts.estadisticas);
		}
		catch(err){console.log(err)}
    }

    useEffect(()=>{
        loadCharts();
    },[])
    
    return {
        dashboard
    }
}
 
export default UseDashboard;