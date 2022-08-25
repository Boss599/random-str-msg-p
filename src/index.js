const messages=[
    "The Beatles","The Rolling Stones","U2","Pink Floyd","Led Zeppelin","","The Who","Nirvana","The Velvet Underground","The Doors","The Police","Guns N Roses", "Queen",
];

const funnyCommit=()=>{
    const message=messages[Math.floor(Math.random()*messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}
module.exports={
    funnyCommit
};