import * as XLSX from 'xlsx';

document.addEventListener('DOMContentLoaded', function() {
    try {
        document.getElementById('input').addEventListener('change', handleFile, false);
        document.getElementById('copyButton').addEventListener('click', copyToClipboard);
        document.getElementById('resetButton').addEventListener('click', resetFields);
        document.getElementById('format').addEventListener('change', setPerlOptions);
        document.getElementById('perl').addEventListener('click', setPerlOptions);
    } catch (error) {
        alert('Error during initialization: ' + error.message);
    }
});

let jsonData = '';
const typeTextColumn = document.getElementById('typeTextColumn').value || 'typeText';
const contentColumn = document.getElementById('contentColumn').value || 'content';
const perlOptions = document.getElementById('perlOptions');

function setPerlOptions() {
    try {
        const formatValue = document.getElementById('format').value;
        if (formatValue === 'perl') {
            perlOptions.classList.remove('hidden');
        } else {
            perlOptions.classList.add('hidden');
        }
    } catch (error) {
        alert('Error in setPerlOptions: ' + error.message);
    }
}

function handleFile(event) {
    try {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            try {
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
            } catch (error) {
                alert('Error in reader.onload: ' + error.message);
            }
        };

        // Читаем файл как бинарные данные
        reader.readAsArrayBuffer(file);
    } catch (error) {
        alert('Error in handleFile: ' + error.message);
    }
}

function generatePerlFormat(typeTextColumn, contentColumn) {
    try {
        const nameSection = 'pageName.'; // Префикс для ключей в Perl
        let perlText = '';

        jsonData.forEach((element, index) => {
            if (element[typeTextColumn] && element[contentColumn]) {
                perlText += `"${nameSection}${element[typeTextColumn]}-${index}" => "${element[contentColumn]}",\n`;
            }
        });

        document.getElementById('output').value = perlText;
    } catch (error) {
        alert('Error in generatePerlFormat: ' + error.message);
    }
}

function generateJsonFormat() {
    try {
        document.getElementById('output').value = JSON.stringify(jsonData, null, 2);
    } catch (error) {
        alert('Error in generateJsonFormat: ' + error.message);
    }
}

function copyToClipboard() {
    try {
        const outputText = document.getElementById('output').value;

        if (outputText) {
            navigator.clipboard.writeText(outputText)
                .then(() => {
                    alert('Text copied successfully!')
                })
                .catch(err => alert('Error copying text: ' + err));
        }
    } catch (error) {
        alert('Error in copyToClipboard: ' + error.message);
    }
}

function resetFields() {
    try {
        document.getElementById('input').value = '';
        document.getElementById('typeTextColumn').value = 'typeText';
        document.getElementById('contentColumn').value = 'content';
        document.getElementById('output').value = '';
        document.getElementById('format').value = 'default';
        jsonData = '';
    } catch (error) {
        alert('Error in resetFields: ' + error.message);
    }
}
