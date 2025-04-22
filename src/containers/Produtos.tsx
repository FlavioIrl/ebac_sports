import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosApiQuery } from '../services/api'
import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}
const ProdutosComponent = ({ favoritos, favoritar }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((fav) => fav.id === produto.id)
  }

  const { data: produtosData, isLoading } = useGetProdutosApiQuery()
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtosData?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
