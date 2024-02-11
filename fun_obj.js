const course = {
    title : 'full',
    author : 'programming hero',
    credit : '3',
}

function me(obj){
    return `I am now in ${obj.title} courses in ${obj.author} which have ${obj.credit} ${obj.credit}`
}

console.log(me(course))