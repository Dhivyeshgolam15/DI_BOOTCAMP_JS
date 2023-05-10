const sentence = "I watched ${mywatchedserieslength} series: ${mywatchedseriessentence}"
console.log(sentence)

//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

myWatchedSeries[2]= "friends"

//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("13 reasons why")

//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("better call saul")
//Delete the series “black mirror”.
delete myWatchedSeries[1]

//Console.log the third letter of the series “money heist”.
const moneyheist= myWatchedSeries[2]

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(moneyheist[2])