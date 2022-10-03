import React,{Fragment, useState, useEffect} from "react"; 
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPerson, faPersonDress, faBriefcase, faGraduationCap, faScroll } from '@fortawesome/free-solid-svg-icons'
//charts
import {	Chart as ChartJS,
			CategoryScale, 
			LinearScale, 
			PointElement, 
			Filler, 
			LineElement, 
			BarElement, 
			Title, 
			Tooltip, 
			Legend, 
			ArcElement
		} from 'chart.js';
//Components
import HighschoolsChart from "./Highschools";
import LivesWith from "./LivesWith";
import WorkReason from "./WorkReason";
import FamilyIncome from "./FamilyIncome";
import RelatedWork from "./RelatedWork";
//Styles
import "../dashboard/DashboardStyle.css";


	const Dashboard = () => {

    return(
		<div className="Main-Container">

			<div className="box col-start-1 col-span-3 h-screen">
				<div className="flex justify-center space-x-10">

								<div className="item">
									<div className="box KPI-Text">
										<div>
										Hombres
										</div>
										<div className="KPI bg-cyan-500">
										<FontAwesomeIcon icon={faPerson} className="KPI-Icon"/> 
										</div>
										<div className="KPI-Reading">
										19
										</div>	
									</div>
								</div>
								
								<div className="item">

										<div className="box KPI-Text">
											<div>
											Mujeres
											</div>
											<div className="KPI bg-red-400"> 
											<FontAwesomeIcon icon={faPersonDress} className="KPI-Icon"/>
											</div>
											<div className="KPI-Reading">
											19
											</div>
										
									</div>
								</div>

								<div className="item">

										<div className="box KPI-Text">
											<div>
											Trabajan
											</div>
											<div className="KPI bg-teal-500"> 
											<FontAwesomeIcon icon={ faBriefcase } className="KPI-Icon"/>
											</div>
											<div className="KPI-Reading">
											19
											</div>

									</div>
								</div>

								<div className="item">

										<div className="box KPI-Text">
											<div>
											Promedio TSU
											</div>
											<div className="KPI bg-indigo-500"> 
											<FontAwesomeIcon icon={ faScroll } className="KPI-Icon"/>
											</div>
											<div className="KPI-Reading">
												19
											</div>
										
									</div>
								</div>
								
								<div className="item">
									
										<div className="box KPI-Text">
											<div>
											Promedio Ing
											</div>
											<div className="KPI bg-purple-500"> 
												<FontAwesomeIcon icon={ faGraduationCap } className="KPI-Icon"/>
											</div>
											<div className="KPI-Reading">
												19
											</div>
									</div>
								</div>
				</div>
				</div>

				<div className="box-w-chart row-span-2 col-start-1 col-span-2">
						Con quien Vive
						<LivesWith/>
				</div>
				<div className="box-w-chart row-span-4">
						Razson de Trabajo & Trabajo Relacionado
						<WorkReason/>
						<RelatedWork/>
				</div>
				<div className="box-w-chart row-span-2 col-span-2">
						Ingresos Familiares
						<FamilyIncome/>
					</div>
				<div className="box-w-chart row-span-2 col-span-3">
						Bachilleratos
						<HighschoolsChart/> 
				</div>
		</div>
    );


}



export default Dashboard;