import React from "react";

class LifeSycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
    console.log("1 constructor");
  }

  componentWillMount() {
    //birinchi renderdan oldin
    console.log("2 componentWillMount");
  }

  componentDidMount() {
    //birinchi renderdan keyin
    console.log("3 componentDidMount");
  }

  componentWillReceiveProps() {
    //parentdan childga prop kelganda
    console.log("4 componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    //component update qilish yoki qilmaslik
    console.log("5 shouldComponentUpdate");
    // return true;
  }

  componentWillUpdate() {
    //renderdan oldin va props kelishidan keyin
    console.log("6 componentWillUpdate");
  }

  render() {
    console.log("7 render");
    return (
      <div>
        <h1>life scyle</h1>
      </div>
    );
  }
}

export default LifeSycle;
