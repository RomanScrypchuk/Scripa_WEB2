class Load extends BaseModel {
    constructor () {
        super('loads')
        this.fields = this.fields.concat(['name', 'weight'])
    }
}
