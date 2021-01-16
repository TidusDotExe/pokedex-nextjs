import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/Link'

export default function pokemons({pokemon}) {
    return <Layout title={pokemon.name}>
        <h1 className="text-4xl mb-2 text-center capitalize">{pokemon.name}</h1>
        <img className="mx-auto mb-2" src={pokemon.image} alt={pokemon.name} />
        <p>
            <span className="font-bold mr-2">Poids: {pokemon.weight / 10} kg</span>
        </p>
        <p>
            <span className="font-bold mr-2">Taille: {pokemon.height / 10} m</span>
        </p>
        <h2 className="text-2xl mt-6 mb-2">Types</h2>
        {pokemon.types.map((type, index) => <p className="capitalize" key={index}>
            {type.type.name}
        </p>)}
        <p className="mt-10 text-center">
            <Link href="/">
                <a className="text-2xl underline">Home</a>
            </Link> 
        </p>
    </Layout>
} 

export async function getServerSideProps({query}) {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();
        if(id<10) var test = ("00" + (id).slice(-3));
        else if(id < 100) var test = ("0" + (id).slice(-3));
        else var test = id.slice(-3);
        const paddedIndex = test;
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`; 
        pokemon.image = image;
        return {
            props: {
                pokemon
            }
        } 
    } catch {

    }
}