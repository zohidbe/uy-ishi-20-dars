// Local Storage'dan ma'lumotlarni olish
function getDataFromLocalStorage() {
    const storedData = localStorage.getItem('savedData');
    return storedData ? JSON.parse(storedData) : [];
}

// Local Storage'ga ma'lumotlarni saqlash
function saveDataToLocalStorage(data) {
    localStorage.setItem('savedData', JSON.stringify(data));
}

// Ma'lumotlarni HTML-ga render qilish
function renderData(data) {
    const renderedDataElement = document.getElementById('renderedData');
    renderedDataElement.innerHTML = '';

    if (data.length === 0) {
        renderedDataElement.innerHTML = '<p>Ma\'lumotlar yo\'q</p>';
        return;
    }

    const ulElement = document.createElement('ul');

    data.forEach(item => {
        const liElement = document.createElement('li');
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });

    renderedDataElement.appendChild(ulElement);
}

// Saqlash tugmasi bosilganda ishlayadigan funksiya
function saveData() {
    const inputData = document.getElementById('inputData').value.trim();

    if (inputData !== '') {
        const savedData = getDataFromLocalStorage();
        savedData.push(inputData);
        saveDataToLocalStorage(savedData);
        renderData(savedData);
        document.getElementById('inputData').value = ''; // Inputni tozalash
    }
}

// Saqlangan ma'lumotlarni yuklash va HTML-ga render qilish
window.onload = function () {
    const savedData = getDataFromLocalStorage();
    renderData(savedData);
};
