// description:

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// solution:

function dnaStrand(dna){
    return dna.split('').map(el => {
      switch (el) {
          case 'A': return 'T'
          case 'T': return 'A'
          case 'G': return 'C'
          case 'C': return 'G'
      }
    }).join('')
  }