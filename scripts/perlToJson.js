function createTranslationObject(englishFileContent, russianFileContent) {
    const translationObject = {};

    const englishLines = englishFileContent.split('\n');
    const russianLines = russianFileContent.split('\n');

    for (let i = 0; i < englishLines.length; i++) {
        const englishLine = englishLines[i].trim();
        const russianLine = russianLines[i].trim();

        if (englishLine && russianLine) {
            const englishKey = extractKey(englishLine);
            const russianKey = extractKey(russianLine);

            if (englishKey === russianKey && englishKey.startsWith('vpn.antidetect.')) {
                const translationKey = englishKey.substring('vpn.antidetect.'.length);
                const translationValueEn = extractValue(englishLine);
                const translationValueRu = extractValue(russianLine);

                translationObject[translationKey] = {
                    "en": translationValueEn,
                    "ru": translationValueRu
                };
            }
        }
    }

    return translationObject;
}

function extractKey(line) {
    const start = line.indexOf('"') + 1;
    const end = line.indexOf('"', start);
    return line.substring(start, end);
}

function extractValue(line) {
    const start = line.indexOf('=>') + 2;
    const end = line.lastIndexOf('"');
    return line.substring(start, end).trim();
}

const englishFileContent = `
    "vpn.antidetect.Banner1Search"                                        => "Search",
    "vpn.antidetect.Banner1Profiles"                                      => "Profiles",
    "vpn.antidetect.Banner1Groups"                                        => "Groups",
    "vpn.antidetect.Banner1Trash"                                         => "Trash",
    "vpn.antidetect.Banner1ProxyList"                                     => "Proxy list",
    "vpn.antidetect.Banner1Presets"                                       => "Presets",
    "vpn.antidetect.Banner1Users"                                         => "Users",
    "vpn.antidetect.Banner1Settings"                                      => "Settings",
    "vpn.antidetect.Banner1Payments"                                      => "Payments",
    "vpn.antidetect.Banner1Presets"                                       => "Presets",
    "vpn.antidetect.Banner1Categories"                                    => "Categories",
    "vpn.antidetect.Banner1AddCategory"                                   => "Add Category",
    "vpn.antidetect.Banner1CreateNewCategory"                             => "Create a new category to install bookmarks and extensions",
    "vpn.antidetect.Banner1Bookmark"                                      => "Bookmark",
    "vpn.antidetect.Banner1AddBookmark"                                   => "Add Bookmark",
    "vpn.antidetect.Banner1AddbookmarksText"                              => "Add bookmarks for quick access when creating profiles",
    "vpn.antidetect.Banner1Extensions"                                    => "Extensions",
    "vpn.antidetect.Banner1AddExtension"                                  => "Add an extension",
    "vpn.antidetect.Banner1AddSomeText"                                   => "Add some so you don"t install them manually",
    "vpn.antidetect.Banner2Fingerprint"                                   => "Hide your fingerprint",
    "vpn.antidetect.Banner2MaxPass"                                       => "Maximum passability",
    "vpn.antidetect.Banner3LogIn"                                         => "Log in",
    "vpn.antidetect.Banner3Text"                                          => "You must be logged in to access the features of the application",
    "vpn.antidetect.Banner3email"                                         => "Your E-mail",
    "vpn.antidetect.Banner3Password"                                      => "Password",
    "vpn.antidetect.Banner3StaySystem"                                    => "To stay in the system",
    "vpn.antidetect.Banner3LoginBtn"                                      => "Login",
    "vpn.antidetect.title"                                                => "WADE browser - access to the Internet without blocking or restrictions",
    "vpn.antidetect.title1"                                               => "WADE browser - access to the Internet without blocking or restrictions",
    "vpn.antidetect.description"                                          => "Control your digital life, work, and stay invisible on the Internet with the browser"s anti-detect technology",
    "vpn.antidetect.downloadFor"                                          => "Download for:",
    "vpn.antidetect.checkbox1"                                            => "Unlimited number of profiles",
    "vpn.antidetect.checkbox2"                                            => "Quick change of fingerprint",
    "vpn.antidetect.checkbox3"                                            => "Anonymity and blocking bypass",
    "vpn.antidetect.checkbox4"                                            => "Teamwork support",
    "vpn.antidetect.earnTitle"                                            => "Make money online safely and anonymously",
    "vpn.antidetect.earnText"                                             => "Forget about account blocking and earning restrictions by using the browser in your various activities. Unique digital fingerprints ensure that profiles are isolated from each other which allow you to use the web freely and securely.",
    "vpn.antidetect.earnSliderTitle1"                                     => "Traffic Arbitrage",
    "vpn.antidetect.earnSliderText1"                                      => "Manage an unlimited number of accounts on social networks and other platforms",
    "vpn.antidetect.earnSliderTitle2"                                     => "E-commerce",
    "vpn.antidetect.earnSliderText2"                                      => "Increase income and create accounts on popular platforms such as Amazon, eBay and many others",
    "vpn.antidetect.earnSliderTitle3"                                     => "Bounty & Airdrop",
    "vpn.antidetect.earnSliderText3"                                      => "Perform the necessary actions on the network and get cryptocurrencies for free, using different profiles",
    "vpn.antidetect.earnSliderTitle4"                                     => "Web scraping",
    "vpn.antidetect.earnSliderText4"                                      => "Automation of data collection and analysis, with no locks or restrictions",
    "vpn.antidetect.earnSliderTitle5"                                     => "Bonus Hunting",
    "vpn.antidetect.earnSliderText5"                                      => "A high level of anonymity when hunting for bonuses offered by casinos or betting sites",
    "vpn.antidetect.6advantagesTitle"                                     => "Benefits of the WADE Browser",
    "vpn.antidetect.advantagesTitle1"                                     => "Unique profiles",
    "vpn.antidetect.advantagesText1"                                      => "Pass any checks on platforms like pixelscan, amiunique, creepjs using a unique fingerprint for each profile",
    "vpn.antidetect.advantagesTitle2"                                     => "Teamwork",
    "vpn.antidetect.advantagesText2"                                      => "Control access to profiles, set permissions, ensure team synchronization and automate business processes",
    "vpn.antidetect.advantagesTitle3"                                     => "Synchronization",
    "vpn.antidetect.advantagesText3"                                      => "With cloud technology, all profile data is automatically synchronized, allowing you to access it from any of your devices",
    "vpn.antidetect.advantagesTitle4"                                     => "Groups",
    "vpn.antidetect.advantagesText4"                                      => "Allocate profiles to groups and give access to specific users for maximum security",
    "vpn.antidetect.advantagesTitle5"                                     => "Categories",
    "vpn.antidetect.advantagesText5"                                      => "Optimize your workflow - create multiple categories of profiles by adding bookmarks and extensions to them",
    "vpn.antidetect.advantagesTitle6"                                     => "Automation and API",
    "vpn.antidetect.advantagesText6"                                      => "Automate any repetitive tasks by implementing API for developers, and automation for Selenium",
    "vpn.antidetect.protectionTitle"                                      => "Data protection and freedom on the Internet",
    "vpn.antidetect.protectionText"                                       => "WADE browser provides high anonymity and privacy on the Internet. Our browser blocks the ability to track your online activities using a unique fingerprint for each profile. The browser provides blocking and restriction protection that allows you to work freely online without obstacles. Be confident in preserving your privacy and digital life online, especially if you"re not technically proficient and don"t know how to properly protect your data.",
    "vpn.antidetect.trialTitle"                                           => "Get a 1-day trial period",
    "vpn.antidetect.trialText"                                            => "Test all browser features with our trial plan!",
    "vpn.antidetect.usePossibilitiesTitle"                                => "Why choose the WADE browser",
    "vpn.antidetect.usePossibilitiesText"                                 => "Advantages that make WADE special",
    "vpn.antidetect.usePossibilitiesBlockTitle1"                          => "No restrictions",
    "vpn.antidetect.usePossibilitiesBlockText1"                           => "Restrictions on the number of running profiles depend only on your computer resources.",
    "vpn.antidetect.usePossibilitiesBlockTitle2"                          => "Quick Setup",
    "vpn.antidetect.usePossibilitiesBlockText2"                           => "Create a profile quickly and easily with one click and start working instantly",
    "vpn.antidetect.usePossibilitiesBlockTitle3"                          => "Profile anonymity",
    "vpn.antidetect.usePossibilitiesBlockText3"                           => "Profile settings are changing completely and securely, leaving no traces. The real parameters of your device cannot be determined.",
    "vpn.antidetect.usePossibilitiesBlockTitle4"                          => "Windows, MacOS and Linux",
    "vpn.antidetect.usePossibilitiesBlockText4"                           => "WADE works on all popular operating systems",
    "vpn.antidetect.usePossibilitiesBlockTitle5"                          => "Checker bypass",
    "vpn.antidetect.usePossibilitiesBlockText5"                           => "Browser successfully passes validation by well-known checkers such as Pixelscan, BrowserLeaks, CreepJS, and IP-API",
    "vpn.antidetect.usePossibilitiesBlockTitle6"                          => "Technical support",
    "vpn.antidetect.usePossibilitiesBlockText6"                           => "The Whoer team provides fast and professional technical support to users",
    "vpn.antidetect.downloadBrowserTitle"                                 => "Download Browser",
    "vpn.antidetect.downloadBrowserText"                                  => "The browser works on 64-bit Windows 10 and up, as well as macOS and Linux",
    "vpn.antidetect.downloadForWindows"                                   => "Download for Windows",
    "vpn.antidetect.downloadForMac"                                       => "Download for MacOS",
    "vpn.antidetect.downloadForLinux"                                     => "Download for Linux",
    "vpn.antidetect.tariffsTitle"                                         => "Tariffs",
    "vpn.antidetect.mostPopularTariff"                                    => "The most popular tariff",
    "vpn.antidetect.accounts:"                                            => "Accounts:",
    "vpn.antidetect.users:"                                               => "Users:",
    "vpn.antidetect.duration:"                                            => "Period:",
    "vpn.antidetect.everyMount"                                           => "Every month",
    "vpn.antidetect.mounth"                                               => "month",
    "vpn.antidetect.mounths"                                              => "mounths",
    "vpn.antidetect.year"                                                 => "year",
    "vpn.antidetect.tariffStarter"                                        => "Starter",
    "vpn.antidetect.tariffAdvanced"                                       => "Advanced",
    "vpn.antidetect.tariffUltimate"                                       => "Ultimate",
    "vpn.antidetect.btnPay"                                               => "Download & Pay",
    "vpn.antidetect.FAQ"                                                  => "FAQ",
    "vpn.antidetect.FAQTitle1"                                            => "Can I run multiple profiles at once and work on them?",
    "vpn.antidetect.FAQText1"                                             => "Yes. The browser allows you to run multiple profiles at the same time.",
    "vpn.antidetect.FAQTitle2"                                            => "Can I use the same account on 2 or more devices?",
    "vpn.antidetect.FAQText2"                                             => "Multiple members can be added under the same account and can also log in with different browsers.",
    "vpn.antidetect.FAQTitle3"                                            => "What settings can I customize in the browser?",
    "vpn.antidetect.FAQText3"                                             => "You can customize almost all of the available options.",
    "vpn.antidetect.FAQTitle4"                                            => "How often do you update your browser? Do you take user feedback into account when updating it?",
    "vpn.antidetect.FAQText4"                                             => "The browser is continuously improving. We carefully analyze all customer requests. We take the most topical ones to work right away.",
    "vpn.antidetect.FAQTitle5"                                            => "What OS does your browser work on?",
    "vpn.antidetect.FAQText5"                                             => "The browser works on all popular operating systems: Windows, Linux, macOS (including M1 processors)",
    "vpn.antidetect.FAQTitle6"                                            => "What payment methods do you accept?",
    "vpn.antidetect.FAQText6"                                             => "You can pay for your subscription using cryptocurrencies, bank cards, Paypal, Qiwi, and other payment systems",
    "vpn.antidetect.FAQTitle7"                                            => "What guarantee is there that the account won"t get banned? How exactly do you change digital fingerprint?",
    "vpn.antidetect.FAQText7"                                             => "No one can give you a 100% guarantee, but we actively use our browser for various purposes and can confirm the highest degree of anonymity.",
`;

