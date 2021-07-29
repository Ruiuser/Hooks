import ReactDOM from 'react-dom';
import App from './App'


// class User extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       count:1
//     }
//     // this.handleClick = this.handleClick.bind(this)
//   }

//   render() {
//     return (
//       <div>
//         <h1>name:{this.state.count}</h1>
//         <button onClick = {()=>this.handleClick() }>改变名字</button>
//       </div>
//     )
//   }

//   handleClick() {
//     this.setState({count:this.state.count+1})
//   }
// }






ReactDOM.render(
  <App/>,document.getElementById('root')
  );

