import React from "react";
import {useState} from "react";
import "./App.css";
function App()
{
    const[msg,finalmsg]=useState([])
    const[arr,finalarr]=useState([
      {
        URL1:"",
        URL2:"",
        URL3:""
      }
    ])
    function handleChange(e)
    {
      finalarr({...arr,[e.target.name]:e.target.value})
    }
    let URL1=arr.URL1;
    let URL2=arr.URL2;
    let URL3=arr.URL3;
    function handleSubmit(e) {
      e.preventDefault();
      finalmsg([...msg,{URL1,URL2,URL3}])
      finalarr({URL1:"",URL2:"",URL3:""})
    }
    return(
      <div className="App">
        
          <h1>Image Loader</h1>
          <div className="fix-table">
          <p>Image URL 1</p>
          <input type="url" name='URL1' value={arr.URL1} onChange={handleChange} placeholder="Enter the image URL 1"></input><br></br>
  
          <p>Image URL 2</p>
          <input type="url" name='URL2' value={arr.URL2} onChange={handleChange} placeholder="Enter the image URL 2"></input><br></br>
  
          <p>Image URL 3</p>
          <input type="url" name='URL3' value={arr.URL3} onChange={handleChange} placeholder="Enter the image URL 3"></input><br></br>
  
          <button onClick={handleSubmit}>create</button>
        </div>
        <h1>Image List</h1>
        <div className="fit-image">
          <div>
            {
              msg.map((figure,id)=>{
                  return(
                    
                      <div key={id}>
                      <div className="set"> 
                      <img src={figure.URL1} alt="new"/>
                      </div>
  
                      <div className="set">
                      <img src={figure.URL2} alt="new" />
                      </div>
  
                      <div className="set">
                      <img src={figure.URL3} alt="new" />
                      </div>
                      </div>    
                  )
                }
              )
            }
          </div>
        </div>
      </div>
    )
  }

export default App;