const russianFileContent = `
    "vpn.antidetect.Banner1Search"                                        => "Поиск",
    "vpn.antidetect.Banner1Profiles"                                      => "Профили",
    "vpn.antidetect.Banner1Groups"                                        => "Группы",
    "vpn.antidetect.Banner1Trash"                                         => "Корзина",
    "vpn.antidetect.Banner1ProxyList"                                     => "Список прокси",
    "vpn.antidetect.Banner1Presets"                                       => "Предустановки",
    "vpn.antidetect.Banner1Users"                                         => "Пользователи",
    "vpn.antidetect.Banner1Settings"                                      => "Настройки",
    "vpn.antidetect.Banner1Payments"                                      => "Платежи",
    "vpn.antidetect.Banner1Presets"                                       => "Предустановки",
    "vpn.antidetect.Banner1Categories"                                    => "Категории",
    "vpn.antidetect.Banner1AddCategory"                                   => "Добавить категорию",
    "vpn.antidetect.Banner1CreateNewCategory"                             => "Создайте новую категрию, чтобы устанавилвать закладки и расширения",
    "vpn.antidetect.Banner1Bookmark"                                      => "Закладки",
    "vpn.antidetect.Banner1AddBookmark"                                   => "Добавить закладку",
    "vpn.antidetect.Banner1AddbookmarksText"                              => "Добавьте закладки, чтобы иметь быстрый доступ при создании профилей",
    "vpn.antidetect.Banner1Extensions"                                    => "Расширения",
    "vpn.antidetect.Banner1AddExtension"                                  => "Добавить расширение",
    "vpn.antidetect.Banner1AddSomeText"                                   => "Добавьте несколько, чтоб вам не приходилось устанавливать их вручную",
    "vpn.antidetect.Banner2Fingerprint"                                   => "Спрячте свой отпечаток",
    "vpn.antidetect.Banner2MaxPass"                                       => "Максимальная проходимость",
    "vpn.antidetect.Banner3LogIn"                                         => "Войти",
    "vpn.antidetect.Banner3Text"                                          => "Вы должны войти в систему, чтобы получить вдоступ к возможностям приложения",
    "vpn.antidetect.Banner3email"                                         => "Ваш E-mail",
    "vpn.antidetect.Banner3Password"                                      => "Пароль",
    "vpn.antidetect.Banner3StaySystem"                                    => "Оставаться в системе",
    "vpn.antidetect.Banner3LoginBtn"                                      => "Войти",
    "vpn.antidetect.title"                                                => "WADE браузер - доступ в интернет без блокировок и ограничений",
    "vpn.antidetect.title1"                                               => "WADE браузер - доступ в интернет без блокировок и ограничений",
    "vpn.antidetect.description"                                          => "Управляйте своей цифровой жизнью, работайте и оставайтесь незаметными в интернете, с помощью антидетект технологий браузера",
    "vpn.antidetect.checkbox1"                                            => "Неограниченное количество профилей",
    "vpn.antidetect.checkbox2"                                            => "Быстрая смена фингерпринта",
    "vpn.antidetect.checkbox3"                                            => "Анонимность и обход блокировок",
    "vpn.antidetect.checkbox4"                                            => "Поддержка командной работы",
    "vpn.antidetect.downloadFor"                                          => "Скачать для",
    "vpn.antidetect.earnTitle"                                            => "Зарабатывайте в Интернете безопасно и анонимно",
    "vpn.antidetect.earnText"                                             => "Забудьте о блокировках аккаунтов и ограничениях в заработке, используя браузер в различных сферах своей деятельности. Уникальные цифровые отпечатки гарантируют изоляцию профилей друг от друга и обеспечивают свободное и безопасное использование сети.",
    "vpn.antidetect.earnSliderTitle1"                                     => "Арбитраж трафика",
    "vpn.antidetect.earnSliderText1"                                      => "Управляйте неограниченным количеством аккаунтов в социальных сетях и других платформах",
    "vpn.antidetect.earnSliderTitle2"                                     => "E-commerce",
    "vpn.antidetect.earnSliderText2"                                      => "Увеличивайте доход и создавайте аккаунты на популярных платформах, таких как Amazon, Avito, eBay и многих других",
    "vpn.antidetect.earnSliderTitle3"                                     => "Bounty & Airdrop",
    "vpn.antidetect.earnSliderText3"                                      => "Выполняйте необходимые действия в сети и получайте криптовалюты бесплатно, используя разные профили",
    "vpn.antidetect.earnSliderTitle4"                                     => "Веб-скрейпинг",
    "vpn.antidetect.earnSliderText4"                                      => "Автоматизируйте сбор и анализ данных, не опасаясь блокировок. Экономьте физи-ческие и виртуальные ресурсы",
    "vpn.antidetect.earnSliderTitle5"                                     => "Бонусхантинг",
    "vpn.antidetect.earnSliderText5"                                      => "Высокий уровень анонимности при охоте за бонусами, предлагаемыми казино или букмекерскими площадками",
    "vpn.antidetect.6advantagesTitle"                                     => "Преимущества WADE браузера",
    "vpn.antidetect.advantagesTitle1"                                     => "Уникальность профилей",
    "vpn.antidetect.advantagesText1"                                      => "Проходите любые проверки на платформах, таких как pixelscan, amiunique, creepjs используя уникальный фингерпринт для каждого профиля",
    "vpn.antidetect.advantagesTitle2"                                     => "Командная работа",
    "vpn.antidetect.advantagesText2"                                      => "Контролируйте доступ к профилям, настраивайте разрешения, обеспечивайти синхронизацию в команде и автоматизируйте бизнес-процессы",
    "vpn.antidetect.advantagesTitle3"                                     => "Синхронизация",
    "vpn.antidetect.advantagesText3"                                      => "С применением облачных технологии, все данные профилей автоматически синхронизируются, позволяя получить доступ к ним с любого вашего устройства",
    "vpn.antidetect.advantagesTitle4"                                     => "Группы",
    "vpn.antidetect.advantagesText4"                                      => "Распределяйте профили по группам и выдавайте доступы к ним определенным пользователям, обеспечивая максимальный уровень безопасности",
    "vpn.antidetect.advantagesTitle5"                                     => "Категории",
    "vpn.antidetect.advantagesText5"                                      => "Оптимизируйте рабочий процесс - создавайте множество категории профилей, добавляя закладки и расширения к ним",
    "vpn.antidetect.advantagesTitle6"                                     => "API и Автоматизация",
    "vpn.antidetect.advantagesText6"                                      => "Автоматизируйте любые повторяющиеся задачи благодаря внедрению API для разработчиков, и автоматизации для Selenium ",
    "vpn.antidetect.protectionTitle"                                      => "Защита данных и свобода в интернете",
    "vpn.antidetect.protectionText"                                       => "WADE браузер обеспечивает высокую анонимность и конфиденциальность в интернете. Наш браузер блокирует возможность отслеживания ваших действий в сети, используя уникальный фингерпринт для каждого профиля. Браузер обеспечивает защиту от блокировок и ограничений, что позволяет свободно работать в сети без препятствий. Будьте уверены в сохранении своей конфиденциальности и приватности цифровой жизни в интернете, особенно, если вы не имеете технического опыта и не знаете, как правильно защитить свои данные.",
    "vpn.antidetect.trialTitle"                                           => "Получите пробный период на 1 день",
    "vpn.antidetect.trialText"                                            => "Протестируйте все функции браузера используя триальный тариф!",
    "vpn.antidetect.usePossibilitiesTitle"                                => "Почему выбирают WADE браузер",
    "vpn.antidetect.usePossibilitiesText"                                 => "Преимущества, которые делают WADE особенным",
    "vpn.antidetect.usePossibilitiesBlockTitle1"                          => "Отсутствие ограничений",
    "vpn.antidetect.usePossibilitiesBlockText1"                           => "Ограничения на количество запущенных профилей зависят только от ресурсов вашего компьютера.",
    "vpn.antidetect.usePossibilitiesBlockTitle2"                          => "Быстрая настройка",
    "vpn.antidetect.usePossibilitiesBlockText2"                           => "Создавайте профиль быстро и легко с помощью одного клика и начинайте работу мгновенно",
    "vpn.antidetect.usePossibilitiesBlockTitle3"                          => "Анонимность профиля",
    "vpn.antidetect.usePossibilitiesBlockText3"                           => "Настройки профиля изменяются полностью и безопасно, не оставляя следов. Реальные параметры вашего устройства определить невозможно.",
    "vpn.antidetect.usePossibilitiesBlockTitle4"                          => "Windows, MacOS и Linux",
    "vpn.antidetect.usePossibilitiesBlockText4"                           => "WADE работает на всех популярных операционных системах",
    "vpn.antidetect.usePossibilitiesBlockTitle5"                          => "Обход чекеров",
    "vpn.antidetect.usePossibilitiesBlockText5"                           => "Браузер успешно проходит проверку на таких известных чекерах, как Pixelscan, BrowserLeaks, CreepJS и IP-API",
    "vpn.antidetect.usePossibilitiesBlockTitle6"                          => "Техническая поддержка",
    "vpn.antidetect.usePossibilitiesBlockText6"                           => "Команда Whoer предоставляет быструю и профессиональную техническую поддержку пользователей",
    "vpn.antidetect.downloadBrowserTitle"                                 => "Скачать браузер",
    "vpn.antidetect.downloadBrowserText"                                  => "Браузер работает на 64-разрядных ОС Windows 10 и выше, а также macOS и Linux",
    "vpn.antidetect.downloadForWindows"                                   => "Скачать для Windows",
    "vpn.antidetect.downloadForMac"                                       => "Скачать для MacOS",
    "vpn.antidetect.downloadForLinux"                                     => "Скачать для Linux",
    "vpn.antidetect.tariffsTitle"                                         => "Тарифы",
    "vpn.antidetect.mostPopularTariff"                                    => "Самый популярный тариф",
    "vpn.antidetect.tariffStarter"                                        => "Starter",
    "vpn.antidetect.tariffAdvanced"                                       => "Advanced",
    "vpn.antidetect.tariffUltimate"                                       => "Ultimate",
    "vpn.antidetect.accounts:"                                            => "Аккаунты:",
    "vpn.antidetect.users:"                                               => "Пользователи:",
    "vpn.antidetect.duration:"                                            => "Длительность:",
    "vpn.antidetect.everyMount"                                           => "Каждый месяц",
    "vpn.antidetect.mounth"                                               => "месяц",
    "vpn.antidetect.mounths"                                              => "месяцев",
    "vpn.antidetect.year"                                                 => "год",
    "vpn.antidetect.btnPay"                                               => "Скачать и оплатить",
    "vpn.antidetect.FAQ"                                                  => "FAQ",
    "vpn.antidetect.FAQTitle1"                                            => "Можно ли запускать сразу несколько профилей одновременно и работать на них?",
    "vpn.antidetect.FAQText1"                                             => "Да. Браузер позволяет запускать множество профилей одновременно.",
    "vpn.antidetect.FAQTitle2"                                            => "Могу ли я использовать одну и ту же учетную запись на 2 или более устройствах?",
    "vpn.antidetect.FAQText2"                                             => "Несколько участников могут быть добавлены под одной учетной записью, а также могут входить в систему в разных браузерах.",
    "vpn.antidetect.FAQTitle3"                                            => "Какие параметры можно настраивать в браузере?",
    "vpn.antidetect.FAQText3"                                             => "Вы можете настраивать практически все доступные параметры.",
    "vpn.antidetect.FAQTitle4"                                            => "Как часто вы обновляете браузер? Учитываете ли вы пожелания пользователей при обновлении?",
    "vpn.antidetect.FAQText4"                                             => "Браузер постоянно развивается. Мы внимательно анализируем все пожелания клиентов. Самые топовые сразу же берем в работу.",
    "vpn.antidetect.FAQTitle5"                                            => "На каких ОС работает ваш браузер?",
    "vpn.antidetect.FAQText5"                                             => "Браузер работает на всех популярных ОС: Windows, Linux, macOS (в том числе на процессорах M1)",
    "vpn.antidetect.FAQTitle6"                                            => "Какие способы оплаты вы принимаете?",
    "vpn.antidetect.FAQText6"                                             => "Вы можете оплатить подписку с помощью криптовалют, банковских карт, Paypal, Qiwi и других платежных систем",
    "vpn.antidetect.FAQTitle7"                                            => "Какие гарантии, что аккаунт не забанят? Как именно вы меняете цифровой отпечаток?",
    "vpn.antidetect.FAQText7"                                             => "Гарантий 100% никто дать не сможет, но мы сами активно используем свой браузер для разных целей и можем подтвердить высочайшую степень анонимности.",
`;


const translationObject = createTranslationObject(englishFileContent, russianFileContent);

// Преобразование объекта в требуемый формат
const formattedTranslations = {};
for (const key in translationObject) {
    formattedTranslations[key] = {
        "en": translationObject[key].en.replace(/"/g, ''),
        "ru": translationObject[key].ru.replace(/"/g, '')
    };
}

console.log(JSON.stringify(formattedTranslations, null, 4));
