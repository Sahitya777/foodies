

function Recipes() {
  const searches=['pizza','burger','cookies','juice','biryani','salad','ice cream','pudding','soup']
  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
      {searches.map(search => (<div  className="search-items">
        {search}
      </div>))}
      </div>
    </div>
  )
}

export default Recipes;