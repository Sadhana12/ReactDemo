import './page.css'
import {useState} from 'react';
import { Button2 } from '../components/button/button2.js';
import { ListComponent } from '../components/list/listcomp.js'; 


function Demo() { 
  
  const [components, setComponents] = useState(["USA"]); 
  const [componentNames, setComponentNames] = useState([ 'Canada', 'Mexico', 'UK', 'Germany', 'France', 'Spain', 'Japan' ]); 
  
  function addComponent() { 
    
    if (componentNames.length > 0) { 
      
      setComponents([...components, componentNames[0]]);
      componentNames.splice(0, 1);
      
    } else { 
      
      window.alert("No more countries to add!");
      
    } 
    
  } 
  
  return ( 
    
    <div className='CenterComponent'> 
    
      <Button2 onClick={addComponent} text="Call Component"/> 
      {components.map((item, i) => ( <ListComponent text={item} index={i} /> ))} 
      
    </div> 
    
  ) 
  
} 

export default Demo;