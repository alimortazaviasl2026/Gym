import React from 'react'
import ServicesContainer from '../../components/features/ServicesContainer/ServicesContainer'
import PlansContainer from '../../components/features/PlansContainer/PlansContainer'
import ToolsBox from '../../components/features/ToolsBox/ToolsBox'
import Customers from '../../components/features/Customers/Customers'
import Members from '../../components/features/Members/Members'
import Blog from '../../components/features/Blog/Blog'
import Community from '../../components/features/Community/Community'
import Questions from '../../components/features/Questions/Questions'
import { BiLogoPeriscope, BiRocket } from 'react-icons/bi'
import { FiArrowUpCircle } from 'react-icons/fi'
import { BarLoader, BeatLoader } from 'react-spinners'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Funnel, FunnelChart, LabelList, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts'

function Home() {


return (
  <div className='m6rem'>
   a
      <ServicesContainer/>
      {/* <PlansContainer/> */}
      <ToolsBox/>
      <Customers/>
      <Members/>
      <Blog/>
      <Community/>
       {/* <div className=' '>
            <button onClick={()=> document.documentElement.scrollTo(0 ,0)} className=' rounded-top-pill p-2 btn btn-sm btn-dark position-absolute' style={{bottom:'120px',right:'50%'}}>
               <FiArrowUpCircle className='rocket' size={30}/>
            </button>
       </div> */}
    </div>)
    
  
}

export default Home
