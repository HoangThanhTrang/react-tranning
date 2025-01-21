import { useState ,useEffect,useRef,useLayoutEffect} from 'react'

import './App.css'

function learnCount() {
  const [count,setCount] = useState(0)
  const tangCount = ()=> setCount(count + 1)
  const giamCount = () => setCount(count - 1)
  // useEffect(() =>{
  //   console.log('vô');
    
  // },[count])
  useEffect(()=>{
    console.log('trước khi thay đổi');
    return()=>{
      console.log('sau khi thay đổi');
    }
    
  },[])
  return (
    <div>
      <h1>Count tao đi mày :{count}</h1>
      <button onClick={tangCount}>Tăng</button>
      <button onClick={giamCount}>Giảm</button>
    </div>
  )
}


function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    console.log(1);
    
    return () => {
    console.log(2);

      window.removeEventListener("mousemove", handleMouseMove); // Dọn dẹp sự kiện
    };
  }, []);

  return (
    <div>
      <h1>Vị trí chuột:</h1>
      <p>X: {position.x}, Y: {position.y}</p>
    </div>
  );
}
function testUseEffect (){
  const boxRef = useRef(null)
  const [boxSize,setBoxSize]=useState({width:0,height:0})
  useLayoutEffect(()=>{
    const box = boxRef.current;
    setBoxSize({
      width:box.offsetWidth,
      height:box.offsetHeight,
    })
  },[])
  return (
    <div>
      <div ref={boxRef} style={{
        width:"200px",
        height:"300px",
        backgroundColor: "lightblue",
      }}>
        Đo kích thước
      </div>
      <p>Kích thước: {boxSize.width} x {boxSize.height}</p>
    </div>

  )
}
export default testUseEffect;

