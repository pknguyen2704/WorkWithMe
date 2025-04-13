import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROOT } from '~/utils/constants'
import axios from 'axios'
import { isEmpty } from 'lodash'
import { generatePlaceholderCard } from '~/utils/formatters'
import { mapOrder } from '~/utils/sorts'

// voi du lieu bat dong bo thi su dung extraReducer
export const fetchBoardDetailsAPI = createAsyncThunk(
  'activeBoard/fetchBoardDetailsAPI',
  async(boardId) => {
    const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
    return response.data
  }
)

// khoi tao gia tri cua mot state cua mot slice trong redux
export const activeBoardSlice = createSlice({
  name: 'activeBoard',
  initialState: {
    currentActiveBoard: null
  },
  // xu ly du lieu dong bo de nap du lieu vao redux
  reducers: {
    updateCurrentActiveBoard: (state, action) => {
      const board = action.payload


      // xu ly du lieu neu can thiet
      // ... 

      // update lai du lieu
      state.currentActiveBoard = board
    }
  },
  // extra reducer: Noi xu ly du lieu bat dong bo
  extraReducers: (builder) => {
    builder.addCase(fetchBoardDetailsAPI.fulfilled, (state, action) => {
      // action.payload chinh la reponse.data
      const board = action.payload
      // xu ly du lieu neu can thiet
      board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')
      board.columns.forEach(column => {
          if(isEmpty(column.cards)) {
              column.cards = [generatePlaceholderCard(column)]
              column.cardOrderIds = [generatePlaceholderCard(column)._id]
          }
          else {
              column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
          }
      })

      // update lai du lieu
      state.currentActiveBoard = board
    })
  }
})

// action: la noi cac component duoi no goi bang dispatch toi no, cap nhat du lieu vao redux store
export const { updateCurrentActiveBoard } = activeBoardSlice.actions

// selector: nguoc lai voi action, lay du lieu tu redux store
export const selectCurrentActiveBoard = (state) => {
  return state.activeBoard.currentActiveBoard
}
// export default activeBoardSlice.reducer
export const activeBoardReducer = activeBoardSlice.reducer