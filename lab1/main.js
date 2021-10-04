const task1 = require("./task1");
const task2 = require("./task2");
const task3 = require("./task3");
const task4 = require("./task4");
const task5 = require("./task5");
const task6 = require("./task6");
const task7 = require("./task7");
const methods = require("./task7methods");

console.log(task1.Generate16bit(5));
console.log(task2.PutStringInto("Hello", "World", 3));
{
  let array = [5, 7, 3, 1, -4, 9, -3, 0];
  task3.InsertionSort(array);
  console.log(array);
}
{
  let collection = [1, "dog", 6, "dog", 1, "dog"];
  console.log(task4.FindMostRepetative(collection));
}
console.log(task5.DaysInMonth(2021, 9));

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var stationsCollection = [];
methods.AddStation(stationsCollection, new task7.SpaceStation(0,"SS1"));
methods.AddStation(stationsCollection, new task7.SpaceStation(1,"SS2"));
methods.AddStation(stationsCollection, new task7.SpaceStation(2,"SS3"));
methods.AddStation(stationsCollection, new task7.SpaceStation(101,"ToRemove"));

methods.ChangePropertiesOfStation(stationsCollection, 1, new task7.SpaceStation(5, "CSS2"));

methods.DeleteStation(stationsCollection, 3);

console.log(stationsCollection);

methods.FindStation(stationsCollection, 0);
methods.FindStation(stationsCollection, 999);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var planetCollection = [];
methods.AddStation(planetCollection, new task7.Planet(0,"P1"));
methods.AddStation(planetCollection, new task7.Planet(1,"P2"));
methods.AddStation(planetCollection, new task7.Planet(2,"P3", stationsCollection[0]));
methods.AddStation(planetCollection, new task7.Planet(101,"ToRemove"));

methods.ChangePropertiesOfStation(planetCollection, 1, new task7.Planet(5, "CP2"));

methods.DeleteStation(planetCollection, 3);

console.log(planetCollection);

methods.FindStation(planetCollection, 0);
methods.FindStation(planetCollection, 999);

methods.PrintStations(planetCollection[2]);
methods.PrintStations(planetCollection[1]);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var loadCollection = [];
methods.AddLoad(loadCollection, new task7.Load(0,"L1", 1000));
methods.AddLoad(loadCollection, new task7.Load(1,"L2", 500));
methods.AddLoad(loadCollection, new task7.DeliveredLoad(2,"DL3", 999, '29-11-01'));
methods.AddLoad(loadCollection, new task7.Load(101,"ToRemove"));

methods.ChangePropertiesOfLoad(loadCollection, 1, new task7.Load(5, "CL2", 10101));

methods.DeleteLoad(loadCollection, 3);

console.log(loadCollection);
