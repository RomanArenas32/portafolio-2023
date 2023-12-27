import { useEffect, useState } from "react"
import { IconMoonSun } from "../utils/IconMoonSun";

export const Header = () => {

    const [dlMode, setdlMode] = useState(false);
    const [colorIcono, setColorIcono] = useState("rgb(18, 18, 19)")

    useEffect(()=>{
        if(dlMode){
            document.documentElement.classList.remove("ligth");
            document.documentElement.classList.add("dark");
            setColorIcono("aliceblue");
        }
        else{
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("ligth");
            setColorIcono("rgb(18, 18, 19)");
        }
    }, [dlMode])

    return (
        <header>
            <div>
                <h1 className="text-3xl text-center	">
                    Roman Emiliano Arenas
                    <p className="text-xl">Full Stack developer</p>
                </h1>

                <button onClick={()=> setdlMode(!dlMode)}>
                   <IconMoonSun colorIcono={colorIcono}/>
                </button>
            </div>
        </header>

    )
}
