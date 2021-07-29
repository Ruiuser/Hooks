// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


let memoizedState = [];
let cursor =0;

function render() {
  cursor =0
  ReactDOM.render(
    <App/>,document.getElementById('root')
  );
}

let state;
function useState(initiaValue) {
  memoizedState[cursor] = memoizedState[cursor ] || initiaValue//3传值
  const currentCursor = cursor
   state  = state || initiaValue;//4参数赋值给变量
  console.log("传输",state)
  function setState(newState) {
    console.log("内部函数被执行")
    memoizedState[currentCursor] =newState
    render()
  }
  return [memoizedState[cursor++],setState]//返回App函数
}


function useEffect (callback,depArray) {
  const hasNoDeps =  !depArray;
  const deps =memoizedState[cursor];
  const hasChangedDeps = deps 
    ? !depArray.every((el,i) => el === deps[i]) 
    :true;
  if(!deps || hasChangedDeps) {
    console.log("这个是",callback())
     callback();
  };
  cursor ++
}

function App() {
  console.log('render app')
  // 解构赋值 
  
  const [count,setCount] = useState(0)//2声明变量调用useState函数
  console.log('数值',count)//4count变量获得数值
  console.log(setCount)//5setCount函数赋值给变量
  console.log("这个是个什么？",[count])

  useEffect( () => {
    console.log('update',count) 
  },[count] )

return (
  <div className="App">
    <p>You click {count} times</p>
    <button onClick = {() => setCount(count+1)}>Add count</button>
  </div>
)

}



ReactDOM.render(
<App/>,document.getElementById('root')//1执行App函数
)

export default App;
 