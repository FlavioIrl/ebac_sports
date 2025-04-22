import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favor = action.payload

      if (state.itens.find((produto) => produto.id === favor.id)) {
        alert('item já favoritado')
      } else {
        state.itens.push(favor)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer

// function favoritar(produto: Produto) {
//     if (favoritos.find((p) => p.id === produto.id)) {
//       const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//       setFavoritos(favoritosSemProduto)
//     } else {
//       setFavoritos([...favoritos, produto])
//     }
//   }
