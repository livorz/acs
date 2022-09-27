import React,{Fragment, useState, useEffect} from "react"; 
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
//Components
import StudentInfo from "./StudentInfo";
//Styles
import "../dashboard/DashboardStyle.css";

    const Dashboard = () =>{

    return(
		<div className="grid overflow-hidden grid-lines grid-cols-5 auto-rows-auto gap-2 mt-12 mx-12">
			<div className="box row-start-1 row-end-1">
				Genero
				<div className="absolute inset-y-0 left-0 m-3">
					<BsGenderFemale className="bg-transparent text-white  text-5xl align-middle"/>
				</div>
				<div className="absolute inset-y-0 right-0 m-3">
					<BsGenderMale className="bg-transparent text-white text-5xl align-middle"/>
				</div>
				
				</div>

			<div className="box row-start-1 row-end-1">Estado Civil</div>
			<div className="box row-start-1 row-end-1">Trabaja</div>
			<div className="box row-start-1 row-end-1">Promedio TSU</div>
			<div className="box row-start-1 row-end-1 col-end-auto">Promedio Ing</div>
			<div className="box row-start-2 row-end-4 col-start-1 col-end-4">Vive con & Ingresos Familiares</div>
			<div className="box row-start-2 row-end-6 col-start-4 col-end-6">Trabajo Razon & Trabajo Relacionado</div>
			<div className="box row-start-4 row-end-6 col-start-1 col-end-4">Bachilleratos</div>
		</div>
    );
}




export default Dashboard;