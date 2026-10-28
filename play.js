//сделать блоксхему продумать все вложеннести монжно менять сеттинг
// можно доб перса с которым можно гговорить и взаимодействовать

const inventory = [];
let room = "деревня";

let wizardMet = false // встреча с волшебником
let wizardTrust = 1; //доверие волшебника
let armorOffered = false; // доспехи предложены
let armorGifted = false // доспехи подарены

function showInventory() {
    if (inventory.length === 0) {
        alert("Рюкзак пуст.");
    } else {
        alert("В рюкзаке: " + inventory.join(", "));
    }
}

function askAboutArmor() {
    if (armorGifted) {
        alert("Доспехи я тебе уже отдал. Береги их в бою.");
        return;
    }
    if (armorOffered && !armorGifted) {
        alert("Ты отказался от доспехов. Ты полный дурак.");
        return;
    }

    armorOffered = true;

    const reply = prompt(
        "Выслушай предостережение, рыцарь.\n" +
        "Дракон дышит пламенем, от которого плавится сталь.\n" +
        "Тебе нужны огнеупорные доспехи.\n\n" +
        "1 — Где мне их взять?\n" +
        "2 — Доспехи для трусов\n" +
        "3 — У меня есть свой план"
    );

    if (reply === null) return;

    if (reply === "1") {
        wizardTrust = wizardTrust + 1;
        alert("Возьми доспехи, они спасут тебе жизнь.");
        if (!inventory.includes("огнеупорные доспехи")) {
            inventory.push("огнеупорные доспехи");
        }
        armorGifted = true;
    } else if (reply === "2") {
        wizardTrust = wizardTrust - 2;
        alert("Гордость — плохой советчик.\nДракон не прощает ошибок. Ты умрёшь.");
    } else if (reply === "3") {
        if (wizardTrust >= 2) {
            alert("Ты доказал свою мудрость. Доспехи не помешают, возьми их.");
            if (!inventory.includes("огнеупорные доспехи")) {
                inventory.push("огнеупорные доспехи");
            }
            armorGifted = true;
        } else {
            alert("Поступай по-своему.\nНо помни: без доспехов бой будет коротким.");
        }
    }
}
