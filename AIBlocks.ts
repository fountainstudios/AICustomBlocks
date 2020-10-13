enum datasetType {
    //% block="historical"
    historical = 0,
    //% block="current"
    current = 1,
    //% block="live"
    live = 2
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

    //% block="location 1 picture data"
    export function location1PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="location 2 picture data"
    export function location2PictureData_MT() {
        blocks.place(STONE, world(96, 61, -396));
    }

    //% block="location 2 picture data"
    export function location2PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="location 3 picture data"
    export function location3PictureData_MT() {
        blocks.place(STONE, world(96, 61, -395));
    }

    //% block="location 3 picture data"
    export function location3PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="live sensor 1 data"
    export function sensor1_OO() {
        blocks.place(STONE, world(96, 61, -395));
    }

    //% block="live sensor 2 data"
    export function sensor2_OO() {
        agent.move(FORWARD, 24)
        agent.turnRight()
        agent.move(FORWARD, 7)
        agent.move(DOWN, 12)

        agent.teleport(world(679, 66, 96), 180)
    }

    //% block="live sensor 3 data"
    export function sensor3_OO() {
        blocks.place(STONE, world(96, 61, -395));
    }

    //% block="live sensor 4 data"
    export function sensor4_OO() {
        agent.move(FORWARD, 44)
        agent.turnRight()
        agent.move(FORWARD, 28)
        agent.move(DOWN, 12)

        agent.teleport(world(679, 66, 96), 180)
    }

    //% block="trap camera 1 data"
    export function trap1_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="trap camera 2 data"
    export function trap2_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="trap camera 3 data"
    export function trap3_PR() {
        agent.move(FORWARD, 2)
    }

}

//% color="#4C97FF"
namespace Datasets{

    //% block="make dataset"
    //% handlerStatement=1
    export function setOfData_MT(handler: () => void) {
        blocks.place(STONE, world(96, 61, -398));
        handler();
    }

    //% block="make dataset"
    //% handlerStatement=1
    export function setOfData_MTB(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="make %type| dataset"
    //% handlerStatement=1
    export function setOfData_OO(type: datasetType, handler: () => void) {
        if(type == 2){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="make %type| dataset"
    //% handlerStatement=1
    export function setOfData_PR(type: datasetType, handler: () => void) {
        if(type == 0){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="extract patterns"
    export function extractPatterns_PR() {
        agent.move(LEFT, 4)
    }

    //%block="current dataset"
    export function currentData():number{
        return 0
    }

    //%block="historical dataset"
    export function historicalData():number{
        return 0
    }

    //%block="live dataset"
    export function liveData():number{
        let i = 2
        return i
    }

    //% block="input dataset"
    export function input_MT() {
    blocks.place(STONE, world(110, 61, -397));
    }

    //% block="input dataset"
    export function input_MTB() {
    agent.move(FORWARD, 2)
    }

    //% block="input datasets"
    export function input_PR() {
    agent.move(RIGHT, 2)
    }

    //% block="input %type|"
    export function input_OO(type: datasetType){
        if(type == 2){
           agent.move(FORWARD, 3)
        }
    }

    //% block="compare %type0| dataset against %type1|"
    //% handlerStatement=1
    export function compare_PR(type0: datasetType, type1: datasetType) {
        if(type0==1 && type1==0){
            agent.move(FORWARD, 2)
        }
    }

}

//% color="#8332A8"
namespace AI {

    //% block="unsupervised machine learning"
    //% handlerStatement=1
    export function ml_MT(handler: () => void) {
        blocks.place(STONE, world(110, 61, -398));
        handler();
    }

    //% block="unsupervised machine learning"
    //% handlerStatement=1
    export function ml_MTB(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="semi-supervised machine learning"
    //% handlerStatement=1
    export function ml_PR(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }
    
    //% block="analyze data"
    export function analyze_MT(){
        blocks.place(STONE, world(110, 61, -396));
    }

    //% block="analyze data"
    export function analyze_MTB(){
        agent.move(LEFT, 3)
    }

    //% block="machine learning"
    //% handlerStatement=1
    export function ml_OO(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="autonomous navigation algorithm"
    //% handlerStatement=1
    export function ml_OO2(handler: () => void) {
        agent.move(DOWN, 5)
        handler();
    }

    //% block="analyze terrain data"
    export function analyze_OO(){
        agent.move(LEFT, 1)
    }

    //% block="generate routes"
    export function genRoutes_OO(){
        agent.move(RIGHT, 2)
    }

    //% block="analyze pattern data"
    export function analyze_PR(){
        agent.move(LEFT, 3)
    }

}

//% color="#2d854e"
namespace Output {

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

    //% block="show locations"
    export function showLocations_MT(){
        blocks.place(STONE, world(110, 61, -395));
    }

    //% block="show locations"
    export function showLocations_MTB(){
        agent.move(RIGHT, 2)
    }

    //% block="locate ocelots"
    export function locateOcelots_PR(){
        agent.move(RIGHT, 4)
    }
}

//% color="#ED82B6"
namespace Test{

    //% block="test loop"
    //% handlerStatement=1
    export function testLoop(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
        handler();
        }
    }

    //%block="test moves"
    export function testMoves(){
        agent.move(FORWARD, 2)
        agent.turn(TurnDirection.Left)
        agent.move(FORWARD, 2)
    }
}


