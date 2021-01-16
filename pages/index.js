import Head from 'next/Head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home({pokemons}) {
  return (
    <Layout title="NextJS Pokedex"> 
      <h1 className="text-4xl mb-8 text-center">Pokedex</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index +1}`}>
              <a className="border p-4 border-red my-2 capitalize flex items-center bg-gray-200 rounded-md">
                <img className="w-20 h-20" src={pokemon.image} alt={pokemon.name} />
                <span className="mr-2 font-bold">{index+1}.</span>
                {pokemon.name}
              </a> 
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
    const {results} = await res.json() //on utilise ici const {results} au lieu de const data car l'api renvoie un tableau nommé results 
    const pokemons = results.map((result, index)=> {
      const paddedIndex = ("00" + (index+1)).slice(-3)
      const image =  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return {
        ...result, 
        image
      }
    });
    return {
      props: {pokemons}
    }
  } catch (err){
      console.error
  }
}
//assets.pokemon.com/assets/cms2/img/pokedex/full.001.png
