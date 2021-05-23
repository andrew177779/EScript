# EScript documentation

# Download
You can download it by:
    git clone https://github.com/MegaSoft-real/EScript
or in releases page.<br>
Node.js is required for this. If you don't have it already, download it [there](nodejs.org)
If you have Debian/Ubuntu, open terminal and type:
    sudo apt install nodejs
After install restart your PC (if you have Linux you don't need to do this!).
# Compiling code on EScript
You will have two files for compiling your code. "compile.bat" for Windows, "compile.sh" for Linux.
To use compile.sh, go to the repository folder with terminal and type next commands:<br>
    chmod +x compile.sh<br>
    ./compile.sh<br>
To code in EScript open index.es and do coding!
# Configuration
In terminal, type:
    npm init
and type everything about your project!<br>
Did a typo? Don't worry, you can fix it in "package.json" file.
# Hello, world!
Open index.es and type this:<br>
    wr("Hello, world!")<br>
Then compile it! When compiled, type this:<br>
    node index.js<br>
Congratulations! You've created your first program on EScript!
# Bugs
Report bugs in Issues page.<br>
If you know how to fix bug, do next steps:<br>
1. Fork repository
2. Fix bug
3. Commit to your repo 
4. Create pull request
5. Wait till we merge or just close your request
We will close it if the request has something dangerous.