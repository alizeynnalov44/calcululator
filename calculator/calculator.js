document.addEventListener("DOMContentLoaded", function() {
    const value1 = document.getElementById('value1');
    const value2 = document.getElementById('value2');
    const display = document.getElementById('display');

    function updateDisplay(result) {
        display.textContent = `Nəticə: ${result}`;
    }

    document.getElementById('add').addEventListener('click', function() {
        const sum = parseFloat(value1.value) + parseFloat(value2.value);
        updateDisplay(sum);
    });

    document.getElementById('subtract').addEventListener('click', function() {
        const difference = parseFloat(value1.value) - parseFloat(value2.value);
        updateDisplay(difference);
    });

    document.getElementById('multiply').addEventListener('click', function() {
        const product = parseFloat(value1.value) * parseFloat(value2.value);
        updateDisplay(product);
    });

    document.getElementById('divide').addEventListener('click', function() {
        if (parseFloat(value2.value) !== 0) {
            const quotient = parseFloat(value1.value) / parseFloat(value2.value);
            updateDisplay(quotient);
        } else {
            updateDisplay('Xəta: Sıfıra bölmək olmaz');
        }
    });

    document.getElementById('reset').addEventListener('click', function() {
        value1.value = '';
        value2.value = '';
        updateDisplay(0);
    });
});
