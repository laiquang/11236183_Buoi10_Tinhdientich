function showInputs() {
    const shape = document.getElementById("shape").value;
    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = ""; // Xóa các trường cũ

    if (shape === "rectangle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="length">Chiều dài:</label>
                <input type="number" id="length" placeholder="Nhập chiều dài" min="0" step="0.1">
            </div>
            <div class="form-group">
                <label for="width">Chiều rộng:</label>
                <input type="number" id="width" placeholder="Nhập chiều rộng" min="0" step="0.1">
            </div>
        `;
    } else if (shape === "circle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="radius">Bán kính:</label>
                <input type="number" id="radius" placeholder="Nhập bán kính" min="0" step="0.1">
            </div>
        `;
    } else if (shape === "triangle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="sideA">Cạnh A:</label>
                <input type="number" id="sideA" placeholder="Nhập cạnh A" min="0" step="0.1">
            </div>
            <div class="form-group">
                <label for="sideB">Cạnh B:</label>
                <input type="number" id="sideB" placeholder="Nhập cạnh B" min="0" step="0.1">
            </div>
            <div class="form-group">
                <label for="sideC">Cạnh C:</label>
                <input type="number" id="sideC" placeholder="Nhập cạnh C" min="0" step="0.1">
            </div>
            <div class="form-group">
                <label for="height">Chiều cao (để tính diện tích):</label>
                <input type="number" id="height" placeholder="Nhập chiều cao" min="0" step="0.1">
            </div>
        `;
    }
}

function calculate() {
    const shape = document.getElementById("shape").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Xóa kết quả trước đó

    if (shape === "rectangle") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            resultDiv.innerHTML = "Dữ liệu không hợp lệ! Vui lòng nhập số hợp lệ.";
        } else {
            const area = length * width;
            const perimeter = 2 * (length + width);
            resultDiv.innerHTML = `Diện tích: ${area} <br> Chu vi: ${perimeter}`;
        }
    } else if (shape === "circle") {
        const radius = parseFloat(document.getElementById("radius").value);
        if (isNaN(radius) || radius <= 0) {
            resultDiv.innerHTML = "Dữ liệu không hợp lệ! Vui lòng nhập số hợp lệ.";
        } else {
            const area = Math.PI * Math.pow(radius, 2);
            const circumference = 2 * Math.PI * radius;
            resultDiv.innerHTML = `Diện tích: ${area.toFixed(2)} <br> Chu vi: ${circumference.toFixed(2)}`;
        }
    } else if (shape === "triangle") {
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);
        const height = parseFloat(document.getElementById("height").value);

        if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || isNaN(height) || sideA <= 0 || sideB <= 0 || sideC <= 0 || height <= 0) {
            resultDiv.innerHTML = "Dữ liệu không hợp lệ! Vui lòng nhập số hợp lệ.";
        } else if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            resultDiv.innerHTML = "Tổng độ dài hai cạnh bất kỳ phải lớn hơn cạnh còn lại.";
        } else {
            const area = 0.5 * sideA * height;
            const perimeter = sideA + sideB + sideC;
            resultDiv.innerHTML = `Diện tích: ${area} <br> Chu vi: ${perimeter}`;
        }
    } else {
        resultDiv.innerHTML = "Vui lòng chọn loại hình và nhập dữ liệu.";
    }
}
