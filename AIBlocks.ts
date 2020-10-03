enum datasetType {
    //% block="historical"
    historical = 0,
    //% block="current"
    current = 1,
    //% block="live"
    live =  2
}

enum ML {
    //% block="supervised"
    supervised,
    //% block="unsupervised"
    unsupervised,
    //% block="semi-supervised"
    semiSupervised,
    //% block="reinforcment"
    reinforcment
}

enum actionML {
    //% block="classify"
    classify,
    //% block="get prediction"
    getPrediction
}

//% color="#8c800b"
namespace Input{
 
     //% block="live sensor 1 data"
    export function sensor1() {
        blocks.place(STONE, world(1, 4, 1));
    }

    //% block="live sensor 2 data"
    export function sensor2() {
        blocks.place(STONE, world(1, 4, 2));
    }

    //% block="live sensor 3 data"
    export function sensor3() {
        blocks.place(STONE, world(1, 4, 3));
    }

    //% block="live sensor 4 data"
    export function sensor4() {
        blocks.place(STONE, world(1, 4, 4));
    }

    //% block="location 1 picture data"
    export function location1PictureData() {
        blocks.place(STONE, world(96, 61, -397));
    }

    //% block="location 2 picture data"
    export function location2PictureData() {
        blocks.place(STONE, world(96, 61, -396));
    }

    //% block="location 3 picture data"
    export function location3PictureData() {
        blocks.place(STONE, world(96, 61, -395));
    }

}

//% color="#4C97FF"
namespace datasets {

    //% block="%type| dataset"
    export function onEvent(type: datasetType, handle:() => void) {
        if(type == 2){
            player.onChat("start", function() {
                
            })
        }
    }

    //% block="%type| dataset"
    export function onEvent1(handle:() => void) {
        blocks.place(STONE, world(96, 61, -398));
    }

    //% block="label data"
    export function data3() {
    /*Random Code*/
    }

    //% block="historical dataset"
    export function historicalDataset(): number {
        return 0;
    }

    //% block="current dataset"
    export function currentDataset(): number {
        return 1;
    }

    //% block="live dataset"
    export function liveDataset(): number {
        return 2;
    }

}


//% color="#8332A8"
namespace AI {

    //% block="machine learning"
    export function mlOceanObservations(handler: () => void) {
    blocks.place(STONE, world(1, 1, 1));
    }

    //% block="machine learning"
    export function mlMappingTerrain(handler: () => void) {
    blocks.place(STONE, world(110, 61, -398));
    }

    //% block="compare a %value| against a %value1|"
    export function compare1(value:number, value1:number) {
    /*Random Code*/
    }

    //% block="input %value|"
    export function inputOceanObservation(value:number) {
    /*Random Code*/
    }

    //% block="input dataset"
    export function inputMappingTerrain(value:number) {
    /*Random Code*/
    }

    //% block="analyze data"
    export function analyze1(){
        blocks.place(STONE, world(110, 61, -396));
    }

}


//% color="#2d854e"
namespace Goals {
    
    //% block="find pollution location"
    export function pollution() {
    /*Random Code*/
    }

    //% block="find differences"
    export function differences() {
    /*Random Code*/
    }

    //% block="find best planting location"
    export function plantingLocation() {
    /*Random Code*/
    }
    
     //% block="find pattern and classify|"
    export function classify() {
    /*Random Code*/
    }

    //% block="find pattern and get prediction|"
    export function prediction() {
    /*Random Code*/
    }

    //% block="reach broken sensor"
    export function goal() {
    /*Random Code*/
    }

    //% block="Agent reach sensor 1"
    export function reach1() {
    agent.move(FORWARD, 4);
    agent.turn(TurnDirection.Right);
    agent.move(FORWARD, 3);
    agent.destroy(FORWARD);
    agent.collectAll()
    agent.place(FORWARD);
    blocks.place(STONE, world(3, 4, 1));
    agent.teleport(world(0, 4, 0), WEST);
    }

    //% block="Agent reach sensor 2"
    export function reach2() {
    blocks.place(STONE, world(3, 4, 2));
    }

    //% block="Agent reach sensor 3"
    export function reach3() {
    agent.move(FORWARD, 4);
    agent.turn(TurnDirection.Left);
    agent.move(FORWARD, 3);
    agent.destroy(FORWARD);
    agent.collectAll()
    agent.place(FORWARD);
    blocks.place(STONE, world(3, 4, 3));
    agent.teleport(world(0, 4, 0), WEST);
    }

    //% block="Agent reach sensor 4"
    export function reach4() {
    blocks.place(STONE, world(3, 4, 4));
    }
}