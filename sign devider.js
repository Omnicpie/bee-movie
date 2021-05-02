//SIGN INFO
// row = 15char
// 4 rows per sign


//SCRIPT INFO
// 9478 words
// 50139 chars

// 3342.6 sign rows 
// 835.65 signs
// 30 x 30

var theScript = document.getElementById("thescript").innerHTML
console.log(theScript)
var startIndex = 0
var endIndex = 14
var output = []
var currentIndex = 0
var rows = []
for (var i = 0; i < 3582; i++){
        var sub = theScript.substring(startIndex, endIndex)
        //console.log(startIndex, " : ", endIndex, " : ", " : ", currentIndex, " , ", sub)
        output[currentIndex] = sub
        startIndex = endIndex 
        endIndex = startIndex + 14
        currentIndex++
}
for (var x = 0; x < 120; x++){
    pointer = x * 30
    row = output.slice(pointer, pointer+30)
    rows[x] = row
}

console.log("ROWS \n",rows)
var final = []
final[0] = [rows[0], rows[1], rows[2], rows[3]]
final[1] = [rows[4], rows[5], rows[6], rows[7]]
final[2] = [rows[8], rows[9], rows[10], rows[11]]
final[3] = [rows[12], rows[13], rows[14], rows[15]]
final[4] = [rows[16], rows[17], rows[18], rows[19]]
final[5] = [rows[20], rows[21], rows[22], rows[23]]
final[6] = [rows[24], rows[25], rows[26], rows[27]]
final[7] = [rows[28], rows[29], rows[30], rows[31]]
final[8] = [rows[32], rows[33], rows[34], rows[35]]
final[9] = [rows[36], rows[37], rows[38], rows[39]]
final[10] = [rows[40], rows[41], rows[42], rows[43]]
final[11] = [rows[44], rows[45], rows[46], rows[47]]
final[12] = [rows[48], rows[49], rows[50], rows[51]]
final[13] = [rows[52], rows[53], rows[54], rows[55]]
final[14] = [rows[56], rows[57], rows[58], rows[59]]
final[15] = [rows[60], rows[61], rows[62], rows[63]]
final[16] = [rows[64], rows[65], rows[66], rows[67]]
final[17] = [rows[68], rows[69], rows[70], rows[71]]
final[18] = [rows[72], rows[73], rows[74], rows[75]]
final[19] = [rows[76], rows[77], rows[78], rows[79]]
final[20] = [rows[80], rows[81], rows[82], rows[83]]
final[21] = [rows[84], rows[85], rows[86], rows[87]]
final[22] = [rows[88], rows[89], rows[90], rows[91]]
final[23] = [rows[92], rows[93], rows[94], rows[95]]
final[24] = [rows[96], rows[97], rows[98], rows[99]]
final[25] = [rows[100], rows[101], rows[102], rows[103]]
final[26] = [rows[104], rows[105], rows[106], rows[107]]
final[27] = [rows[108], rows[109], rows[110], rows[111]]
final[28] = [rows[112], rows[113], rows[114], rows[115]]
final[29] = [rows[116], rows[117], rows[118], rows[119]]
console.log("FINAL \n",final)
document.getElementById("thescript").innerHTML = ""
out = "<table><tr><th></th><th>COL 1</th><th>COL 2</th><th>COL 3</th><th>COL 4</th><th>COL 5</th><th>COL 6</th><th>COL 7</th><th>COL 8</th><th>COL 9</th><th>COL 10</th><th>COL 11</th><th>COL 12</th><th>COL 13</th><th>COL 14</th><th>COL 15</th><th>COL 16</th><th>COL 17</th><th>COL 18</th><th>COL 19</th><th>COL 20</th><th>COL 21</th><th>COL 22</th><th>COL 23</th><th>COL 24</th><th>COL 25</th><th>COL 26</th><th>COL 27</th><th>COL 28</th><th>COL 29</th><th>COL 30</th>"
for (var x = 0; x < final.length; x++){
    out += "<tr><th>ROW "+(x+1)+"</th>"
    for(var y = 0; y < final[x][0].length; y++){
        out += "<td class=\"notstart\" onclick=\"sectional(this)\" id=\""+x+","+y+"\">"+final[x][0][y]+"<hr/>"+final[x][1][y]+"<hr/>"+final[x][2][y]+"<hr/>"+final[x][3][y]+"<hr/>"+"</td>"
    }
    out += "</tr>"
}
out += "</table>"
document.getElementsByTagName("body")[0].innerHTML = out

function sectional(obj){
    console.log(obj)
    if(obj.className == "working"){
        obj.className = "done"
    }
    else if(obj.className == "notstart"){
        obj.className = "working"
    }
    else if(obj.className == "done"){
        obj.className = "bigdone"
    }
    
    else if(obj.className == "bigdone"){
        obj.className = "hugedone"
    }
    else{
        if(confirm("are you sure?")){
            obj.className = "notstart"
        }
    }
    storeProgress()
}

function storeProgress(){
    var toStore = []
    for(var i = 0; i < 30; i++){
        row = []
        for(var j = 0; j < 30; j++){
            elem = i + "," + j
            currProg = document.getElementById(elem).className
            console.log(currProg)
            row[j] = currProg
        }
        console.log(row)
        toStore[i] = row
    }
    console.log(toStore)
    localStorage.setItem('progress', JSON.stringify(toStore));
}

function getProgress(){
    var progress = JSON.parse(localStorage.getItem('progress'))
    
    console.log(progress)
    for(var i = 0; i < 30; i++){
        for(var j = 0; j < 30; j++){
            elem = i + "," + j
            document.getElementById(elem).className = progress[i][j]
        }
    }
}
//console.log(output)
getProgress()