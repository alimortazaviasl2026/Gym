import { useState } from "react"

const useInput = (def) => {
  const [state , setState] = useState(def)
  const data = (e) => setState(e.target.value) 
  const props = {
      value : state,
      onChange : data 
  }

  return props
}
export default useInput