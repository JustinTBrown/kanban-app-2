import React from 'react'
import Notes from './Notes'
import uuid from 'uuid'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
  }
  render() {
    const {notes} = this.state // using a destructuring assignment here - extracts notes from this.state - this is needed for Notes, but not for <button>

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} />
      </div>
    )
  }
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    })
  }
}

// const notes = [
//   {
//     id: uuid.v4(),
//     task: 'Learn React'
//   },
//   {
//     id: uuid.v4(),
//     task: 'Do laundry'
//   }
// ]

  // export default () => (
  //   <div>
  //     <button onClick={() => console.log('add note')}>+</button>
  //     <Notes notes={notes} />
  //   </div>
  // )