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
`;

const russianFileContent = `
    "vpn.antidetect.Banner1Search"                                        => "Поиск",
    "vpn.antidetect.Banner1Profiles"                                      => "Профили",
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

// console.log(JSON.stringify(formattedTranslations, null, 4));
