import React from 'react';
import Moviebox from './moviebox'

///static/media/avengers.bd2db828.jpg

function Content() {
  return (
    
    <div>
      
        <Moviebox link={"https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg"}/>
        <Moviebox link={"https://i.pinimg.com/originals/cc/f5/30/ccf53081983d347d1b312a5dcf38ba0e.jpg"}/>
            

    </div>
  );
}

export default Content;

/**
 * card-reveal div with a span.card-title inside to make this work. Add the class activator to an element inside the card to allow it to open the card reveal.
 */
