

// background colors
var now = new Date();
var hours = now.getHours();
if (5 <= hours && hours < 8) {//Morning
    document.write('<body style="background: #F3904F; background: -webkit-linear-gradient(to right, #3B4371, #F3904F); background: linear-gradient(to right, #3B4371, #F3904F);">');
    var type = "Morning";
}
if (8 <= hours && hours < 17) {//Day
     document.write('<body style="background: #00B4DB; background: -webkit-linear-gradient(to right, #0083B0, #00B4DB); background: linear-gradient(to right, #0083B0, #00B4DB);">');
    var type = "Daytime";
}
if (17 <= hours && hours < 19) {//Evening
    document.write('<body style="background: #355C7D; background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);\n color: white">');
    var type = "Evening";
}
if (19 <= hours && hours < 5) {//Night
    document.write('<body style="background: #0f2027; background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364);  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); color : white">');
    var type = "Nighttime";
}
   //CSS gradient backgrounds from https://uigradients.com
