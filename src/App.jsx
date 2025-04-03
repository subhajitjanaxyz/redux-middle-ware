
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/countSlice';

function App() {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.data)
  // const [count, setCount] = useState(0)
  const handeonlcick=()=>{
    dispatch(increment())
  }

  return (
    <>
       
<button onClick={handeonlcick}>count:{data}</button>
    </>
  )
}

export default App
