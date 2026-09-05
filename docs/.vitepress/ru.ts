import { defineConfig, type DefaultTheme } from 'vitepress'

export const ru = defineConfig({
    lang: 'ru-RU',
    description: "Office Tool Plus — мощный и удобный инструмент для развёртывания и управления Office.",
    themeConfig: {
        nav: nav(),

        socialLinks: [
            { icon: 'telegram', link: 'https://t.me/s/otp_channel/' },
            { icon: 'discord', link: 'https://discord.gg/TpXTgfgf2a' },
            { icon: 'github', link: 'https://github.com/YerongAI/Office-Tool' }
        ],

        sidebar: {
            '/ru/introduction/': { base: '/ru/introduction/', items: sidebarIntroduction() },
            '/ru/usage/': { base: '/ru/usage/', items: sidebarUsage() },
            '/ru/help/': { base: '/ru/help/', items: sidebarHelp() },
            '/ru/office/': { base: '/ru/office/', items: sidebarOffice() }
        },

        editLink: {
            pattern: 'https://github.com/YerongAI/Office-Tool-docs/edit/main/docs/:path',
            text: 'Редактировать эту страницу на GitHub'
        },

        footer: {
            copyright: `Copyright © 2016 - ${new Date().getFullYear()} <a href=\"https://www.officetool.plus/\" target=\"_blank\">Yerong</a> All Rights Reserved.`
        },

        docFooter: {
            prev: '← Предыдущая страница',
            next: 'Следующая страница →'
        },

        outline: {
            label: 'На этой странице'
        },

        lastUpdated: {
            text: 'Последнее обновление',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: 'Язык',
        returnToTopLabel: 'Наверх',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Тема',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Введение',
            link: '/ru/introduction/what-is-otp',
            activeMatch: '/ru/introduction/'
        },
        {
            text: 'Использование',
            link: '/ru/usage/deploy/first-deployment',
            activeMatch: '/ru/usage/'
        },
        {
            text: 'Справка',
            link: '/ru/help/application',
            activeMatch: '/ru/help/'
        }
    ]
}

function sidebarIntroduction(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Введение",
            collapsed: false,
            items: [
                { text: 'Что такое Office Tool Plus?', link: 'what-is-otp' },
                { text: 'Системные требования', link: 'requirement' },
                { text: 'Скачать и использовать', link: 'download' }
            ]
        },
        {
            text: "Страницы",
            collapsed: false,
            items: [
                { text: 'Главная', link: 'pages/home' },
                { text: 'Развёртывание', link: 'pages/deploy' },
                { text: 'Активация', link: 'pages/activate' },
                { text: 'Инструменты', link: 'pages/toolbox' },
                { text: 'Конвертация документов', link: 'pages/convert-doc' },
                { text: 'Проверка хеша', link: 'pages/check-hash' },
            ]
        }
    ]
}

function sidebarUsage(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Развёртывание',
            collapsed: false,
            items: [
                { text: 'Первая установка', link: 'deploy/first-deployment' },
                { text: 'Чистая установка', link: 'deploy/clean-deployment' },
                { text: 'Изменение установки', link: 'deploy/modify-deployment' },
                { text: 'Основные настройки', link: 'deploy/settings/basic' },
                { text: 'Расширенные настройки', link: 'deploy/settings/advanced' }
            ]
        },
        {
            text: 'Создание Office ISO',
            collapsed: false,
            items: [
                { text: 'Подготовка', link: 'deploy/create-iso/prepare' },
                { text: 'Без конфигурации', link: 'deploy/create-iso/no-config' },
                { text: 'С конфигурацией по умолчанию', link: 'deploy/create-iso/default-config' },
                { text: 'Использование команды ISO', link: 'deploy/create-iso/iso-command' },
                { text: 'Использование команд loadconfig', link: 'deploy/create-iso/config-command' },
                { text: 'Использование команд deploy', link: 'deploy/create-iso/deploy-command' },
            ]
        },
        {
            text: 'Активация',
            collapsed: false,
            items: [
                { text: 'Что такое лицензия?', link: 'activate/what-is-license' },
                { text: 'Управление активацией', link: 'activate/manage' },
                { text: 'Онлайн-активация', link: 'activate/online-activation' },
                { text: 'Активация по телефону', link: 'activate/phone-activation' },
                { text: 'KMS-активация', link: 'activate/kms-activation' }
            ]
        },
        {
            text: 'Инструменты',
            collapsed: false,
            items: [
                { text: 'Общие инструменты', link: 'toolbox/general' },
                { text: 'Инструменты Office', link: 'toolbox/office' },
                { text: 'Инструменты Windows', link: 'toolbox/windows' }
            ]
        },
        {
            text: 'Команды',
            collapsed: false,
            items: [
                { text: 'Горячие клавиши', link: 'command/keyboard' },
                { text: 'Команды приложения', link: 'command/application' },
                { text: 'Команды развёртывания', link: 'command/deploy' },
                { text: 'Команды активации', link: 'command/activate' },
                { text: 'Команды инструментов', link: 'command/toolbox' }
            ]
        },
        {
            text: 'Прочее',
            collapsed: false,
            items: [
                { text: 'Проверка хеша' },
                { text: 'Настройки', link: 'settings' },
                { text: 'Обновления' }
            ]
        }
    ]
}

function sidebarHelp(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Справка',
            collapsed: false,
            items: [
                { text: 'Приложение', link: 'application' },
                { text: 'Развёртывание', link: 'deploy' },
                { text: 'Активация', link: 'activation' },
                { text: 'Office', link: 'office' },
                { text: 'Исправление реестра WPA', link: 'fix-wpa-registry' }
            ]
        }
    ]
}

function sidebarOffice(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Данные Office',
            collapsed: false,
            items: [
                { text: 'Канал обновлений', link: 'channel' },
                { text: 'Язык', link: 'language' },
                { text: 'Продукт', link: 'product' },
                { text: 'Ключ продукта', link: 'product-key' }
            ]
        }
    ]
}
