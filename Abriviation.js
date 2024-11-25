function Abriviate(){
    let OriginalString = document.getElementById("Input").value
    let OriginalArray = OriginalString.split(" ")
    let String = ""
    let string1 = ""
    let result = []
    for(let i = 0; i < OriginalArray.length; i++){
        String = OriginalArray[i];
        string1 = String[0]
        string1 = string1.toUpperCase()
        result.push(string1)
    }
    final = result.join("")
    document.getElementById("Output").innerHTML = final
}
