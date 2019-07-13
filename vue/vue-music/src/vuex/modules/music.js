import api from '../../api'
import * as types from '../types'
import { fingIndex } from '@/common/util.js'

const state = {
  playList:[],
  currentIndex:-1,
  favoriteList:[],
  playHistory:[],
  playing: false,

}

const mutations = {
  [types.SET_PLAYLIST] (state, playlist) {
    state.playList = playlist
  },
  [types.SET_CURRETNINDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_PLAYING] (state, status) {
    state.playing = status
  },
  [types.SAVE_PLAYHISTORY] (state, playload) {
    state.playHistory = playload
  },
  [types.SAVEV_FAVORITE_LIST] (state, playload) {
    state.favoriteList = playload
  },
}

const actions = {
  selectPlaySong({ commit, state }, song){
    let palylist = state.palyList.slice()
    let currentIndex = state.currentIndex
    //查找当前列表中是否需有待插入的歌曲并返回其索引
    let fpIndex = fingIndex(palylist, song)
    //如果已经包含这首歌，
    if(fpIndex > -1){
      currentIndex = fpIndex
    }else{
      palylist = [...palylist, song]
      currentIndex = palylist.length - 1 
    }

    commit()
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
