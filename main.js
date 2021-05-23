function terminal(string){
    console.log(`> ${string}`);
}
function error_terminal(string){
    console.error(`ERROR:> ${string}`);
}

terminal("Conecting libraries");

const fs = require("fs");

terminal("Libraries are connected!");
terminal("Config connection");
terminal("Reading the package.json file");
const {
    name,
    description,
    version,
} = require('./package.json', function(err){
    if(err){
        error_terminal(err);
    } else {
        terminal("package.json file read");
    }
});
terminal("Config is connected");
terminal("Compilation in progress");
fs.writeFile("index.js", "Compiling...", function(err){
    if (err) {
        error_terminal(err);
    } else {
        terminal("File index.js created");
    }
});
function start_compile(){
terminal("Compilation started");
terminal("Reading the code file(index.es)");
var codes = "";
codes = fs.readFileSync("index.es", "utf8");
//codes.replace("\n", " ");
var code = codes.split('');
//var code_char = codes.split('');
var done = ["/*Created on EScript*/\n"];
for(var index = 0; index < code.length; index++){
    switch(code[index]){
        case "w":
            index++;
            switch(code[index]){
                case "r":
                    terminal("Found wr commands, compiling in console.log");
                    done.push("console.log");
                    terminal("Added console.log to index.js code");
                    index++;
                    var print = [];
                    for(; index < code.length; index++){
                        done.push(code[index]);
                        print.push(code[index]);
                        if(code[index] === ";"){
                            done.push("\n");
                            break;
                        }
                    }
                    terminal(`${print.join('')} output value`);
                    break;
            }
            break;
        case "v":
            index++;
            if(code[index] === "a"){
                index++;
                if(code[index] === "r"){
                    index -= 2;
                    for(; index < code.length; index++){
                        done.push(code[index]);
                        if(code[index] === ";"){break;}
                    }
                }
            }
            break;
        default:
            done.push(code[index]);
            break;
    }
    
}
terminal("All your code is written in index.js");
fs.writeFile("index.js", done.join(''), function(err){
    if (err) {
        error_terminal(err);
    } else {
        terminal("Compilation compeleted successfully!");
    }
});}
setTimeout(start_compile, 200);