import React from "react"
import ReactDOM  from "react-dom";
import './App.css';

class FindDuplicates extends React.Component{
  constructor(props) {
    super(props);
    this.state = {inputValue: "", duplicateLength: null, deleteDuplicate: null}
    this.findDuplicates = this.findDuplicates.bind(this)
    this.duplicateLengthMethod = this.duplicateLengthMethod.bind(this)
    this.deleteDuplicateMethod = this.deleteDuplicateMethod.bind(this)
    
  }
    findDuplicates(event) {
      this.setState((state) => 
      {const firstResult = event.target.value.split(" ")
       const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index).join(" ")
       return {inputValue: secondResult}
      }
      )
    }

    duplicateLengthMethod(event) {
      this.setState((state) => {
        const firstResult = event.target.value.split(" ")
        const secondResult = firstResult.filter((value, index) => firstResult.indexOf(value) !== index)
        const thirdResult = secondResult.length
        return {duplicateLength: thirdResult}
      })
    }
    
    deleteDuplicateMethod(event) {
      this.setState((state) => {
        const firstResult = event.target.value.split(" ")
        
        const fourthResult = firstResult
        let uniqueChars = [...new Set(fourthResult)].join(" ");
        return {deleteDuplicate: uniqueChars}
      })
    }
  render() {
    return(
      <>
        <h2 className="text-center text-primary">Type in your Hashtags</h2>
        <textarea className="form-control" type="text" rows={10} inputValue = {this.state.inputValue} duplicateLength = {this.state.duplicateLength} onChange = {e =>((this.findDuplicates(e), this.duplicateLengthMethod(e), this.deleteDuplicateMethod(e)))}></textarea>
        
        <div>
          <DuplicatesContent inputValue = {this.state.inputValue} />
        </div>
        <div>
          <DuplicatesLength duplicateLength = {this.state.duplicateLength} />
        </div>
        <div>
          <DeleteDuplicate deleteDuplicateMethod = {this.state.deleteDuplicate} />
        </div>
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
        <h4 className="m-3">Details of issues</h4>
        <h6 className="m-4">{this.props.inputValue}</h6>
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
      <div>
        <h4 className="m-3">No. of issues found</h4>
        <h6 className="m-4">{this.props.duplicateLength}</h6>
        
      </div>
    )
  }
}

class DeleteDuplicate extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h4 className="m-3">Issue free result</h4>
        <h6 className="m-4">{this.props.deleteDuplicateMethod}</h6>
      </>
    )
  }
}


class App extends React.Component{
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="body d-flex" style={{height: "100vh"}}>
        <div className="body" style={{width: "90%", height: "100%", margin: "auto"}}>
        
        <FindDuplicates  />
        
        
        </div>
      </div>
    )
  }
}

export default App;