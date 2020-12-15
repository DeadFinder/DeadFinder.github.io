var text = ["$", "r $", "er $", "der $", "nder $", "inder $", "Finder $", "dFinder $", "adFinder $","eadFinder $","DeadFinder $","DeadFinde $", "DeadFind $", "DeadFin $", "DeadFi $", "DeadF $", "Dead  $", "Dea $", "De $", "D $"];
var counter = 0
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}