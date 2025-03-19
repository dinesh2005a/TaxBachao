body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
    color: #333;
    text-align: center;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.logo {
    width: 60px;
}

h1, h2 {
    color: #d10024;
}

.note {
    font-size: 14px;
    color: gray;
}

.card {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.05);
    background: #ffe3e3;
}

.timer {
    font-weight: bold;
    color: red;
}

.button {
    display: inline-block;
    padding: 8px 15px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    text-decoration: none;
}

.join {
    background: green;
}

.disabled {
    background: gray;
    cursor: not-allowed;
}
