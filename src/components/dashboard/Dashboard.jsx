import React,{Fragment, useState, useEffect} from "react"; 
//icons
import { MdWorkOutline, MdOutlineAttachMoney } from "react-icons/md";
import { BsGenderFemale, BsGenderMale, BsHash } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { VscPerson } from "react-icons/vsc"

//charts
import {Chart as ChartJS,
    CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, Title, Tooltip, Legend, ArcElement
} from 'chart.js';
//Components
import StudentInfo from "./StudentInfo";
import TSUPromChart from "./TSUProm";
import HighschoolsChart from "./Highschools";
//Data
import {UserData} from "./Data";
//Styles
import "../dashboard/DashboardStyle.css";


	const Dashboard = () => {
		

    return(
		<div className="grid overflow-hidden grid-lines grid-cols-5 auto-rows-auto gap-2 mt-12 mx-12">
			<div className="box KPI-Text">
				<div>
				Hombres
				</div>
				<div className="KPI bg-cyan-500">
					<BsGenderMale className="bg-transparent text-slate-100 text-5xl align-middle"/>
				</div>
				
			</div>

			<div className="box KPI-Text">
				<div>
				Mujeres
				</div>
			<div className="KPI bg-amber-500"> 
					<BsGenderFemale className="bg-transparent text-slate-100  text-5xl align-middle"/>
				</div>
			</div>
			
			<div className="box KPI-Text">
				<div>
				Trabajan
				</div>
			<div className="KPI bg-teal-500"> 
					<MdWorkOutline className="bg-transparent text-slate-100  text-5xl align-middle"/>
				</div>
			</div>
			
			<div className="box row-start-1 row-end-1">Promedio TSU
			<BsHash/>
			<div>
				
			</div>

			</div>
			
			<div className="box row-start-1 row-end-1 col-end-auto">Promedio Ing</div>
			
			<div className="box row-start-2 row-end-4 col-start-1 col-end-4">Vive con & Ingresos Familiares</div>
			
			<div className="box row-start-2 row-end-6 col-start-4 col-end-6">Trabajo Razon & Trabajo Relacionado</div>
			
			<div className="box row-start-4 row-end-6 col-start-1 col-end-4">Bachilleratos
			
				<HighschoolsChart/> 

			</div>
		</div>
    );


}



export default Dashboard;