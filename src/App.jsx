import { useState } from "react"
import data from "./data"
import List from "./List"

const App = () => {
  const [people, setPeople] = useState(data)
  const [btnText, setBtnText] = useState("hidden all")

  const handleClick = () => {
    if (people.length === 0) {
      setPeople(data)
      setBtnText("hidden all")
    } else {
      setPeople([])
      setBtnText("show all")
    }
  }
  return (
    <>
      <main>
        <section className="container">
          <h2>{people.length} Birthdays today</h2>
          <List people={people} />
          <button className="btn btn-block" onClick={() => handleClick()}>
            {btnText}
          </button>
        </section>
      </main>
    </>
  )
}
export default App
