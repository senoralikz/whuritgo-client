'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .then(ui.onShowExpenses)
    .catch(ui.onFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onModalFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

const onNewExpense = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.newExpense(data)
    .then(ui.onNewExpenseSuccess)
    .then(ui.onShowExpenses)
    .catch(ui.onModalFailure)
}

const onUpdateExpense = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  if (data.expense.id.length !== 0) {
    api.updateExpense(data)
      .then(ui.onUpdateExpenseSuccess)
      .then(ui.onShowExpenses)
      .catch(ui.onModalFailure)
  } else {
    $('.modal-message').text('Please provide an expense id')
    $('.modal-message').fadeIn()
    $('.modal-message').delay(2000).fadeOut('slow')
  }
}

const onDeleteExpense = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  if (data.expense.id.length !== 0) {
    api.deleteExpense(data)
      .then(ui.onDeleteExpenseSuccess)
      .then(ui.onShowExpenses)
      .catch(ui.onModalFailure)
  } else {
    $('.modal-message').text('Please provide an expense id')
    $('.modal-message').fadeIn()
    $('.modal-message').delay(2000).fadeOut('slow')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewExpense,
  onUpdateExpense,
  onDeleteExpense
}
