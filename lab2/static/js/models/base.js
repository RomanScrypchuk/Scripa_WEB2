class BaseModel {// eslint-disable-line no-unused-vars
  constructor (collectionName) {
    this.collectionName = collectionName
    this.fields = ['id']
  }
  /**
   * @returns {Number}
   */
  getNextId (collection) {
    return collection.length === 0? 1 : collection[collection.length - 1]['id'] + 1
  }
  /**
   * @returns {Object}
   */
  GetEmpty () {
    const entry = {}

    this.fields.forEach(element => {
      entry[element] = null
    })

    return entry
  }
  /**
   * @returns {Array}
   */
  Select () {
    const stored = localStorage.getItem(this.collectionName)
    const collection = stored ? JSON.parse(stored) : []

    return collection
  }
  Commit (collection) {
    localStorage.setItem(this.collectionName, JSON.stringify(collection))
  }
  /**
   * @param {Number} id
   * @returns {BaseModel|undefined}
   */
  FindById (id) {
    return this.Select().find(item => item.id === id)
  }
  /**
   * @param {Number} id
   * @returns {Number}
   */
  FindIndexById (id) {
    return this.Select().findIndex(item => item.id === id)
  }
  Create (row) {
    const collection = this.Select()
    const entry = this.GetEmpty()

    entry.id = this.getNextId(collection)
    for (const key in row) {
      if (entry.hasOwnProperty(key) &&
          entry.key !== 'id') {
        entry[key] = row[key]
      }
    }

    collection.push(entry)

    this.Commit(collection)

    const event = new CustomEvent(`${this.collectionName}ListDataChanged`, { detail: collection })
    document.dispatchEvent(event)
  }
  Delete(id) {
    const collection = this.Select()
    const itemToDeleteIndex = this.FindIndexById(id)

    collection.splice(itemToDeleteIndex, 1)

    this.Commit(collection)

    const event = new CustomEvent(`${this.collectionName}ListDataChanged`, { detail: collection })
    document.dispatchEvent(event)
  }
  Update(id, row) {
    const collection = this.Select()
    const entry = collection[id - 1]
    for (const key in row) {
      if (entry.hasOwnProperty(key) &&
          entry.key !== 'id') {
        entry[key] = row[key]
      }
    }
    collection[id - 1] = entry
    this.Commit(collection)

    const event = new CustomEvent(`${this.collectionName}ListDataChanged`, { detail: collection })
    document.dispatchEvent(event)
  }
}
