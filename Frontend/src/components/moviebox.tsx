import React from 'react';


function Moviebox(props:any) {
  return (

       <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className ="activator"  src={props.img}/>
          
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 activator">{props.title}<i className="material-icons right activator">close</i></span>
                <p>{props.description}</p>
            </div>
        </div>
        

  );
}

export default Moviebox;
