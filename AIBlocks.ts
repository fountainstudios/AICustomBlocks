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

//% color="#8c800b"
namespace Input{

    //% block="location 1 picture data"
    export function location1PictureData_MT() {
        blocks.place(STONE, world(96, 61, -397));
    }

    //% block="location 2 picture data"
    export function location2PictureData_MT() {
        blocks.place(STONE, world(96, 61, -396));
    }

    //% block="location 3 picture data"
    export function location3PictureData_MT() {
        blocks.place(STONE, world(96, 61, -395));
    }

         //% block="live sensor 1 data"
    export function sensor1_OO() {
        blocks.place(STONE, world(1, 4, 1));
    }

    //% block="live sensor 2 data"
    export function sensor2_OO() {
        blocks.place(STONE, world(1, 4, 2));
    }

    //% block="live sensor 3 data"
    export function sensor3_OO() {
        blocks.place(STONE, world(1, 4, 3));
    }

    //% block="live sensor 4 data"
    export function sensor4_OO() {
        blocks.place(STONE, world(1, 4, 4));
    }

}

//% color="#4C97FF"
namespace Datasets{

    //% block="dataset"
    //% handlerStatement=1
    export function setOfData_MT(handler: () => void) {
        blocks.place(STONE, world(96, 61, -398));
        handler();
    }

    //% block="%type| dataset"
    //% handlerStatement=1
    export function setOfData_OO(type: datasetType, handler: () => void) {
        if(type == 2){
            blocks.place(STONE, world(0, 4, 1));
        }
    handler();
    }

    //%block="current dataset"
    export function currentData():number{
        return 0
    }

    //%block="historical dataset"
    export function historicalData():number{
        return 1
    }

    //%block="live dataset"
    export function liveData():number{
        return 2
    }

}

//% color="#8332A8"
namespace AI {
    
    //% block="machine learning"
    //% handlerStatement=1
    export function ml_MT(handler: () => void) {
        blocks.place(STONE, world(110, 61, -398));
        handler();
    }

    //% block="input dataset"
    export function input_MT() {
    blocks.place(STONE, world(110, 61, -397));
    }
    
    //% block="analyze data"
    export function analyze_MT(){
        blocks.place(STONE, world(110, 61, -396));
    }

    //% block="place markers"
    export function placeMarkers_MT(){
        blocks.place(STONE, world(110, 61, -395));
    }

    //% block="machine learning"
    //% handlerStatement=1
    export function ml_OO(handler: () => void) {
        blocks.place(STONE, world(10, 10, 10)) 
        handler();
    }

    //% block="analyze terrain data"
    export function analyze_OO(){
        blocks.place(STONE, world(10, 11, 10)) 
    }

    //% block="input %blockType|"
    export function input_OO(blockType:number){
        if(blockType == 2){
           blocks.place(STONE, world(10, 12, 10))  
        }
    }

    //% block="generate routes"
    export function genRoutes_OO(){
        blocks.place(STONE, world(10, 13, 10))  
    }

}

//% color="#2d854e"
namespace Goals {

    //% block="Agent reach sensor 1"
    export function reach1_OO() {
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
    export function reach2_OO() {
    blocks.place(STONE, world(3, 4, 2));
    }

    //% block="Agent reach sensor 3"
    export function reach3_OO() {
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
    export function reach4_OO() {
    blocks.place(STONE, world(3, 4, 4));
    }
}


