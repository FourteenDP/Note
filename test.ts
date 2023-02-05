function asyncHelper(generator) {
    return function () {
        var generatorObj = generator.apply(this, arguments);
        function handle(result) {
            // result => { done: [Boolean], value: [Object] }
            if (result.done) return Promise.resolve(result.value);
            return Promise.resolve(result.value).then(function (res) {
                return handle(generatorObj.next(res));
            }, function (err) {
                return handle(generatorObj.throw(err));
            });
        }
        try {
            return handle(generatorObj.next());
        } catch (ex) {
            return Promise.reject(ex);
        }
    };
}
