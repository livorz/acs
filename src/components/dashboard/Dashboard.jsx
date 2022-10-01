import React,{Fragment, useState, useEffect} from "react"; 
//icons
import { MdWorkOutline, MdOutlineAttachMoney } from "react-icons/md";
import { BsGenderFemale, BsGenderMale, BsHash, BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { VscPerson } from "react-icons/vsc"
import { BiMale, BiFemale } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
//charts
import {Chart as ChartJS,
    CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, Title, Tooltip, Legend, ArcElement
} from 'chart.js';
//Components
import StudentInfo from "./StudentInfo";
import TSUPromChart from "./TSUProm";
import HighschoolsChart from "./Highschools";
import LivesWithFamIncome from "./LivesWithFamIncome";
//Data
import {UserData} from "./Data";
//Styles
import "../dashboard/DashboardStyle.css";


	const Dashboard = () => {


    return(
		<div className="">
			<div className="Main-Grid">
				<div className="box KPI-Text">
					<div className="mr-4">
					Hombres
					</div>
					<div className="KPI bg-cyan-500">
						<BiMale className="KPI-Icon text-5xl"/>
					</div>
					<div className="KPI-Reading">
						19
					</div>
					
				</div>

				<div className="box KPI-Text">
					<div className="mr-4">
					Mujeres
					</div>
				<div className="KPI bg-amber-500"> 
						<BiFemale className="KPI-Icon text-5xl"/>
					</div>
					<div className="KPI-Reading">
						19
					</div>
				</div>
				
				<div className="box KPI-Text">
					<div className="mr-4">
					Trabajan
					</div>
				<div className="KPI bg-teal-500"> 
						<BsBriefcaseFill className="KPI-Icon text-4xl mt-2"/>
					</div>
					<div className="KPI-Reading">
						19
					</div>
				</div>
				
				<div className="box KPI-Text">
					<div className="mr-4">
					Promedio TSU
					</div>
				<div className="KPI bg-indigo-500"> 
						<FaGraduationCap className="KPI-Icon text-4xl mt-1"/>
					</div>
					<div className="KPI-Reading">
						19
					</div>
				</div>
				
				<div className="box KPI-Text">
					<div className="mr-4">
					Promedio Ing
					</div>
				<div className="KPI bg-purple-500"> 
						<FaGraduationCap className="KPI-Icon text-4xl mt-1"/>
					</div>
					<div className="KPI-Reading">
						19
					</div>
				</div>
				
				<div className="box-w-chart row-start-2 row-end-4 col-start-1 col-end-4">Vive con & Ingresos Familiares
				
					<LivesWithFamIncome/>
				
				</div>
				
				<div className="box-w-chart row-start-2 row-end-6 col-start-4 col-end-6">Trabajo Razon & Trabajo Relacionado</div>
				
				<div className="box-w-chart row-start-4 row-end-6 col-start-1 col-end-4">Bachilleratos
				
					<HighschoolsChart/> 

				</div>
			</div>
		</div>
    );


}



export default Dashboard;