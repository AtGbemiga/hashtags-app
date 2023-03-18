import React from "react"
import ReactDOM  from "react-dom";

//Logic

// Display
class InformationDisplay extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
        <h3>Updates</h3>
      </>
    )
  }
}
class LogicBtn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Btn: <button className="btn btn-success">Find similar hashtags</button>
    }
    this.firstMethod = this.firstMethod.bind(this)
    this.secondMethod = this.secondMethod.bind(this)
  }
  firstMethod() {
    this.findDuplicates(this.setState({
      Btn: <button className="btn btn-primary">Replace similar hashtags</button>
    }))
  }
  secondMethod() {
    this.unknownMethod(this.setState({
      Btn: <button className="btn btn-primary">Copy changes</button>
    }))
  }
  render() {
    return(
      <>
        {/*<LogicArea Btn = {this.state.Btn} />*/}
        <div onClick={(this.firstMethod, this.secondMethod)}>{this.state.Btn}</div>
      </>
    )
  }
}


class FindDuplicates extends React.Component{
  constructor(props) {
    super(props);
    this.state = {inputValue: "", duplicateLength: 0}
    this.findDuplicates = this.findDuplicates.bind(this)
    this.duplicateLengthMethod = this.duplicateLengthMethod.bind(this)
  }
    findDuplicates(event) {
      this.setState((state) => 
      {const firstResult = event.target.value.split(" ")
       const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index)
       return {inputValue: <h3>{secondResult}</h3>}
      }
      )
    }
    duplicateLengthMethod(event) {
      this.setState((state) => {
        const firstResult = event.target.value.split(" ")
        const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index)
        const thirdResult = secondResult.length
        return {duplicateLength: <h3>{thirdResult}</h3>}
      })
    }
  render() {
    return(
      <>
        <textarea inputValue = {this.state.inputValue} duplicateLength = {this.state.duplicateLength} onChange = {e =>((this.findDuplicates(e), this.duplicateLengthMethod(e)))}></textarea>
        
        <DuplicatesContent inputValue = {this.state.inputValue} />
        <DuplicatesLength  duplicateLengthMethod = {this.state.duplicateLength}/>
        <DeleteDuplicate />
      </>
    )
  }
}

class DuplicatesContent extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
        
        {this.props.inputValue}
      </>
    )
  }
}

class DuplicatesLength extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <>
        
        {this.props.duplicateLengthMethod}
      </>
    )
  }
}

class DeleteDuplicate extends React.Component{
  constructor(props) {
    super(props);
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="d-flex justify-content-between">
        <FindDuplicates />
        <DuplicatesContent />
        <DuplicatesLength />
        
      </div>
    )
  }
}

export default App;
