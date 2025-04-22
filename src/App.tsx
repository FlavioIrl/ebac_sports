import { useDispatch, useSelector } from 'react-redux'
import { favoritar } from './store/reducers/favorito'
import { RootState } from './store'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favorito.itens)

  // function favoritar(produto: Produto) {
  //   if (favoritos.find((p) => p.id === produto.id)) {
  //     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
  //     setFavoritos(favoritosSemProduto)
  //   } else {
  //     setFavoritos([...favoritos, produto])
  //   }
  // }

  const favoritarProduto = (produto: Produto) => {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos favoritos={favoritos} favoritar={favoritarProduto} />
      </div>
    </>
  )
}

export default App
