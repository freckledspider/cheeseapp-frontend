import { Link, useLoaderData, Form } from "react-router-dom"

function Index(props) {
  const cheese = useLoaderData()

  return (
    <div>
      <h2>Add a Cheese</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="Cheese Name" />
        <input type="input" name="image" placeholder="Cheese Picture" />
        <input type="input" name="countryOfOrigin" placeholder="Cheese Country of Origin" />
        <input type="submit" value="Add Cheese" />
      </Form>

      <h2>Cheese List</h2>
      {cheese.map(cheese => (
        <div key={cheese._id} className="cheeses">
          <Link to={`/${cheese._id}`}>
            <h1>{cheese.name}</h1>
          </Link>
          <img src={cheese.image} alt={cheese.name} />
          <h3>{cheese.countryOfOrigin}</h3>
        </div>
      ))}
    </div>
  )
}

export default Index