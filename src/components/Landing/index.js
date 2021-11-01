import React,{useRef,useEffect,useState} from 'react'
import { Fragment } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';

const Landing = () => {

    const refWolverine = useRef(null);
    const [btn, setBtn] = useState(false);

    useEffect( ()=>{
        refWolverine.current.classList.add("startingImg");
        setTimeout(()=>{
            refWolverine.current.classList.remove("startingImg");
            setBtn(true)
        },1000)
    }, [])

    const showLeftClaws = (e)=>
    {
      refWolverine.current.classList.add("leftImg");
    }

    const showrightClaws = (e)=>{
      refWolverine.current.classList.add("rightImg");
    }

    const clearClaws = (e)=>{

        if (refWolverine.current.classList.contains("leftImg")){
            refWolverine.current.classList.remove("leftImg");
        }else if (refWolverine.current.classList.contains("rightImg")){
            refWolverine.current.classList.remove("rightImg");
        };
    }

    // const clearRightClaws = (e)=>{
    //  refWolverine.current.classList.remove("rightImg");
    // }

    const displayBtn = btn && (
      <Fragment>
        <div onMouseOut={clearClaws} onMouseOver={showLeftClaws} className="leftBox">
          <Link to="/signup" className="btn-welcome">Inscription</Link>
        </div>
        <div onMouseOut={clearClaws} onMouseOver={showrightClaws} className="rightBox">
          <Link to="/login" className="btn-welcome">Connexion</Link>
        </div>
      </Fragment>
    );
    return (
      <main ref={refWolverine} className="welcomePage">
        {displayBtn}
      </main>
    );
}

export default Landing
