import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { favoritar } from '../store/reducers/favorito'
import { RootState } from '../store/index'

import * as S from './styles'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
  favoritar: () => void
}

const ProdutosComponent = ({ produtos }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  const aoClicarFavoritar = (produto: ProdutoType) => {
    dispatch(favoritar(produto))
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={() => aoClicarFavoritar(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
