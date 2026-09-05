# Использование команды ISO

При развёртывании с помощью команды ISO Office Tool Plus ищет файл `ConfigForISO.xml` в Office ISO и загружает его для развёртывания. Office Tool Plus не отображает интерфейс и сразу запускает установщик Office.

---

Перед созданием Office ISO нужно создать batch-файл, например `Setup.bat`, в корневой папке Office Tool Plus (папка Office Tool).

Ниже приведены примеры Setup.bat.

Запуск Office Tool Plus без ожидания завершения:

``` batch
@echo off
title Office Tool Plus - Console

"Office Tool Plus.exe" /isoinstall
```

Запуск Office Tool Plus с ожиданием завершения:

``` batch
@echo off
title Office Tool Plus - Console

:: Change the working directory to current directory.
:: Make sure you have administrator permission.
set "Apply=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  cmd /u /c echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %Apply%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

:: Run commands.
"Office Tool Plus.Console" /isoinstall
```

Batch-файл нужно сохранять с английским именем, **иначе он не будет распознан**.

Затем создайте Office ISO по шагам из раздела [Конфигурация по умолчанию](default-config.md).

::: tip Подсказка

При использовании batch-скрипта можно добавлять [другие команды](/ru/usage/command/application) по необходимости. Можно объединять несколько задач для развёртывания и активации.

:::
