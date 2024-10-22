import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM = "https://catfact.ninja/fact/"
//const CAT_ENDPOINT_IMAGE = ``https://cataas.com/cat/says/${FirstWords}?size=50&color=red&json=true`` // buscar en la documentación de Cataas api

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // useEffect(() => { // Usando async/await
  //   async function fetchCatFact() {
  //     const response = await fetch(CAT_ENDPOINT_RANDOM)
  //     const data = await response.json()
  //     setFact(data.fact)
  //   }
  //   fetchCatFact()
  // }, [])

  useEffect(() => {
    // Usando promesas
    fetch(CAT_ENDPOINT_RANDOM)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(" ", 3).join(" ")
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
      .then((response) => response.url)
      .then((url) => {
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main style={{ display: "flex", flexDirection: "column", placeItems: "center" }}>
      <h1>App Gatitos</h1>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
        {fact && <p>{fact}</p>}
        {imageUrl && <img style={{ maxWidth: "320px", maxHeight: "auto" }} src={imageUrl} alt="Image Cat" />}
      </section>
    </main>
  )
}
