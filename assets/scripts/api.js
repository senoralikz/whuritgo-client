'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data: JSON.stringify(formData)
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data: JSON.stringify(formData)
  })
}

const changePassword = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password/',
    method: 'PATCH',
    data: JSON.stringify(formData),
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

const showExpenses = function () {
  return $.ajax({
    url: config.apiUrl + '/expenses/',
    method: 'GET',
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

const newExpense = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/expenses/',
    method: 'POST',
    data: JSON.stringify(formData),
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  showExpenses,
  newExpense
}
