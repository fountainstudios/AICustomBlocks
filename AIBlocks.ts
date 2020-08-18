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

    //% block="gather data"
    export function data1() {
    /*Random Code*/
    }

    //% block="upload data"
    export function data2() {
    /*Random Code*/
    }

    //% block="label data"
    export function data3() {
    /*Random Code*/
    }

    //% block="historical dataset"
    export function dataset1(): number {
        return 0;
    }

    //% block="current dataset"
    export function dataset2(): number {
        return 0;
    }

    //% block="live dataset"
    export function dataset3(): number {
        return 0;
    }

    //% block="prepare data"
    export function prepare() {
        blocks.place(GRASS, pos(1,1,1));
    }
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

//% color="#8332A8"
namespace AI {

    //% block="%type| machine learning"
    export function onEvent(type: ML, handler: () => void) {
    /*Random Code*/
    }

    //% block="%type| machine learning training"
    export function onEvent1(type: ML, handler: () => void) {
    /*Random Code*/
    }

    //% block="%type| machine learning algorithm with %datatype| dataset"
    export function onEvent2(type: ML, datatype: datasetType, handler: () => void) {
    /*Random Code*/
    }

    //% block="compare %dataset| against %dataset|"
    export function compare(dataset: datasetType, datasetType1: datasetType) {

    }

    //% block="find pattern and %MLaction|"
    export function action(MLaction: actionML) {
    /*Random Code*/
    }

    //% block="set goal to reach broken sensor"
    export function goal() {
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
    
    //% block="train AI"
    export function train() {
    /*Random Code*/
    }

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


}