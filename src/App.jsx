import { useState } from "react"

function App() {
  const [someColor, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: someColor}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-xl gap-3 px-3 py-2 rounded-2xl bg-voilet-50">
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "purple"}}>purple</button>
          <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "gray"}}>gray</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}}>green</button>
          <button onClick={() => setColor("orchid")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "orchid"}}>orchid</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "blue"}}>blue</button>
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}}>red</button>
        </div>
      </div>
    </div>
  )
}

export default App
