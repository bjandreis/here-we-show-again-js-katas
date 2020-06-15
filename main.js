// ------------------------------------------------------------------------------------
// Students who collaborated for this assessment: Javier Alcaraz, Brandon Andreis and Mike Counts.
// ------------------------------------------------------------------------------------

const mainElement = document.querySelector('main')
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

// ---------- Kata 1 ----------
const kata1Heading = document.createElement('h1')
kata1Heading.append('Kata 1: Display the numbers from 1 to 20.')
mainElement.append(kata1Heading)

// Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)
const kata1List = document.createElement('ul')
for (let counter = 1; counter <= 20; counter += 1) {
    kata1List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata1List)
}

// ---------- Kata 2 ----------
const kata2Heading = document.createElement('h1')
kata2Heading.append('Kata 2: Display the even numbers from 1 to 20.')
mainElement.append(kata2Heading)

// Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
const kata2List = document.createElement('ul')
for (let counter = 1; counter <= 20; counter += 1) {
    if (counter % 2 === 0) {
        kata2List.innerHTML += ('<li>' + counter + '</li>')
        mainElement.append(kata2List)
    } else {
      // do not show odd numbers.
    }
}

// ---------- Kata 3 ----------
const kata3Heading = document.createElement('h1')
kata3Heading.append('Kata 3: Display the odd numbers from 1 to 20.')
mainElement.append(kata3Heading)

// Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
const kata3List = document.createElement('ul')
for (let counter = 1; counter <= 20; counter += 1) {
    if (counter % 2 === 0) {
      // do not show even numbers.
    } else {
        kata3List.innerHTML += ('<li>' + counter + '</li>')
        mainElement.append(kata3List)
    }
}

// ---------- Kata 4 ----------
const kata4Heading = document.createElement('h1')
kata4Heading.append('Kata 4: Display the multiples of 5 up to 100.')
mainElement.append(kata4Heading)

// Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
const kata4List = document.createElement('ul')
for (let counter = 1; counter <= 100; counter += 1) {
    if (counter % 5 === 0) {
        kata4List.innerHTML += ('<li>' + counter + '</li>')
        mainElement.append(kata4List)
    } else {
      // do not show numbers that are not multiples of 5.
    }
}

// ---------- Kata 5 ----------
const kata5Heading = document.createElement('h1')
kata5Heading.append('Kata 5: Display the square numbers from 1 up to 100.')
mainElement.append(kata5Heading)

// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
const kata5List = document.createElement('ul')
for (let counter = 1; counter <= 100; counter += 1) {
    if (Math.sqrt(counter) % 1 === 0) {
        kata5List.innerHTML += ('<li>' + counter + '</li>')
        mainElement.append(kata5List)
    } else {
      // do not show numbers that are not perfect squares.
    }
}

// ---------- Kata 6 ----------
const kata6Heading = document.createElement('h1')
kata6Heading.append('Kata 6: Display the numbers counting backwards from 20 to 1.')
mainElement.append(kata6Heading)

// Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
const kata6List = document.createElement('ul')
for (let counter = 20; counter > 0; counter -= 1) {
    kata6List.innerHTML += ('<li>' + counter + '</li>')
    mainElement.append(kata6List)
}

// ---------- Kata 7 ----------
const kata7Heading = document.createElement('h1')
kata7Heading.append('Kata 7: Display the even numbers counting backwards from 20 to 1.')
mainElement.append(kata7Heading)

// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
const kata7List = document.createElement('ul')
for (let counter = 20; counter > 0; counter -= 1) {
    if (counter % 2 === 0) {
        kata7List.innerHTML += ('<li>' + counter + '</li>')
        mainElement.append(kata7List)
    } else {
      // do not show odd numbers.
    }
}

// ---------- Kata 8 ----------
const kata8Heading = document.createElement('h1')
kata8Heading.append('Kata 8: Display the odd numbers from 20 to 1, counting backwards.')
mainElement.append(kata8Heading)

// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
const kata8List = document.createElement('ul')
for (let counter = 19; counter > 0; counter -= 1) {
    if (counter % 2 === 0) {
      // do not show even numbers.
    } else {
        kata8List.innerHTML += ('<li>' + counter + '</li>')
        mainElement.append(kata8List)
    }
}

// ---------- Kata 9 ----------
const kata9Heading = document.createElement('h1')
kata9Heading.append('Kata 9: Display the multiples of 5, counting down from 100 to 1.')
mainElement.append(kata9Heading)

// Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
const kata9List = document.createElement('ul')
for (let counter = 100; counter > 0; counter -= 1) {
    if (counter % 5 === 0) {
        kata9List.innerHTML += ('<li>' + counter + '</li>')
        mainElement.append(kata9List)
    } else {
      // do not show numbers that are not multiples of 5.
    }
}

// ---------- Kata 10 ----------
const kata10Heading = document.createElement('h1')
kata10Heading.append('Kata 10: Display the square numbers, counting down from 100.')
mainElement.append(kata10Heading)

// Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
const kata10List = document.createElement('ul')
for (let counter = 100; counter > 0; counter -= 1) {
    if (Math.sqrt(counter) % 1 === 0) {
        kata10List.innerHTML += ('<li>' + counter + '</li>')
        mainElement.append(kata10List)
    } else {
      // do not show numbers that are not perfect squares.
    }
}

// ---------- Kata 11 ----------
const kata11Heading = document.createElement('h1')
kata11Heading.append('Kata 11: Display the 20 elements of sampleArray.')
mainElement.append(kata11Heading)

// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
const kata11List = document.createElement('ul')
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    kata11List.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
    mainElement.append(kata11List)
}

// ---------- Kata 12 ----------
const kata12Heading = document.createElement('h1')
kata12Heading.append('Kata 12: Display all the even numbers contained in sampleArray.')
mainElement.append(kata12Heading)

// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
const kata12List = document.createElement('ul')
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (sampleArray[counter] % 2 === 0) {
        kata12List.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
        mainElement.append(kata12List)
    } else {
      // do not show odd numbers.
    }
}

// ---------- Kata 13 ----------
const kata13Heading = document.createElement('h1')
kata13Heading.append('Kata 13: Display all the odd numbers contained in sampleArray.')
mainElement.append(kata13Heading)

// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
const kata13List = document.createElement('ul')
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (sampleArray[counter] % 2 !== 0) {
        kata13List.innerHTML += ('<li>' + sampleArray[counter] + '</li>')
        mainElement.append(kata13List)
    } else {
      // do not show even numbers.
    }
}

// ---------- Kata 14 ----------
const kata14Heading = document.createElement('h1')
kata14Heading.append('Kata 14: Display the square of each element in sampleArray.')
mainElement.append(kata14Heading)

// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
const kata14List = document.createElement('ul')
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    kata14List.innerHTML += ('<li>' + sampleArray[counter] * sampleArray[counter] + '</li>')
    mainElement.append(kata14List)
}

// ---------- Kata 15 ----------
const kata15Heading = document.createElement('h1')
kata15Heading.append('Kata 15: Display the sum of all the numbers from 1 to 20.')
mainElement.append(kata15Heading)

// Display the sum of all the numbers from 1 to 20.
const kata15List = document.createElement('ul')
let kata15Result = 0
for (let counter = 0; counter <= 20; counter += 1) {
    kata15Result += counter
}
kata15List.innerHTML = kata15Result
mainElement.append(kata15List)

// ---------- Kata 16 ----------
const kata16Heading = document.createElement('h1')
kata16Heading.append('Kata 16: Display the sum of all the elements in sampleArray.')
mainElement.append(kata16Heading)

// Display the sum of all the elements in sampleArray.
const kata16List = document.createElement('ul')
let kata16Result = 0
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    kata16Result += sampleArray[counter]
}
kata16List.innerHTML = kata16Result
mainElement.append(kata16List)

// ---------- Kata 17 ----------
const kata17Heading = document.createElement('h1')
kata17Heading.append('Kata 17: Display the smallest element in sampleArray.')
mainElement.append(kata17Heading)

// Display the smallest element in sampleArray.
const kata17List = document.createElement('ul')
let kata17Result = sampleArray[0]
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (kata17Result > sampleArray[counter]) {
        kata17Result = sampleArray[counter]
    }
}
kata17List.innerHTML = kata17Result
mainElement.append(kata17List)

// ---------- Kata 18 ----------
const kata18Heading = document.createElement('h1')
kata18Heading.append('Kata 18: Display the largest element in sampleArray.')
mainElement.append(kata18Heading)

// Display the largest element in sampleArray.
const kata18List = document.createElement('ul')
let kata18Result = sampleArray[0]
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    if (kata18Result < sampleArray[counter]) {
        kata18Result = sampleArray[counter]
    }
}
kata18List.innerHTML = kata18Result
mainElement.append(kata18List)