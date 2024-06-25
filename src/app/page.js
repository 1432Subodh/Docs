'use client'

import { useEffect, useRef, useState } from "react"

function page() {


  const [noteData, setNoteData] = useState('')
  const [noteStore, setStore] = useState(null)


  const getInput = (e) => {

    if (typeof window !== 'undefined') {
      let obj = {
        note: noteData
      }
      if (window.localStorage.length == 0) {
        window.localStorage.setItem('note', JSON.stringify([obj]))
        // let LS = window.localStorage.getItem('note')
        // console.log(JSON.parse(LS))
      } else {
        let LS = window.localStorage.getItem('note')
        let localObj = JSON.parse(LS)
        localObj.push(obj)
        window.localStorage.setItem('note', JSON.stringify(localObj))
        setStore(JSON.parse(window.localStorage.getItem('note')))
      }
    }
  }

  useEffect(() => {
    setStore(JSON.parse(window.localStorage.getItem('note')))
  }, [])



  return (
    <div className="w-full min-h-screen bg-zinc-900 p-6 text-white">
      <textarea name="input" className="w-full h-20 bg-zinc-800 outline-none rounded-md px-2 py-1" placeholder="Write your own notes" onChange={(e) => setNoteData(e.target.value)}></textarea>
      <div>
        <button className="py-2 px-3 rounded-md bg-zinc-800 mt-2" onClick={getInput}>Get Data</button>
      </div>
      <div>
        {
          noteStore != null ? noteStore.map((ele, index) => <div>{ele.note}</div>) : <div>loading</div>
        }
      </div>
    </div>
  )
}

export default page