                Документация о языке программирование EScript 

                   версия документации и компилятора 0.0.3
# Установка
Ссылка на скачивание вот [тут](https://github.com/MegaSoft-real/EScript/releases).
Когда вы скачали(обязательно последнию версию), распакуйте архив. Если у вас не установлин Node.js, то по этой ссылке можно его скачать [тут](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi). После установки перезаупстите ваш компьютер.
# Использование
Им очень легко пользоватся. у вас в папке есть файл compile.bat (если у вас Linux то переименуйте его в compile.sh) запустите его для компиляции.
Чтоб изменять файл кода EScript найдите в папке с файлами, файл index.es(если его нет то создайте), там прописовается весь ваш код!
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