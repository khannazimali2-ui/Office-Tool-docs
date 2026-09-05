# Команды активации

Эти команды можно использовать в командной строке приложения и в обычной командной строке. Команды не чувствительны к регистру.

``` batch
ospp params
```

Пример простой команды активации:

``` batch
ospp /inslicid ProPlus2021Volume /inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /act
```

| Команда | Описание | Использование |
| :--     | :--     | :--       |
| /unkeys           | Удалить все установленные ключи продуктов Office. | `/unkeys` |
| /unlics           | Удалить все установленные лицензии Office. | `/unlics` |
| /rmvlic *value*   | Удалить указанную лицензию vNext (только в командной строке). Выполните команду /dstatus, чтобы получить ID лицензии. | `/rmvlic <License ID>` |
| /rmvlics          | Удалить все лицензии vNext (только в командной строке). | `/rmvlics` |
| /inslicid *value* | Установить указанные лицензии Office. | `/inslicid ProPlus2021Volume` или `/inslicid ProPlus2021Volume,VisioPro2021Volume` |
| /inpkey *value*   | Установить указанный ключ продукта Office. | `/inpkey XXXXX-XXXXX-XXXXX-XXXXX-XXXXX` |
| /unpkey *value*   | Удалить указанный ключ продукта Office. | `/unpkey XXXXX` |
| /sethst *value*   | Задать хост KMS. | `/sethst kms.example.com` |
| /setprt *value*   | Задать порт KMS. Порт по умолчанию: 1688. | `/setprt 1688` |
| /act *value*      | Активировать установленные ключи продуктов Office. Значение необязательно; если не указано, пытается активировать все ключи. | `/act` или `/act <SKU ID>` |
| /actcid *value*   | Активировать продукт с Confirmation ID, предоставленным пользователем.  | `/actcid <CID>` |
| /dstatus          | Отобразить информацию об активации Office (только в командной строке).             | `/dstatus` |
| /dinstid          | Отобразить Installation ID для офлайн-активации (только в командной строке). | `/dinstid` |
