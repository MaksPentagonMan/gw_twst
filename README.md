## Запуск

1. **Клонуйте репозиторій**
   ```bash
   git clone <URL_РЕПОЗИТОРІЮ>
   cd gw_test
   ```

2. **Створіть віртуальне середовище**
   ```bash
   py -m venv venv
   source venv\Scripts\activate  # bush
   ```

3. **Встановіть залежності**
   ```bash
   pip install -r requirements.txt
   ```

4. **Запустіть проект**
   ```bash
   py manage.py runserver
   ```

5. **Відкрийте браузер**
   
   Перейдіть на http://127.0.0.1:8000/

## Технології1

- **Backend**: Django 5.2.5
- **Frontend**: HTML, CSS, JavaScript
- **Python**: 3.13.3
## API

- `GET /` - Головна сторінка
- `GET /search/?query=<запит>` - Пошук продуктів
---

## Старт фронта

1. **Встановлення залежностей**
```bash
   npm i 
```

2. **Запуск Таілвінда**
```bash
  npm run watch:css
```