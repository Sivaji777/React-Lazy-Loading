import React, { Suspense ,lazy } from 'react';
const Nav=React.lazy(()=> import('../React-Router/Navigation'))

function LazyLoad() {
  return <div>
     <Suspense fallback={<div><h1>Loading............</h1></div>} >
     <h1>Lazy loading</h1>
         <Nav />
     </Suspense>
  </div>;
}

export default LazyLoad;
