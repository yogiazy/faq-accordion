const $ = (x) => document.querySelector(x);
const faq = $('#list_faq');

function toggleFAQ(id) {
    $(`#p-${id}`).classList.toggle('hidden');
    $(`#m-${id}`).classList.toggle('hidden');
    $(`#a-${id}`).classList.toggle('hidden');
}

window.onload = function () {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                const n = document.createElement('div');
                n.id = data[i].id;
                n.classList.add('flex', 'flex-col', 'gap-y-4', 'mt-4');
                n.innerHTML = `
                    <div class="flex items-center justify-between gap-x-8">
                        <h2>${data[i].question}</h2>
                        <img src="./assets/images/icon-plus.svg" id="p-${data[i].id}" alt="icon-plus" onclick="toggleFAQ(${data[i].id})">
                        <img src="./assets/images/icon-minus.svg" id="m-${data[i].id}" class="hidden" alt="icon-minus" onclick="toggleFAQ(${data[i].id})">
                    </div>
                    <p id="a-${data[i].id}" class="hidden">${data[i].answer}</p>`;
                faq.appendChild(n);
            }
        })
}