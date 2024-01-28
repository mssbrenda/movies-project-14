import React, {useState} from "react";
/////////import React from "react";


export default class Reviews extends React.Component {
  constructor(props){
    super(props)
this.state = {
  totalReviews: 0,
  allReviews: [],
      };

    }
    HandleLeaveReview=(input)=>{
this.setState ((prevState) => ({
  totalReviews: prevState.totalReviews + 1,
  allReviews: prevState.allReviews.input.PushManager,
}));
  }
  render(){
    return (
        <>
      <div>
        <div>
          <form>
            <input type="text" placeholder="This movie was..."></input>
            <button className="btn btn-primary" onClick="HandleLeaveReview">Share</button>






</form>
</div>
</div>
</>)}
}
