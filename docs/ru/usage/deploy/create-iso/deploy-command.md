# Использование команд deploy

При использовании команды deploy для развёртывания Office Tool Plus разворачивает Office согласно параметрам, указанным в командах. Вы можете устанавливать любые версии Office по своему желанию.

---

Перед созданием Office ISO нужно создать batch-файл, например `Setup.bat`, в корневой папке Office Tool Plus (папка Office Tool).

Вы можете написать собственные команды, руководствуясь [использованием команд deploy](/ru/usage/command/deploy.md).

Также можно сгенерировать команды развёртывания после редактирования конфигурации на странице развёртывания.

Если вы хотите использовать установочные файлы Office из Office ISO в качестве источника установки, добавьте в команду deploy параметр `/source %~dp0` и укажите параметры `/ver` и `/channel`.

Замените команду deploy на шаблон ниже.

``` batch
@echo off
title Office Tool Plus - Console

:: Change the working directory to current directory.
:: Make sure you have administrator permission.
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: Run commands.
"Office Tool Plus.Console" deploy /add ...
```

::: tip Подсказка

`%~dp0` обозначает путь к папке, в которой находится batch-скрипт. Например, при монтировании Office ISO как диск E `%~dp0` автоматически заменится на `E:\`.

:::

Batch-файл нужно сохранять с английским именем, **иначе он не будет распознан**.

Затем создайте Office ISO по шагам из раздела [Без конфигурации](no-config.md).

::: tip Подсказка

При использовании batch-скрипта можно добавлять [другие команды](/ru/usage/command/application) по необходимости. Можно объединять несколько задач для развёртывания и активации.

:::
