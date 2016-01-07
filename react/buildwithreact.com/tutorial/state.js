/*
  I read the tutorial at http://buildwithreact.com/tutorial/state.
  This is my implementation.
  I changed it up a bit in that I added another button that can be used to add additional boxes.
  
  It can be run by entering it here:  http://jsbin.com/namukikixu/1/embed?js,console,output
*/


var Box = React.createClass({
  render: function() {
    var classname = "board";
    if(this.props.selected) {
      classname += " selected";
    }
    return <div className={classname}>{this.props.index+1}</div>;
  }
});

var BoxListCreator = React.createClass({
  getInitialState: function() {
    return {currentIndex: 0 };
  },
  clickAction: function(evt) {
    this.setState({
      currentIndex: (this.state.currentIndex+1)%this.props.numBoxes
    });
  },
  render: function() {
    var boxes = [];
    for(let i=0;i<this.props.numBoxes;++i) {
      boxes.push(<Box selected={this.state.currentIndex==i} index={i} key={i} />); 
    }
    return (<div>{boxes}<br /><button onClick={this.clickAction}>Click me</button></div>);
  }
});

var AddBoxCreator = React.createClass({
  getInitialState: function() {
    return {numBoxes: this.props.initialBoxes};
  },
  addBox: function() {
    this.setState({numBoxes: (this.state.numBoxes + 1)});
  },
  render: function() {
    return <div><BoxListCreator numBoxes={this.state.numBoxes} /><br /><button onClick={this.addBox}>Add a box</button></div>
  }
});      


ReactDOM.render(
  <AddBoxCreator initialBoxes={4} />,
  document.getElementById('container')
);
