import React from 'react';

import TeachingTitle from './TeachingTitle'

function ContainerTeachingTitle(props) {
  return (
    <TeachingTitle backgroundColor={"blue"} style={{display: "flex", alignItmes: "center", width: "100%"}}>
      {props.children}
    </TeachingTitle>
  );
}

export default ContainerTeachingTitle