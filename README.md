                Документация о языке программирование EScript 

                   версия документации и компилятора 0.0.3
# Установка
Ссылка на скачивание вот [тут](https://github.com/MegaSoft-real/EScript/releases).
Когда вы скачали(обязательно последнию версию), распакуйте архив. Если у вас не установлин Node.js, то по этой ссылке можно его скачать [тут](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi). После установки перезаупстите ваш компьютер.
# Использование
Им очень легко пользоватся. У вас в папке есть файлы compile.bat для Windows, и compile.sh для Linux.
Чтобы использовать compile.sh войдите в папку с распакованым архивом с помощью терминала и напишите следующие команды:<br>
chmod +x compile.sh<br>
./compile.sh<br>
Чтоб изменять файл кода EScript найдите в папке с файлами, файл index.es(если его нет то создайте), там прописывается весь ваш код!
# Настройка
весь файл конфигурации, этот файл называется как config.json

    {
        "name_project": "Название вашего проекта",
        "version_project": "Версия вашего проекта"
    }
# Основы
# Вывод или ввод
### Чтоб выводить текст вам потребуется
    wr("ваш текст бла-бла-бла");
