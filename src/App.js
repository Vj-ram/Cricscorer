import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Next from './next.js';


function App() {
  
 const [teamname1,setTeamName1]=useState('')
 const [teamname2,setTeamName2]=useState('')
 const [over,setOver]=useState('')
 const [showModal, setShowModal] = useState(true)
//  const navigate = useNavigate();

 function Validation(){
    if (teamname1 ==='' || teamname2 ===''){
      alert("Enter a team name");
    }
    else if(over.length === "0"){
      alert("Enter a over");
    }
    else if(teamname1 === teamname2){
      alert("Two Team names are not same");
    }else{
      setShowModal(false);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    Validation();
  }
  return (
   <>
    {showModal ? (<form onSubmit={handleSubmit}>
      <div className="App">  
        <div className="crictitle">Cricket Scorer</div> 
        <div>
          <div className="teamone">Team1<input type="text" placeholder="Enter Name" value={teamname1} onChange={(e)=>setTeamName1(e.target.value)} className='valid'/></div>  

          <div className="teamtwo">Team2<input type="text" placeholder="Enter Name" value={teamname2} onChange={(e)=>setTeamName2(e.target.value)} className='valid' /></div> 
          <div className="overs">Over<input type="number" placeholder="Enter Overs" min="1" max="90" value={over}  onChange={(e)=>setOver(e.target.value)} className='valid'/>
          <input type="submit" className='sub'/></div>
        </div>
        
      </div>
    </form>):(<Next fname={teamname1} lname={teamname2} overval={over}/>)}
    
    </>
    
  );
}
export default App;