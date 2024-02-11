const object = 
{ name: 'rahat' , birthYear: 200,  siteName: 'Facebook'}

const typ = { name: 'maisha' , birthYear: 2002 }


function password(obj){
    const siteName= obj['siteName'];
    const name= obj['name'];
    const date = obj['birthYear'];
    const dateLength = (date.toString().length)

    if(typeof obj !== 'object'){
        return "Please input only objcet"
    }
    if( !siteName || !name || !date || dateLength < 4){
        return 'Invalid input'
    }else{
        var webSiteName = siteName[0].toUpperCase() + siteName.slice(1);
        var userName = name[0].toUpperCase() + name.slice(1);
    }


    let password = webSiteName + '#' + userName + '@' + obj['birthYear']
    return password;

}
const output = password('rab')
console.log(output)
