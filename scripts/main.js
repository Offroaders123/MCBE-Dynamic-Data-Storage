import { world, system } from "@minecraft/server";

let test = false;

world.beforeEvents.chatSend.subscribe((event) => {
    switch (event.message) {
        case "!test":
            event.cancel = true;
            test = true;
            break;
    }
});

system.runInterval(() => {
    if (test) {
        test = false;
        runTest();
    }
}, 40);

async function runTest() {

}