import { GetServerSideProps, GetStaticProps } from "next"
import { loadTemp } from "../lib"

type Props = {
  value: string
}

export default function Home({value}: Props){
  return(
    <h1>Hello world {value}</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  const value = await loadTemp()
  return { 
    props: {
      value
    }
  }
}
