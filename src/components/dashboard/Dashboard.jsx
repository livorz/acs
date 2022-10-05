import React,{Fragment, useState, useEffect} from "react"; 
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPersonHalfDress, faPerson, faPersonDress, faBriefcase, faGraduationCap, faUsers,faPersonSimple  } from '@fortawesome/free-solid-svg-icons'
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
import Gender from "../dashboard/Gender";
//fetch
import  {fetchAll} from "../../services/Data.js";
//Styles
import "../dashboard/DashboardStyle.css";
import UseDashboard from "../hooks/useDashboard";



	const Dashboard = () => {

//fetchApi

const {dashboard} = UseDashboard();

const [ family, setFamily ] = useState();
const [ genderF, setGenderF ] = useState([]);
const [ genderM, setGenderM] = useState([]);
const [ gender, setGender ] = useState([]);
const [ workSi, setWorkSi ] = useState([]);
const [ workNo, setWorkNo ] = useState([]);
const [ promTSU, setTSU ] = useState([]);
const [ promtING, setING ] = useState([]);
const [ reason, setReason ] = useState([]);
const [ related, setRelated ] = useState([]);
const [ highschools, setHighSchools ] = useState([]);
const [ student, setStudent ] = useState([]);
const [ civil, setCivil ] = useState([]);
const [ loading, setIsLoading ] = useState();


	useEffect(()=>{
		setFamily(dashboard?.datosPersonales?.ingresosFamiliares)
		setGenderM(dashboard?.datosPersonales?.genero[0]?.cantidad)
		setGenderF(dashboard?.datosPersonales?.genero[1]?.cantidad)
		setGender(dashboard?.datosPersonales?.genero)
		setWorkSi(dashboard?.datosLaborales?.trabajan.si)
		setWorkNo(dashboard?.datosLaborales?.trabajan.no)
		setTSU(dashboard?.promedios?.tsu?.promedio)
		setING(dashboard?.promedios?.ingenieria.promedio)
		setReason(dashboard?.datosLaborales?.razonTrabaja)
		setStudent(dashboard?.alumnos)


		console.log(dashboard?.datosLaborales?.razonTrabaja)
	},[dashboard]);

if (loading){
	return <div></div>
}
    return(
		<div className="Main-Container">

			<div className="box col-start-1 col-span-3 h-screen">
				<div className="flex justify-center space-x-10">

								<div className="item">
								<div className="box KPI-Text">
										<div>
										Total Alumnos
										</div>
										<div className="KPI bg-cyan-500">
										<FontAwesomeIcon icon={faUsers} className="KPI-Icon"/> 
										</div>
										<div className="KPI-Reading">
										{student}
										</div>	
									</div>
								</div>
								
								<div className="item">
									<div className="box KPI-Text">
										<div>
										Mujeres & Hombres
										</div>
										<div className="KPI bg-cyan-500">
										<FontAwesomeIcon icon={faPerson} className="KPI-Icon"/> 
										<FontAwesomeIcon icon={faPersonDress} className="KPI-Icon m-5"/>
										</div>
										<div className="KPI-Reading">
											<Gender gender={gender}/>
										
										</div>	
									</div>
								</div>

									<div className="item">
									<div className="box KPI-Text">
											<div>
											Estado Civil
											</div>
											<div className="KPI bg-red-400"> 
											<FontAwesomeIcon icon={faPersonDress} className="KPI-Icon"/>
											</div>
											<div className="KPI-Reading">
											</div>
										</div>
									</div>

								<div className="item">
								<div className="box KPI-Text">
											<div>
											Trabajan & No Trabajan
											</div>
											<div className="KPI bg-teal-500"> 
											<FontAwesomeIcon icon={ faBriefcase } className="KPI-Icon"/>
											</div>
											<div className="KPI-Reading">
											{workSi} / {workNo}
											</div>
										</div>
								</div>
								
								<div className="item">
									
										<div className="box KPI-Text">
											<div>
											Promedio TSU & ING
											</div>
											<div className="KPI bg-indigo-500"> 
												<FontAwesomeIcon icon={ faGraduationCap } className="KPI-Icon"/>
											</div>
											<div className="KPI-Reading">
												{promTSU} / {promtING}
											</div>
										</div>
								</div>
				</div>
				</div>

				<div className="box-w-chart Lives-With">
						<div className="Lives-With-Text">
							Con quien Vive
						</div>
						<LivesWith/>
				</div>
				<div className="box-w-chart Reason-Related-Work">
						<div>
						Razon de Trabajo 
						<WorkReason reason={reason}/>
						</div>
						<div>
						Trabajo Relacionado
						<RelatedWork />
						</div>
				</div>
				<div className="box-w-chart Family-Income">
						<div className="Family-Income-Text">
						Ingresos Familiares
						</div>
						<FamilyIncome />
					</div>
				<div className="box-w-chart Bachilleratos">
					<div className="Bachilleratos-Text">
						Bachilleratos
					</div>
						<HighschoolsChart/> 
				</div>
		</div>
    );


}



export default Dashboard;