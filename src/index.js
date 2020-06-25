//First prject

import React from 'react'
import ReactDOM from 'react-dom'
import Faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

//get local time
function getTime() {
  return (new Date()).toLocaleTimeString()
}

//Component comments
const Test = () =>{
    return (     
      <div className="ui container comments">
          <ApprovalCard>
             <CommentDetail author="Oscar" date={getTime()} /> 
          </ApprovalCard>  
          <ApprovalCard>
             <CommentDetail author="Saul" date={getTime()}/>
          </ApprovalCard>        
          <ApprovalCard>
             <CommentDetail author="Ricardo" date={getTime()} />  
          </ApprovalCard>
              
      </div>     
      
    )
}

ReactDOM.render(<Test />, document.getElementById('root'))
