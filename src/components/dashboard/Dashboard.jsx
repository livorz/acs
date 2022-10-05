import React,{Fragment, useState, useEffect} from "react"; 
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faPersonHalfDress, 
	faPerson, 
	faPersonDress, 
	faBriefcase, 
	faGraduationCap, 
	faUsers, 
	faPersonSimple,
	faSchool,
	faDove,
	faRing,
	faGamepad,
	faHelmetSafety  } from '@fortawesome/free-solid-svg-icons'
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
import Civil from "../dashboard/CivilUnion";
import TSUprom from "../dashboard/TSUProm";
import Employee from "../dashboard/Employee";
//import TotalStudent from "../dashboard/StudentInfo"
//fetch
import  {fetchAll} from "../../services/Data.js";
//Styles
import "../dashboard/DashboardStyle.css";
import UseDashboard from "../hooks/useDashboard";



	const Dashboard = () => {

//fetchApi

const {dashboard} = UseDashboard();

const [ genderF, setGenderF ] = useState([]);
const [ genderM, setGenderM] = useState([]);
const [ gender, setGender ] = useState([]);
const [ workSi, setWorkSi ] = useState([]);
const [ workNo, setWorkNo ] = useState([]);
const [ work, setWork] = useState([]);
const [ promTSU, setTSU ] = useState([]);
const [ promtING, setING ] = useState([]);
const [ prom, setProm ] = useState([]);
const [ reason, setReason ] = useState([]);
const [ related, setRelated ] = useState([]);
const [ highschools, setHighSchools ] = useState([]);
const [ student, setStudent ] = useState([]);
const [ civil, setCivil ] = useState([]);
const [ income, setIncome ] = useState([]);
const [ living, setLiving ] = useState([]);
const [ loading, setIsLoading ] = useState();


	useEffect(()=>{
		setIncome(dashboard?.datosPersonales?.ingresosFamiliares)
		setGenderM(dashboard?.datosPersonales?.genero[0]?.cantidad)
		setGenderF(dashboard?.datosPersonales?.genero[1]?.cantidad)
		setGender(dashboard?.datosPersonales?.genero)
		setWorkSi(dashboard?.datosLaborales?.trabajan.si)
		setWorkNo(dashboard?.datosLaborales?.trabajan.no)
		setWork(dashboard?.datosLaborales?.trabajan.si)
		setTSU(dashboard?.promedios?.tsu?.promedio)
		setING(dashboard?.promedios?.ingenieria.promedio)
		setProm(dashboard?.datosEscolares?.promedios)
		setReason(dashboard?.datosLaborales?.razonTrabaja)
		setRelated(dashboard?.datosLaborales?.trabajoRelacionadoEstudios)
		setHighSchools(dashboard?.datosEscolares?.bachilleratos)
		setLiving(dashboard?.datosPersonales?.viveCon)
		setCivil(dashboard?.datosPersonales?.estadoCivil)
		setStudent(dashboard?.alumnos)


		console.log(dashboard?.datosEscolares?.tipoBachilleraro)
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
										Hombres & Mujeres
										</div>
										<div className="KPI-left bg-teal-500">
											<FontAwesomeIcon icon={faPerson} className="KPI-Icon"/> 
										</div>
											<Gender gender={gender}/>
										<div className="KPI-right">
											<FontAwesomeIcon icon={faPersonDress} className="KPI-Icon"/>
										</div>	
									</div>
								</div>

								<div className="item">
									<div className="box KPI-Text">
										<div>
										Total Alumnos
										</div>
										<div className="KPI bg-emerald-500">
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
											Soltero(a) & Union Libre
										</div>
										<div className="KPI-left bg-cyan-500">
											<FontAwesomeIcon icon={faDove} className="KPI-Icon"/> 
										</div>
											<Civil civil = {civil}/>
										<div className="KPI-right">
											<FontAwesomeIcon icon={faRing} className="KPI-Icon"/>
										</div>	
									</div>
								</div>

								
				</div>
				</div>

				<div className="box-w-chart Lives-With">
						<div className="Lives-With-Text">
							Con quien Vive
						</div>
						<LivesWith living = {living}/>
				</div>
				<div className="box-w-chart Reason-Related-Work">
						<div>
						Razon de Trabajo 
						</div>
						<WorkReason reason={reason}/>
						
				</div>
				<div className="box-w-chart Family-Income">
						<div className="Family-Income-Text">
						Ingresos Familiares
						</div>
						<FamilyIncome income = {income}/>
				</div>
				
				<div className="box-w-chart Bachilleratos">
					<div className="Bachilleratos-Text">
						Bachilleratos
					</div>
						<HighschoolsChart highschools = {highschools}/> 
				</div>
		</div>
    );


}



export default Dashboard;