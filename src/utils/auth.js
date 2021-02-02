

import Vue from 'vue'

const userInfo = 'mt-username';

export function getInfo() {
  // return localStorage.getItem(userInfo)
  return Vue.$cookies.get(userInfo)
}

export function setInfo(username) {
  // return localStorage.setItem(userInfo, username)
  return Vue.$cookies.set(userInfo, username)
}

export function removeInfo() {
  // return localStorage.removeItem(userInfo)
  return Vue.$cookies.remove(userInfo)
}
