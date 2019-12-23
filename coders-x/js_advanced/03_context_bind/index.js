var dog  = {
    name: 'cat',
    say: function(){
        console.log('My name is', this.name);
    }
};

var cat = {
    name: 'dog'
};

dog.say();

var func1 = dog.say;
var func2 = dog.say.bind(cat);
var func3 = dog.say.bind(dog);

func1();
func2();
func3();
