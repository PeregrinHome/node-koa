module.exports = function (mongoose , dirName) {

    //Удалить или перенести тестовые данные ниже
    const userSchema = new mongoose.Schema({
        email: {
            type:     String,
            required: 'Укажите email', // true for default message
            unique:   'Такой email уже есть' // mongoose-beautiful-unique-validation uses this
        }
    });

    const User = mongoose.model('User', userSchema);
    (async () => {

        await User.create({email: 'pe1twe@gmail.com'});
        await User.create({email: 'pet2we1@gmail.com'});

    })()
        .catch(err => console.error(err))
        .then(() => mongoose.disconnect());

};