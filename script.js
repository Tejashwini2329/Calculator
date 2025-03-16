
        let display = document.getElementById('display');

        function appendToDisplay(value) {
            let lastChar = display.value.slice(-1);
            if (/[+\-*/%]/.test(lastChar) && /[+\-*/%]/.test(value)) return;
            if (value === '.' && display.value.includes('.')) return;
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function backspace() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                if (display.value.includes('/0')) {
                    display.value = 'Cannot divide by zero';
                } else {
                    display.value = eval(display.value);
                }
            } catch {
                display.value = 'Error';
            }
        }

        function calculateSquareRoot() {
            display.value = Math.sqrt(parseFloat(display.value));
        }

        function calculateSquare() {
            display.value = Math.pow(parseFloat(display.value), 2);
        }

        function calculateCube() {
            display.value = Math.pow(parseFloat(display.value), 3);
        }

        function calculateFactorial() {
            let num = parseInt(display.value);
            if (num < 0) {
                display.value = 'Error';
                return;
            }
            let result = 1;
            for (let i = num; i > 0; i--) {
                result *= i;
            }
            display.value = result;
        }

        function calculateLog() {
            display.value = Math.log10(parseFloat(display.value));
        }

        function calculateSin() {
            display.value = Math.sin(parseFloat(display.value) * Math.PI / 180);
        }

        function calculateCos() {
            display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
        }

        function calculateTan() {
            display.value = Math.tan(parseFloat(display.value) * Math.PI / 180);
        }

        document.addEventListener('keydown', function(event) {
            if (/[0-9+\-*/%.]/.test(event.key)) {
                appendToDisplay(event.key);
            } else if (event.key === 'Enter') {
                calculate();
            } else if (event.key === 'Backspace') {
                backspace();
            } else if (event.key === 'Escape') {
                clearDisplay();
            }
        });
    
