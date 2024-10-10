
const arrayExample = [
    {
        "typeText": "h1",
        "content": "CONTENT__H1"
    },
    {
        "typeText": "h2",
        "content": "CONTENT__H2"
    },
]

const uniqueTypeTextArray = arrayExample.map((obj, index) => {
    return {
        ...obj,
        typeText: `${obj.typeText}-${index}`
    };
});

const nameSection = 'vpn.for-games.'

// typeText и content это названия столбцов в exel
uniqueTypeTextArray.map(element => {
    // console.log(`"${nameSection}${element.typeText}"`, '=>', `"${element.content}",`)
})


