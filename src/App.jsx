import { useState, useMemo } from "react"


function App() {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(50);

  const Output = useMemo(() => {
    const calculateWeight = height/100;
    return (weight/(calculateWeight * calculateWeight)).toFixed(1);
  }, [weight, height])
  return (
    <main className="flex-col display-center item-center w-full h-screen px-80 py-40 ">
      <div className="border-[2px] border-zinc-200 h-60 px-10 bg-zinc-100 rounded-t-lg">
      <h1 className="text-center text-zinc-700 font-bold bg-blue-300 px-10 py-5 text-3xl">BMI-Calculater</h1>
        <p className="text-lg text-zinc-600 font-medium mt-3">Weight: {weight} kg</p>
        <input type="range" step={1} min={30} max={500} onChange={(e) => setWeight(e.target.value)}
        className="w-full mt-2"/>
        <p className="text-lg text-zinc-600 font-medium">Height: {height} cm</p>
        <input type="range" min={30} max={500} onChange={(e) => setHeight(e.target.value)}
        className="w-full mt-2"/>
      </div>
      <div className="Output-Section py-3 bg-blue-600 rounded-b-lg">
        <p className="text-center text-white text-2xl font-bold">Your BMI is :{Output} </p>
      </div>
    </main>
  )
}

export default App
