var env = process.env.NODE_ENV || 'development';

console.log('env: ',env);

if(env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/NodeTodoApp';
}
else if(env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/NodeTodoAppTest';
}
else {
    process.env.MONGODB_URI = 'mongodb://heroku_x3h7btp3:t8lcq6ptfgn2v2qdahflssnndp@ds161285.mlab.com:61285/heroku_x3h7btp3';
}