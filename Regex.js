// JavaScript Regex

// In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern. 

{
    // /^a...s$/
}

// The above code defines a RegEx pattern. The pattern is: any five letter string starting with a and ending with s.

// A pattern defined using RegEx can be used to match against a string.


// Create a RegEx



// There are two ways you can create a regular expression in JavaScript.

// Using a regular expression literal:
// The regular expression consists of a pattern enclosed between slashes /.

{
    // const regularExp = /abc/
    // Here, /abc/ is a regular expression.
}

// Using the RegExp() constructor function:
// You can also create a regular expression by calling the RegExp() constructor function.

{
    // const regularExp = new RegExp('abc')
}

{
    // const regex = new RegExp(/^a....s$/)
    // console.log(regex.test('aliais'))
}

// In the above example, the string alias matches with the RegEx pattern /^a...s$/. Here, the test() method is used to check if the string matches the pattern.

// There are several other methods available to use with JavaScript RegEx. Before we explore them, let's learn about regular expressions themselves.

// Specify Pattern Using RegEx

// To specify regular expressions, metacharacters are used. In the above example (/^a...s$/), ^ and $ are metacharacters.


// MetaCharacters

// Metacharacters are characters that are interpreted in a special way by a RegEx engine. Here's a list of metacharacters:

{
    // [] . ^ $ * + ? {} () \ |
}



/* [] - Square brackets */
/*

Here, [abc] will match if the string you are trying to match contains any of the a, b or c.

You can also specify a range of characters using - inside square brackets.

[a-e] is the same as [abcde].

[1-4] is the same as [1234].

[0-39] is the same as [01239].

You can complement (invert) the character set by using caret ^ symbol at the start of a square-bracket.

[^abc] means any character except a or b or c.

[^0-9] means any non-digit character.

/* Example */

{
    const regexp = /^Go....i\sA......h\s17*\s03+\s2..2$/
    document.write(regexp.test('Godhani Aniruddh 17 03 2002'))
}

{
    const Regex = /[162316]/
    console.log(Regex.test('23583'))
}

/* . - Period */

{
    const Regex1 = /../
    console.log(Regex1.test('ax'))
}

/* ^ - Caret */

{
    const Regex = /^v..+x(c)+h$/
    console.log(Regex.test('vbvxchh'))
}

/* $ - Dollar */

{
    const Regex = /s$/
    console.log(Regex.test('pass'))
}

/* * - Star */

{
    const Regex = /ma*n/
    console.log(Regex.test('mn'))
}

/* + - Plus */
{
    const Regex = /ma+n/
    console.log(Regex.test('woman'))
}


/* {} - Braces */

{
    const Regex = /[0-0]{2,4}/
    console.log(Regex.test('01234560'))
}

/* () - Group */

{
    const Regex1 = /(x|y|z)cb/
    console.log(Regex1.test('xcba'))

    const Regex2 = /(x|y|z)cb$/
    console.log(Regex2.test('xcba'))

    const Regex3 = /(x|y|z)cb+d$/
    console.log(Regex3.test('xcbd'))

}

/* ? - Question Mark */

{
    let neighbor = /neig?hbou?r/
    console.log(neighbor.test("neighbour"))
    console.log(neighbor.test("neihbor"))
}

/* | - Alternation */

{
    const Regex = /fg|er/
    console.log(Regex.test('fgootball'))
}

/* \ - Backslash */


/*
\ - Backslash

Backslash \ is used to escape various characters including all metacharacters. For example,

\$a match if a string contains $ followed by a. Here, $ is not interpreted by a RegEx engine in a special way.

If you are unsure if a character has special meaning or not, you can put \ in front of it. This makes sure the character is not treated in a special way.
*/

// JavaScript Regular Expression Methods

// you can either use RegExp() or regular expression literal to create a RegEx in JavaScript.

/*

exec()	Executes a search for a match in a string and returns an array of information. It returns null on a mismatch.

test()	Tests for a match in a string and returns true or false.

match()	Returns an array containing all the matches. It returns null on a mismatch.

matchAll()	Returns an iterator containing all of the matches.

search()	Tests for a match in a string and returns the index of 
the match. It returns -1 if the search fails.

replace()	Searches for a match in a string and replaces the matched substring with a replacement substring.

split()	Break a string into an array of substrings.

*/

{
    const regex1 = /^a.../
    const regex2 = ('abvbvbve')
    console.log(regex1.test(regex2))
}
{
    const Regex1 = /[0-9]{3,3}/
    const regex = Regex1.test('12345678910')
    console.log(regex)
}

// In JavaScript, you can use regular expressions with RegExp() methods: test() and exec().

// There are also some string methods that allow you to pass RegEx as its parameter. They are: match(), replace(), search(), and split().

// Regular Expressions

{
    const string = 'Find   me'
    const pattern = ('/me/')


    // search if the pattern is in string variable
    const result1 = string.search(pattern)
    console.log(result1)

    // replace the character with another character
    const string1 = 'Find me'
    const text = string1.replace(pattern, 'found you') // Find found you
    console.log(text)


    // splitting strings into array elements
    const regex1 = /[\s,]+/
    const result2 = 'Hello world!'.split(regex1);
    const textt = 'Hello world!'
    const text2 = textt.split('')
    console.log(text2)
    console.log(result2)

    // searching the phone number pattern
    const regex2 = /(\d{4})\D(\d{4})\D(\d{2})/g
    const result3 = regex2.exec('My phone number is: 5551 2345 67.')
    console.log(result3)
}

// Regular Expression Flags

// Flags are used with regular expressions that allow various options such as global search, case-insensitive search, etc. They can be used separately or together.

// Regular Expression Modifier  

{
    const string = `Hello
     Hello`

    // performing a replacement
    const result1 = string.replace(/hello/, 'world')
    console.log(result1) // Hello world hello

    // performing global replacement
    const result2 = string.replace(/hello/g, 'world')
    console.log(result2) // Hello world world

    // performing case-insensitive replacement
    const result3 = string.replace(/hello/i, 'world')
    console.log(result3) // world hello hello

    // // performing global case-insensitive replacement
    const result4 = string.replace(/hello/i, 'world')
    console.log(result4) // world world world
}

/* example@gmail.com */
const regex1 = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,4}/g
document.write(regex1.test('aniruddhgodhani@gmail.com '))


/* 704 610 76 05 */
const regex = /(\d{3})\D(\d{3})\D(\d{2})\D(\d{2})/
const result = ('My phone number is: 704 610 76 05.')
console.log(regex.test(result))

// /* 70 46 10 76 05*/
const Regex = /(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})/
const result1 = ('My phone number is: 70 46 10 76 05.')
console.log(Regex.test(result1))

// /* 7046 1076 05*/
const Regex1 = /(\d{4})|(\d{4})(\d{2})/
const result2 = ('My phone number is: 7046 1076 05.')
console.log(Regex1.test(result2))

// /* 70-46-10-76-05 */
const Regex2 = /(\d{2})-|\D(\d{2})-(\d{2})-(\d{2})-(\d{2})/
const result3 =   ('My phone number is: 70-46-10-76-05.')
console.log(Regex2.test(result3))

/* 704-610-76-05 */
const Regex3 = /(\d{3})-\D(\d{3})-(\d{2})-(\d{2})/
const result4 = ('My phone number is: 704-610-76-05.')
console.log(Regex3.test(result4))

/* 7046-1076-05*/
const regex4 = /(\d{4})-(\d{4})-(\d{2})/
const result5 = ('My phone number is: 7046-1076-05.')
console.log(regex.test(result5))



