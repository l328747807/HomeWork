import React  from 'react'; 
function Confirm({ show = true }) {
	var promise = show
  if (promise) {
    return <span>content</span>;
  }else{
	  promise = false
  }
  return promise;
}

export default Confirm;
