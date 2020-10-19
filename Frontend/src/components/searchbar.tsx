import React from 'react'



function Searchbar() {
  return (
    
    <div>
        <div  className="searchbar" >
            <input placeholder="Search for movie..."/>
            <a className="waves-effect waves-light btn">Search</a>
          
            <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

          
            <ul id='dropdown1' className='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
            </ul>
        </div>
       

    </div>
  );
}

export default Searchbar;


