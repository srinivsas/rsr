import React from "react";
import ChildProfile from "./ChildProfile";
// const Profile = () => {
//   return (
//     <div>
//       <h3>this is srinivas</h3>
//     </div>
//   );
// };
// export default Profile;

class Profile extends React.Component {
  constructor() {
    super();
    console.log("Parent-constractor ");
    this.state = {
      count: 1,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState(pre => ({
      count: pre + 1,
    }));
  }
  componentDidMount() {
    console.log("Parent-DidMount");
  }
  mponentDidUpdate() {}
  render() {
    console.log("Parent-render ");

    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <ChildProfile />
      </div>
    );
  }
}
export default Profile;
