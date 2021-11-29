'use strict'

const loadModel = new Load() // eslint-disable-line no-undef

function initAddForm () {
  const form = window.document.querySelector('#load-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const loadData = {}
    formData.forEach((value, key) => {
      loadData[key] = value
    })

    loadModel.Create(loadData)

    e.target.reset()
  })
}

function initLists () {
  window.jQuery('#load-list').DataTable({
    data: loadModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Weight', data: 'weight' }
    ]
  })
}

function initListEvents () {
  document.addEventListener('loadsListDataChanged', function (e) {
    const dataTable = window.jQuery('#load-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

function initDeletingItem () {
  const button = window.document.querySelector('#load-delete')
  button.addEventListener('click', function (e) {
    e.preventDefault()
    let id = prompt('Enter element`s id to delete: ')
    if (id.match(/^[a-z]+$/i) || Number(id) > loadModel.Select().length) {
      alert('Type correct data!')
    }
    else {
      loadModel.Delete(Number(id))
    }
    e.target.reset()
  })
}

function initUpdatingItem () {
  const button = window.document.querySelector('#load-update')
  button.addEventListener('click', function (e) {
    e.preventDefault()
    let id = prompt('Enter element`s id to update: ')
    if (id.match(/^[a-z]+$/i) || Number(id) > loadModel.Select().length) {
      alert('Type correct data!')
    }
    else {
      let name = prompt('Enter new name: ')
      let weight = prompt('Enter new weight: ')
      loadModel.Update(Number(id), {name, weight})
    }
  })
}
window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  initLists()
  initListEvents()
  initDeletingItem()
  initUpdatingItem()
})

