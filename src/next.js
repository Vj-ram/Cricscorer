import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import {Modal} from 'react-bootstrap';


function Next(props) {

  var val= props.overval;
  var valuelen= props.overval;

  const navigate= useNavigate();
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [winner, setWinner] = useState(false);
  // const winnerClose = () => setWinner(false);
  const winnerShow = () => {
    // setWinner(true);
    if(counter == "0" && count =="0"){
      alert (" Match didn't Start ")
    }else if(counter == "0" || count =="0"){
      alert (" Match didn't Finish ")
    }else if(counter > count){
        alert (props.fname + "  is winner  ")
    }else if(counter < count){
        alert (props.lname + "  is winner  ")
    }else if(counter == count){
        alert (" Match Draw ")
    }else{
        alert (" Results Unknown ")
    }
    
  }


  
  const [counter, setCounter] = useState(0)
  const [wide,setWide]=useState(0);
  const [noball,setNoball]=useState(0);
  const [wicket,setWicket]=useState(0);
  const [extra,setExtra]=useState(false);
  
  const increment = (e) => {

    // var value = e.target.value.replace(/[^\d]/g, "");


    if(e.target.value === "W" ){
      setCounter(prevCounter => prevCounter + 0);
      setWicket(prevCounter=>prevCounter + parseInt(1));
    }else if(e.target.value === ""){
      setCounter(prevCounter => prevCounter + 0);
    }else if(e.target.value === "."){
      setCounter(prevCounter => prevCounter + 0);
    }else if (e.target.value === "D"  ){
      setCounter(prevCounter => prevCounter + 1);
      setWide(prevCounter => prevCounter + parseInt(1));
      setExtra(true);
    }else if (e.target.value === "N" )  {
      setCounter(prevCounter => prevCounter + 1);
      setNoball(prevCounter => prevCounter + parseInt(1));
      setExtra(true);
    }else if (e.target.value === "B"){
      setCounter(prevCounter => prevCounter + 1);
    }else{
      setCounter(prevCounter => prevCounter + parseInt(e.target.value, 10));
    }
  }
  
  const [count, setCount] = useState(0)
  const [teamwide,teamsetWide]=useState(0);
  const [teamnoball,teamsetNoball]=useState(0);
  const [teamwicket,teamwicketSetWicket]=useState(0);
  const [teamextra,teamSetExtra]=useState("");

  const inc = (e) => {
    if(e.target.value === "W" ){
      setCount(prevCounter => prevCounter + 0);
      teamwicketSetWicket(prevCounter=>prevCounter + parseInt(1));
    }else if(e.target.value === ""){
      setCount(prevCounter => prevCounter + 0);
    }else if(e.target.value === "."){
      setCount(prevCounter => prevCounter + 0);
    }else if (e.target.value === "D"  ){
      setCount(prevCounter => prevCounter + 1);
      teamsetWide(prevCounter => prevCounter + parseInt(1));
      teamSetExtra(true)
    }else if (e.target.value === "N" )  {
      setCount(prevCounter => prevCounter + 1);
      teamsetNoball(prevCounter => prevCounter + parseInt(1));
      teamSetExtra(true)
    }else if (e.target.value === "B"){
      setCount(prevCounter => prevCounter + 1);
    }else{
      setCount(prevCounter => prevCounter + parseInt(e.target.value, 10));
    }
  }



  return (
    <div className='background'>
      <div className="crictitle">Cricket Scorer</div> 
      {/* <div><button className="Refresh" onClick={()=>navigate('/')}>Refresh</button></div> */}
      <div><button className="Instruct" variant="primary" onClick={handleShow} >Instructions</button></div>
      <div className='overall'> 
        <div className='teamone'>{props.fname}
          <ol>
            {(() => {
                  let li = [];
                  while (val > 0) {
                      li.push(
                      <li key={val}>
                        <input type="text" className='txt' maxlength="1"  onChange={(e) => increment(e)}/>
                        <input type="text" className='txt' maxlength="1"  onChange={(e) => increment(e)}/>
                        <input type="text" className='txt' maxlength="1"  onChange={(e) => increment(e)}/>
                        <input type="text" className='txt' maxlength="1"  onChange={(e) => increment(e)}/>
                        <input type="text" className='txt' maxlength="1"  onChange={(e) => increment(e)}/>
                        <input type="text" className='txt' maxlength="1"  onChange={(e) => increment(e)}/>
                        {extra?(<input type="text" className='txt' maxlength="1"  onChange={(e) => increment(e)}/>):("")}
                      </li>)
                      val --
                  }
                  return li
              })()}
          </ol>
          <div className='wide'>
            <div className='Run'>Runs:<input type='text' className='runtxt' value={counter}/></div>
            <div className='wicket'>Wicket:<input type='text' className='wickettxt' value={wicket}/></div>
            <div className='wides'>Wide:<input type="text" className='widestxt' value={wide}/></div>
            <div className='Noball'>NoBall:<input type="text" className='Noballtxt' value={noball}/></div>
          </div>
        </div>
        <div className='vl'></div>
        <div className='teamtwo'>{props.lname}
          <ol>
            {(() => {
                let list = [];
          
                while (valuelen > 0) {
                    list.push(<li key={valuelen}>
                      <input type="text" className='txt' maxlength="1" onChange={(e) => inc(e)} />
                      <input type="text" className='txt' maxlength="1" onChange={(e) => inc(e)} />
                      <input type="text" className='txt' maxlength="1" onChange={(e) => inc(e)}/>
                      <input type="text" className='txt' maxlength="1" onChange={(e) => inc(e)}/>
                      <input type="text" className='txt' maxlength="1" onChange={(e) => inc(e)}/>
                      <input type="text" className='txt' maxlength="1" onChange={(e) => inc(e)}/>
                      {teamextra?(<input type="text" className='txt' maxlength="1" onChange={(e) => inc(e)}/>):("")}
                      </li>)
                    valuelen --
                }
                return list
            })()}
          </ol>
          <div className='wide'>
            <div className='Run'>Runs:<input type='text' className='runtxt' value={count}/></div>
            <div className='wicket'>Wicket:<input type='text' className='wickettxt' value={teamwicket}/></div>
            <div className='wides'>Wide:<input type="text" className='widestxt'value={teamwide}/></div>
            <div className='Noball'>NoBall:<input type="text" className='Noballtxt' value={teamnoball}/></div>
          </div>
        </div>
      </div>
      <div><button className="winner" onClick={winnerShow}>Result</button></div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>NoBall - N</li>
            <li>Wide Ball-D</li>
            <li>Wicket-W</li>
            <li>Dot Ball-USE(.)</li>
          </ul>
        </Modal.Body>
      </Modal>
      {/* <Modal show={winner} onHide={winnerClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>WINNER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {()=>{if(counter > count){
            console.log (props.fname + "is winner")
            }else if(counter < count){
            console.log (props.lname + "is winner");
            }else{
            console.log ("Match Draw");
            }}}
        </Modal.Body>
      </Modal> */}
    </div>
  )
}

export default Next;

// $("").keyup(function(){
//   if (this.value.length == this.maxLength){
//       $(this).next('.phno').focus();
//   }else if (this.value.length == 0){
//       $(this).prev('.phno').focus();
//   } 
// });












