function print() {
    for(let i=1;i<101;i++){
        if(i.toString().search('3')!==-1){
            console.log('PA')
        }
        else if (i%3===0){
            console.log('PA')
        }
        else {
            console.log(i)
        }
    }
}
print()
