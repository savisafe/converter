import * as XLSX from 'xlsx';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('input').addEventListener('change', handleFile, false);
    document.getElementById('copyButton').addEventListener('click', copyToClipboard);
    document.getElementById('resetButton').addEventListener('click', resetFields);
});

let jsonData = '';
const typeTextColumn = document.getElementById('typeTextColumn').value || 'typeText';
const contentColumn = document.getElementById('contentColumn').value || 'content';

function handleFile(event) {
    const file = event.target.files[0]; // Получаем загруженный файл
    const reader = new FileReader(); // Создаем объект FileReader для чтения файла

    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result); // Читаем содержимое файла как массив байтов
        const workbook = XLSX.read(data, { type: 'array' }); // Преобразуем байты в книгу Excel
        const sheetName = workbook.SheetNames[0]; // Берем первое имя листа
        const worksheet = workbook.Sheets[sheetName]; // Получаем первый лист
        jsonData = XLSX.utils.sheet_to_json(worksheet); // Преобразуем лист в JSON

        const format = document.getElementById('format').value;

        if (format === 'perl') {
            generatePerlFormat(typeTextColumn, contentColumn);
        } else if (format === 'json') {
            generateJsonFormat();
        }
    };

    // Читаем файл как бинарные данные
    reader.readAsArrayBuffer(file);
}

function generatePerlFormat(typeTextColumn, contentColumn) {
    const nameSection = 'pageName.'; // Префикс для ключей в Perl
    let perlText = '';

    jsonData.forEach((element, index) => {
        if (element[typeTextColumn] && element[contentColumn]) {
            perlText += `"${nameSection}${element[typeTextColumn]}-${index}" => "${element[contentColumn]}",\n`;
        }
    });

    document.getElementById('output').value = perlText;
}

function generateJsonFormat() {
    document.getElementById('output').value = JSON.stringify(jsonData, null, 2);
}

function copyToClipboard() {
    const outputText = document.getElementById('output').value;

    if (outputText) {
        navigator.clipboard.writeText(outputText)
            .then(() => alert('Text copied successfully!'))
            .catch(err => console.error('Error copying text: ', err));
    } else {
        alert('There is no text to copy!');
    }
}

function resetFields() {
    document.getElementById('input').value = '';
    document.getElementById('typeTextColumn').value = 'typeText';
    document.getElementById('contentColumn').value = 'content';
    document.getElementById('output').value = '';
    document.getElementById('format').value = 'perl';
    jsonData = '';
}
