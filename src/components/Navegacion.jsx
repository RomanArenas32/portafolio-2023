import { useEffect, useState } from "react";
import { IconMoonSun, MenuHamburguesa } from "../utils"
const dlModeInicial = localStorage.getItem("theme");

export const Navegacion = () => {

  const [dlMode, setdlMode] = useState(dlModeInicial);
  const [colorIcono, setColorIcono] = useState("rgb(18, 18, 19)")

  useEffect(() => {
    if (dlMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
      setColorIcono("aliceblue");
    }
    else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light")
      setColorIcono("rgb(18, 18, 19)");
    }
  }, [dlMode])
  return (
    <div className="flex p-1 justify-between">
      <MenuHamburguesa />
      <div>banderas</div>
      <button onClick={() => setdlMode(!dlMode)} className="w-10">
        <IconMoonSun colorIcono={colorIcono} />
      </button>
    </div>

  )
}
