import * as XLSX from 'xlsx';

document.getElementById('input').addEventListener('change', handleFile, false);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

let jsonData = '';

function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        jsonData = XLSX.utils.sheet_to_json(worksheet);

        const uniqueTypeTextArray = jsonData.map((obj, index) => {
            return {
                ...obj,
                typeText: `${obj.typeText}-${index}`
            };
        });

        const nameSection = 'pageName.'

        let perlText = ''

        // typeText и content это названия столбцов в exel
        uniqueTypeTextArray.map(element => {
            perlText = `"${nameSection}${element.typeText}"` + '=>' + `"${element.content}",`
        })

        // JSON text
        const jsonString = JSON.stringify(jsonData, null, 2);

        document.getElementById('output').value = perlText;
    };

    reader.readAsArrayBuffer(file);
}

function copyToClipboard() {
    const outputText = document.getElementById('output').value;

    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert('Copy text success!');
        }).catch(err => {
        console.error('Error copy text: ', err);
    });
}
