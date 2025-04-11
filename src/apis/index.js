import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsAPI = async(boardID) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardID}`)
  return response.data
}
