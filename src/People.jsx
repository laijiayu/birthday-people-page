const People = ({ name, age, image }) => {
  return (
    <>
      <article className="person">
        <img className="img" src={image}></img>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    </>
  )
}

export default People
