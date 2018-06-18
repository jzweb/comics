var mongoose =require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+process.env.USERNAME_DB+':'+process.env.PASSWORD_DB+'@ds245240.mlab.com:45240/comics');

var Schema = mongoose.Schema;
var comicSchema = new Schema({
    _id:{type:Number,required:true},
    name:{type:String,required:true},
    likes:{type:Number,required:true}
},{versionKey:false},{collection:'comic'});

var comicData = mongoose.model('comics',comicSchema);

module.exports= comicData;