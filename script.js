// === 1. localStorage: Збереження та вивід інфо про систему ===
const info = {
    os: navigator.platform,
    browser: navigator.userAgent,
    language: navigator.language,
    screen: window.screen.width + "x" + window.screen.height
};
localStorage.setItem('userInfo', JSON.stringify(info));

const savedInfo = JSON.parse(localStorage.getItem('userInfo'));
document.getElementById('system-info').innerHTML = 
    `Система: ${savedInfo.os} | Браузер: ${savedInfo.browser} | Екран: ${savedInfo.screen}`;


// === 2. Fetch API: Завантаження коментарів ===
fetch('https://jsonplaceholder.typicode.com/posts/13/comments')
    .then(response => response.json())
    .then(comments => {
        const list = document.createElement('ul');
        list.style.listStyle = "none";
        list.style.padding = "0";

        comments.forEach(comment => {
            const item = document.createElement('li');
            item.style.marginBottom = "15px";
            item.innerHTML = `<strong>${comment.name}</strong><br><small>${comment.body}</small>`;
            list.appendChild(item);
        });
        document.getElementById('comments').appendChild(list);
    });


// === 3. Таймер для форми (1 хвилина) ===
setTimeout(() => {
    document.getElementById('modal').style.display = 'block';
}, 60000); 


// === 4. Перемикач теми ===
const btn = document.createElement('button');
btn.id = 'themeToggle';
btn.innerText = 'Змінити тему';
document.body.appendChild(btn);

btn.onclick = function() {
    document.body.classList.toggle('dark-theme');
};

// Автоматичне перемикання за часом (07:00 - 21:00 денна) 
const hour = new Date().getHours();
if (hour < 7 || hour >= 21) {
    document.body.classList.add('dark-theme');
}