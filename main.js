function terminal(string){
    console.log(`> ${string}`);
}
function error_terminal(string){
    console.error(`ERROR:> ${string}`);
}

terminal("Conecting libraries");

const files = 'scripts/';
const fs = require('fs');
var filePath = [];

terminal("Libraries are connected!");
terminal("Config connection");
terminal("Reading files");
fs.readdirSync(files).forEach(file => {
      filePath.push(file);
});
terminal("List files:");
terminal(filePath.join(", "));
const {
    name,
    version,
    author,
} = require('./package.json', function(err){
    if(err){
        error_terminal(err);
    } else {
        terminal("package.json file read");
    }
});
terminal("Config is connected");
for(var i = 0; i < filePath.length; i++){
terminal("Compilation started");
terminal(`Reading the code file(${filePath[i]})`);
var codes = "";
codes = fs.readFileSync(`${files}/${filePath[i]}`, "utf8");
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
        case "v": // var
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
        case "c": // const
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
                                                        case "i": // imp
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
                                                                                    for(; index < code.length; index++){
                                                                                        //done.push(code[index]);
                                                                                        if(code[index] === "."){
                                                                                            index++;
                                                                                            if(code[index] === "e"){
                                                                                                index++;
                                                                                                if(code[index] === "s"){
                                                                                                    done.push(".js");
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                        else{
                                                                                            done.push(code[index]);
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
        case "t": {
            done.push("t");
            index++;
            switch (code[index]){
                case "e":
                    done.push("e");
                    index++;
                    switch(code[index]){
                        case "r":
                            done.push("r")
                            index++;
                            
                    }
            }
        }
        default:
            done.push(code[index]);
            break;
    }
    
}
var b = i;
fs.writeFile(`builds/start-${filePath[i]}.bat`, `node ${filePath[i]}.js`, function(err){
    if (err) {
        error_terminal(err);
    } else {
        terminal(`Create start bat file`);
    }
});
fs.writeFile(`builds/start-${filePath[i]}.sh`, `node ${filePath[i]}.js`, function(err){
    if (err) {
        error_terminal(err);
    } else {
        terminal(`Create start sh file`);
    }
});
fs.writeFile(`builds/${filePath[i]}.js`, done.join(''), function(err){
    if (err) {
        error_terminal(err);
    } else {
        terminal(`All code is written`);
        terminal("Done!");
        terminal(`Version: ${version}`);
        terminal(`Author: ${author}`);
    }
});
}