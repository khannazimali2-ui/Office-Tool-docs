# Команды приложения

Команды не чувствительны к регистру. Если аргумент команды содержит пробелы, заключайте его в "" (двойные кавычки).

## Команды в приложении

Эти команды можно использовать только в командной строке приложения. Открыть её можно кнопкой или сочетанием клавиш <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>.

![Командная строка](/images/en-us/command-box.webp)

| Команда | Описание |  |
| :-- | :-- | :-- |
| `/getkey` *value* | Получить ключ по умолчанию для продукта. | *value*: ID продукта. |
| `/loadconfig` *value* | Загрузить конфигурацию из интернета. | *value*: URL. |
| `/setimage` *value* | Установить фоновое изображение. | *value*: путь к файлу изображения. Поддерживаются BMP, PNG или JPG. Поддерживаются локальные и веб-расположения. |
| `/resetnotif` | Сбросить уведомления, чтобы снова показывать закрытые уведомления. | |
| `/getlogs` | Получить журналы приложения. | |
| `/help` | Перейти к документации. | |

## Команды

Эти команды можно использовать только в командной строке.

| Команда | Описание |  |
| :-- | :-- | :-- |
| `/isoinstall` | Прочитать конфигурацию ISO и запустить установщик. | Необходимо создать Office ISO, убедиться, что в ISO есть ConfigForISO.xml, и смонтировать ISO перед выполнением команды. |
| `/loadconfig` *value* | Прочитать XML-конфигурацию и запустить установщик. | *value*: путь к XML-файлу. |
| `/srcpath` *value* | Переопределить атрибут пути к источнику в XML-конфигурации. Эту команду нужно использовать вместе с `/loadconfig`. | *value*: путь к источнику. |
| `/edition` *value* | Переопределить атрибут редакции клиента в XML-конфигурации. Эту команду нужно использовать вместе с `/loadconfig`. | *value*: `32` или `64`. |
| `/enablehwacc` *value* | Включить аппаратное ускорение. | *value*: `true` или `false`, значение по умолчанию — `true` |

## Office Tool Plus Console Helper

Office Tool Plus.Console — это программа командной строки. При выполнении команд через Office Tool Plus оболочка не ждёт завершения Office Tool Plus. При выполнении команд через Office Tool Plus.Console оболочка ждёт выхода программы и поддерживает логирование.

Например, следующая команда включает вывод логов:

``` powershell
.\"Office Tool Plus.Console" /log
```

::: tip Подсказка

Команды `deploy` и `ospp` включают логирование по умолчанию, повторно указывать `/log` не нужно. Команды `deploy` и `ospp` не следует смешивать с другими командами, иначе они не будут работать.

:::

Если нужно использовать [команды развёртывания](deploy.md) или [команды активации](activate.md), можно писать так:

``` powershell
.\"Office Tool Plus.Console" deploy /add ...
```

### Batch-файл

Если нужно запускать Office Tool Plus.Console с помощью BAT-файла, убедитесь, что у вас есть права администратора для выполнения этого скрипта.

Шаблон:

``` batch
@echo off
title Office Tool Plus - Console

:: Change the working directory to current directory.
:: Make sure you have administrator permission.
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: Run commands.
"Office Tool Plus.Console" /isoinstall
"Office Tool Plus.Console" ospp /inslicid ProPlus2021Volume /sethst kms.example.com /setprt 1688 /act
```

Измените 10-ю и 11-ю строки по необходимости.
