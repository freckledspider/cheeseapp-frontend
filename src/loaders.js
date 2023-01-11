const URL = "https://cheeseapp-frontend.onrender.com"

export const cheeseLoader = async () => {
  const response = await fetch(URL + "/cheese")
  const cheese = await response.json()
  return cheese
}

export const cheeseShowLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id )
    const cheese = await response.json()
    return cheese
}