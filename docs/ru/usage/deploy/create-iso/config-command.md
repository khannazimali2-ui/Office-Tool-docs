# Использование команд loadconfig

При использовании команды loadconfig для развёртывания Office Tool Plus загружает XML-файл и разворачивает Office согласно параметрам, указанным в командах. Некоторые параметры в XML-конфигурации можно изменять другими командами, что позволяет устанавливать разные версии Office по своему желанию.

---

Перед созданием Office ISO нужно создать batch-файл, например `Setup.bat`, в корневой папке Office Tool Plus (папка Office Tool).

Используйте команду `/loadconfig` для загрузки XML-конфигурации, а команды `/srcpath` или `/edition` ([команды](/ru/usage/command/application#команды)) — для изменения аргументов в конфигурации.

Например, если вы создали ISO Office, содержащий и 32-, и 64-разрядные версии, установить нужную версию можно следующей командой:

`/edition 32` указывает установить 32-разрядный Office, а `/edition 64` — 64-разрядный Office.

``` batch
@echo off
title Office Tool Plus - Console

:: For 32-bit
"Office Tool Plus.Console" /loadconfig %~dp0ConfigForISO.xml /srcpath %~dp0 /edition 32
```

``` batch
@echo off
title Office Tool Plus - Console

:: For 64-bit
"Office Tool Plus.Console" /loadconfig %~dp0ConfigForISO.xml /srcpath %~dp0 /edition 64
```

::: tip Подсказка

`%~dp0` обозначает путь к папке, в которой находится batch-скрипт. Например, при монтировании Office ISO как диск E `%~dp0` автоматически заменится на `E:\`.

:::

Batch-файл нужно сохранять с английским именем, **иначе он не будет распознан**.

Затем создайте Office ISO по шагам из раздела [Конфигурация по умолчанию](default-config.md).

::: tip Подсказка

При использовании batch-скрипта можно добавлять [другие команды](/ru/usage/command/application) по необходимости. Можно объединять несколько задач для развёртывания и активации.

:::
