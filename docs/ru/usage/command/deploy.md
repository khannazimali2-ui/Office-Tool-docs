# Команды развёртывания

Эти команды можно использовать в командной строке приложения и в обычной командной строке. Команды не чувствительны к регистру. Если аргумент команды содержит пробелы, заключайте его в "" (двойные кавычки).

``` batch
deploy params
```

Пример простой команды развёртывания:

``` batch
deploy /add O365ProPlusRetail_en-us
```

| Команда | Описание |  |
| :-- | :-- | :-- |
| /add *values[]* | Добавить один или несколько продуктов. | *Values*: productID_languages, **productID — обязательный параметр**. См. [пример](deploy.md#примеры-команд-для-развёртывания-office). |
| /Product_ID.exclapps *value* | Задать исключённые приложения для конкретного продукта. | `Product_ID` задаётся по productID из параметра `/add`. См. [пример](deploy.md#примеры-команд-для-развёртывания-office). |
| /Product_ID.mak *value* | Задать MAK для конкретного продукта. | `Product_ID` задаётся по productID из параметра `/add`. См. [пример](deploy.md#примеры-команд-для-развёртывания-office). |
| /rm *values[]* | Удалить продукты. | *Values*: productID_languages, использование как у `/add`. |
| /rmall | Удалить все продукты. |  |
| /rmmsi | Удалить все MSI-продукты Office. |  |
| /channel *value* | Задать канал обновлений. | *Value*: ID канала. [Подробнее](/ru/usage/deploy/settings/basic.md#канал-обновлений) |
| /branch *value* | Задать канал обновлений по значению branch. Команда переопределяет `/channel`.  | *Value*: branch канала. [Подробнее](/ru/usage/toolbox/general.md#запрос-версии-office) |
| /edition *value* | Задать архитектуру. | *Value*: `32` или `64`, значение по умолчанию — `32`. |
| /migratearch | Сменить архитектуру. |  |
| /ver *value* | Задать версию Office. | *Value*: номер версии Office. |
| /srcpath *value* | Задать путь к источнику. | *Value*: локальный или SMB-путь. |
| /fallback | Переходить на Office CDN, если языковые пакеты не найдены локально. | *Value*: `true` или `false`. Значение по умолчанию — `false`. |
| /display *value* | Задать, отображать ли экран установки Office. | *Value*: `true`: видимый, `false`: скрытый. Значение по умолчанию — `true`. |
| /acpteula | Принять EULA от имени пользователя. |  |
| /enableupdates | Задать состояние обновлений Office. | *Value*: `true`: включить, `false`: отключить. |
| /updatepath | Задать путь скачивания обновлений Office. | *Value*: локальный или SMB-путь. |
| /module *value* | Задать модуль установки. | *Value*: `0`: Office Deployment Tool, `1`: Office Tool Plus. Значение по умолчанию — `0`. |
| /dlfirst | Скачать сначала, затем развернуть. |  |
| /shortcuts | Создать ярлыки на рабочем столе. |  |

::: warning Внимание

Если вы указываете путь к источнику с помощью команды `/srcpath`, необходимо также указать свойства `/ver` и `/channel`, иначе установка Office может завершиться ошибкой.

:::

## Примеры команд для развёртывания Office

При указании нескольких приложений или языков разделяйте их запятыми. Например, `Access,Lync` или `en-us,zh-cn`.

Если нужно добавить или удалить языки или средства проверки правописания, используйте `LanguagePack` или `ProofingTools` в качестве ID продукта.

Развёртывание Office 2021 Professional Plus - Volume Edition, English (US), исключая Access, Outlook, OneNote:

``` batch
deploy /add ProPlus2021Volume_en-us /ProPlus2021Volume.exclapps Access,Outlook,OneNote /channel PerpetualVL2021
```

Для использования локального источника нужно указать команды `/srcpath`, `/ver` и `/channel`. Для 64-разрядного Office используйте `/edition`:

``` batch
deploy /add O365ProPlusRetail_en-us /O365ProPlusRetail.exclapps Access,Outlook,OneNote /edition 64 /srcpath "D:\Test\Office Tool" /ver 16.0.xxxxx.xxxxx /channel Current
```

Чтобы задать MAK для volume-продукта:

``` batch
deploy /add ProPlus2021Volume_en-us /ProPlus2021Volume.exclapps Access,Outlook,OneNote /ProPlus2021Volume.MAK XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /channel PerpetualVL2021
```

Чтобы добавить несколько продуктов:

``` batch
deploy /add "ProPlus2021Volume_en-us|VisioPro2021Volume_en-us" /ProPlus2021Volume.exclapps Access,Outlook,OneNote,OneDrive,Groove /VisioPro2021Volume.exclapps OneDrive,Groove /channel PerpetualVL2021
```

Чтобы удалить продукт:

``` batch
deploy /rm ProPlus2021Volume
```

Чтобы удалить несколько продуктов:

``` batch
deploy /rm "ProPlus2021Volume|VisioPro2021Volume"
```

Чтобы удалить языковой пакет:

``` batch
deploy /rm LanguagePack_ja-jp
```
