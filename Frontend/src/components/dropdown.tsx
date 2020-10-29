import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Select from 'react-select';

function Dropdown(){
 
  const sortoptions = [{
        value : 1, 
        label: 'descending'
    }]

    const [selectedValue, setSelectedValue] = useState({
        value: 1, 
        label: 'descending'
    })

 

  return (
    <div className="dropdown">
      <head>
      <meta name = "viewport" content = "width = device-width, initial-scale = 1"/>
      <link rel = "stylesheet"
         href = "https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel = "stylesheet"
         href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css"/>
        <script type = "text/javascript"
         src = "https://code.jquery.com/jquery-2.1.1.min.js"></script>           
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js">
        </script> 
      </head>
       <ul id = "dropdown" className = "dropdown-content">
         <li><a href = "#">Inbox<span className = "badge">12</span></a></li>
         <li><a href = "#!">Unread<span className = "new badge">4</span></a></li>
         <li><a href = "#">Sent</a></li>

         <li><a href = "#">Outbox<span className = "badge">14</span></a></li>
      </ul>
      
      <a className = "btn dropdown-button" href = "#" data-activates = "dropdown">Mail Box
         <i className = "mdi-navigation-arrow-drop-down right"></i></a>
        
      
        

    </div>
  )
}

export default Dropdown;

