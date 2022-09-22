import React,{Fragment, useState, useEffect} from "react";
//Components
import StudentInfo from "./StudentInfo";
//Styles
import "../dashboard/DashboardStyle.css";

    const Dashboard = () =>{

    return(
		<div className="grid overflow-hidden grid-lines grid-cols-5 auto-rows-auto gap-4">
			<div className="box row-start-1 row-end-1">1
				<div className="kpi-icon">
					
				</div>
			</div>
			<div className="box row-start-1 row-end-1">2</div>
			<div className="box row-start-1 row-end-1">3</div>
			<div className="box row-start-1 row-end-1">4</div>
			<div className="box row-start-1 row-end-1 col-end-auto">5</div>
			<div className="box row-start-2 row-end-4 col-start-1 col-end-4">6</div>
			<div className="box row-start-2 row-end-6 col-start-4 col-end-6">7</div>
			<div className="box row-start-4 row-end-6 col-start-1 col-end-4">8</div>
		</div>
    );
}




export default Dashboard;