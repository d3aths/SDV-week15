//creating a hashtable for strings

function hash(key, arrayLen) {
    let total = 0
for (let char of key) {
    //map "a" to 1, "b" to 2, "c" to 3 etc
    let value = char.charCodeAt(0) - 96 //dont get this part or any of it really
    total = (total + value) % arrayLen //what does this mean
}
return total
}
hash("pink", 10) //0
hash("orangered", 10) //7
hash("cyan", 10) //3
//what are the commented numbers we're supposed to be getting here


//hash table class
//?????
//set and get methods here would be the same as linked lists.
//probably more understandable once seeing the result to break down what each line of code does
//otherwise just looks like  ???
//i hate loops
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0
        let _PRIME = 31
        for (let i =0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = total * _PRIME + value % this.keyMap.length
        }
        return total
    }
    set(key, value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push(key, value)
    }
    get(key) {
        let index= this._hash(key)
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    keys(){
        let keysArr = []
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }
    values(){
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }
}