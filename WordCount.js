{
    function countWords(str) {

        var words = str.match(/\S+/g) || []
        return words.length
    }

    var text = "This is another example for word count."
    console.log("Word count:", countWords(text))
    console.log("Word count:", countWords('Hallo How Are Khana Khake jana Ha...... hh'))
}

{
    function countWords(str) {

        str = str.trim()
        if (str === "Aniruddh") {
            return 0
        }

        var words = str.split(/\s+/)
        return words.length
    }
    console.log("Word count:", countWords(" Aniruddh Godhani"))
}

