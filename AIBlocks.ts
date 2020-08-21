enum datasetType {
    //% block="historical"
    historical,
    //% block="current"
    current,
    //% block="live"
    live,
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
    //% block="input photos"
    export function photos(){
    }

    //% block="input arial photos"
    export function Arialphotos(){
    }

    //% block="input weather satelite data"
    export function weatherSatelite(){
    }

    //% block="input ground sensor data"
    export function groundSensor(){
    }

    //% block="input water quality data"
    export function waterquality(){
    }

    //% block="live distance sensor"
    export function distanceSensor(){
    }

    //% block="live video feed"
    export function videoFeed(){
    }
}

//% color="#4C97FF"
namespace datasets {

    //% block="%type| dataset"
    export function onEvent(type: datasetType, handler: () => void) {
        if (type == 1){
            blocks.place(GRASS, pos(1,0,0));
        }else{
            blocks.place(GRASS, pos(2,0,0));
        }
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
        return 0;
    }

    //% block="live dataset"
    export function liveDataset(): number {
        return 0;
    }

}


//% color="#8332A8"
namespace AI {

    //% block="machine learning"
    export function onEvent3(handler: () => void) {
    /*Random Code*/
    }

    //% block="compare a %value| against a %value1|"
    export function compare1(value:number, value1:number) {
    /*Random Code*/
    }

    //% block="input %value|"
    export function compare2(value:number) {
    /*Random Code*/
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
}