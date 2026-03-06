function GenerateRC() {
    Bbox = getbox()
}

function ResetRC() {
    resetbox()
}

function getbox() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let boxId = `box-${i + 1}:${j + 1}`;
            Ccolor = generateHex()
            document.getElementById(boxId).style.backgroundColor = Ccolor;
        }
    }
}

function generateHex() {
    const zeroOrOne = Math.floor(Math.random() * 2);
    /*if (zeroOrOne === 0) {
        return "#ffffff0e";
    }

    else {
        */
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
    //}
}

function resetbox() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let boxId = `box-${i + 1}:${j + 1}`;
            document.getElementById(boxId).style.backgroundColor = "#ffffff0e";
        }
    }
}