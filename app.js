//             Loop

//1.    for Loop
//for(initilization, Condition, itration)


// for(var i = 0; i<=10; i++){
//     document.write(i, '</br>')
// }

// for(var i = 10; i>=0; i--){
//     document.write(i, '</br>')
// }

// var arr = [1,2,3,4,5,6,7,8,9,10,'Faiz', 'ali']
// for(i=0; i<arr.length; i++){
//     document.write(arr[i], '</br>')
// }


// for(var i = 1; i<=10; i++){
//     document.write(2, 'x', i, '=', 2*i, '</br>')
// }


// var userinput = +prompt('Enter Value')

// for(var i = 1; i<=10; i++){
//     document.write(userinput, 'x', i, '=', userinput*i, '</br>')
// }


var userinput = +prompt('Enter Value')
var userlenght = +prompt('Enter Lenght')
for(var i = 1; i<=userlenght; i++){
    document.write('<table border=1px>','<tr>','<td>',userinput,'</td>','<td>', 'x','</td>','<td>', i,'</td>','<td>', '=','</td>','<td>', userinput*i,'</td>','</table>','</b>')
}