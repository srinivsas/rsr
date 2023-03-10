import React from "react";
class ChildProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child-constractor ");
    console.log();
  }
  componentDidMount() {
    console.log("Child-DidMount");
  }
  render() {
    console.log("Child-render ");

    return (
      <div>
        <h3>this is children</h3>
      </div>
    );
  }
}
export default ChildProfile;
