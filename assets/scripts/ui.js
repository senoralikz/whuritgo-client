'use strict'

const store = require('./store')
const api = require('./api')

const onShowExpenses = function () {
  api.showExpenses()
    .then(onShowExpensesSuccess)
    .catch(onFailure)
}

const onSignUpSuccess = function (response) {
  // $('#message').html('<p>Signed Up Successfully!</p>')
  $('#successFailureMessage').html('<div class="card text-white bg-success"><div class="card-header">Success</div><div class="card-body"><p class="card-text">Successfully Signed Up.</p></div></div>')
  $('#successFailureMessage').fadeIn()
  $('#successFailureMessage').delay(2000).fadeOut('slow')
  $('#sign-up').trigger('reset')
  $('#sign-up-modal').modal('hide')
}

const onSignInSuccess = function (response) {
  // $('#message').html('<p>Signed In Successfully!</p>')
  // $('#successFailureMessage').html('<div class="alert alert-success" role="alert">Signed In Successfully!</div>')
  $('#successFailureMessage').html('<div class="card text-white bg-success"><div class="card-header">Success</div><div class="card-body"><p class="card-text">Successfully Signed In!</p></div></div>')
  $('#successFailureMessage').fadeIn()
  $('#successFailureMessage').delay(2000).fadeOut('slow')
  $('#sign-in').trigger('reset')

  store.user = response.user

  $('#sign-in-modal').modal('hide')
  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const onShowExpensesSuccess = function (response) {
  $('#expenses').html('<p>Here are all your expenses:</p>')

  const expenses = response.expenses

  let expensesHTML = ''

  if (expenses.length !== 0) {
    expenses.forEach(currentExpense => {
      const currentExpenseHTML = (`
          <div>
          <div>
          <h4>item: ${currentExpense.item}</h4>
          <p>quantity: ${currentExpense.quantity}</p>
          <p>date purchased: ${currentExpense.date}</p>
          <p>cost: ${currentExpense.cost}</p>
          <p>expense id: ${currentExpense.id}</p>
          </div>
          <div>
          </div>
          <hr>
          `)

      expensesHTML += currentExpenseHTML
    })
    $('#display-expenses').html(expensesHTML)
  } else {
    $('#display-expenses').html('You have not entered any purchases yet')
  }
}

const onChangePasswordSuccess = function (response) {
  // $('#message').html('<p>Successfully Changed Password!</p>')
  $('#successFailureMessage').html('<div class="card text-white bg-success"><div class="card-header">Success</div><div class="card-body"><p class="card-text">Successfully Changed Password.</p></div></div>')
  $('#successFailureMessage').fadeIn()
  $('#successFailureMessage').delay(2000).fadeOut('slow')
  $('#change-password').trigger('reset')
  $('#changePasswordModal').modal('hide')
}

const onSignOutSuccess = function () {
  // $('#message').html('<p>Signed Out Successfully!</p>')
  $('#successFailureMessage').html('<div class="card text-white bg-success"><div class="card-header">Success</div><div class="card-body"><p class="card-text">Successfully Signed Out.</p></div></div>')
  $('#successFailureMessage').fadeIn()
  $('#successFailureMessage').delay(2000).fadeOut('slow')

  store.user = null

  $('#display-tasks').html('')

  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const onFailure = function (error) {
  // $('#message').text('Failed with error: ' + error.responseJSON.message)
  $('#successFailureMessage').html(`<div class="card text-white bg-danger"><div class="card-header">Error</div><div class="card-body"><p class="card-text">Failed with error: ${error.responseJSON.message}</p></div></div>`)
  $('#successFailureMessage').fadeIn()
  $('#successFailureMessage').delay(2000).fadeOut('slow')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onShowExpenses,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onFailure
}
