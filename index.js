function change() {
    const p = document.getElementById("changeStatement");
    const n = document.forms["myForm"]["fname"].value;
    document.body.style.backgroundColor = 'peru';
    return p.innerHTML = `Hola, ${n}!`;
}

