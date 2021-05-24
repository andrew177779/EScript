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
                    index++;
                    switch(code[index]) {
                        case "(":
                            terminal("Found wr commands, compiling in console.log");
                            done.push("console.log(");
                            terminal("Added console.log to index.js code");
                            index++;
                            var print = [];
                            for(; index < code.length; index++){
                                done.push(code[index]);
                                print.push(code[index]);
                                if(code[index] === ";"){
                                    //done.push("\n");
                                    break;
                                }
                            }
                            terminal(`${print.join('')} output value`);
                            break;
                        }
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
        case "c":
            done.push("c");
            index++;
            switch(code[index]){
                case "o":
                    done.push("o");
                    index++;
                    switch(code[index]){
                        case "n":
                            done.push("n");
                            index++;
                            switch(code[index]){
                                case "s":
                                    done.push("s");
                                    index++;
                                    switch(code[index]){
                                        case "t":
                                            for(; index < code.length; index++){
                                                done.push(code[index]);
                                                if(code[index] === ";"){break;}
                                                else if(code[index] === "="){
                                                    index += 2;
                                                    switch(code[index]){
                                                        case "i":
                                                            index++;
                                                            switch(code[index]){
                                                                case "m":
                                                                    index++;
                                                                    switch(code[index]){
                                                                        case "p":
                                                                            index++;
                                                                            switch(code[index]){
                                                                                case "(":
                                                                                    done.push(" require");
                                                                                    for(; index < code.length; index++){done.push(code[index]);}
                                                                                    break;
                                                                            }
                                                                            break;
                                                                    }
                                                                    break;
                                                            }
                                                            break;
                                                    }
                                                }
                                            }
                                            break;
                                    }
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        default:
            done.push(code[index]);
            break;
    }
    
}
terminal("Done!");
fs.writeFile("index.js", done.join(''), function(err){
    if (err) {
        error_terminal(err);
    } else {
        terminal("All your code is written in index.js");
        terminal("Compilation compeleted successfully!");
    }
});}
setTimeout(start_compile, 200);