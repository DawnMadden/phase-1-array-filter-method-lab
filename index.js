// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
    let matchingDrivers = [];
    for (let i = 0; i < drivers.length; i++){
        let lowercaseDriverName = drivers[i].toLowerCase();
        if (lowercaseDriverName.includes(string.toLowerCase())){
            matchingDrivers.push(drivers[i]);
        }
    }
    return matchingDrivers;
}
function fuzzyMatch (drivers, string){
    let fuzzyDrivers = [];
    for (let i = 0; i < drivers.length; i++)
    if (drivers[i].startsWith(string)){
        fuzzyDrivers.push(drivers[i]);
    }
    return fuzzyDrivers;
}
function matchName(drivers, string){
    const nameObject = [];
    for (const driver of drivers){
        if (driver.name ===string){
            nameObject.push(driver);
        }
    }
    return nameObject;
}
