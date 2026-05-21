function generateNumber() {

    const min = Math.ceil(document.querySelector(".minNumber").value)
    const max = Math.floor(document.querySelector(".maxNumber").value)


    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (max <= min) return alert("Min value cannot exceed max value.")
        else return alert(result)
}