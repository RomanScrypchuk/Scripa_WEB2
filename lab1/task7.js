class SpaceStation {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
class Planet {
    constructor(id,name,stations){
        this.id = id;
        this.name = name;
        this.stations = stations;
    }
}
class Load {
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
}
class DeliveredLoad extends Load{
    constructor(id, name, price, date) {
        super(id, name, price);
        this.date = date;
    }
}

module.exports = {
    SpaceStation: SpaceStation,
    Planet: Planet,
    Load: Load,
    DeliveredLoad: DeliveredLoad
}