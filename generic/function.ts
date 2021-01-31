{
    function notNullCheck<T>(args: T | null): T {
        if(args === null) {
            throw new Error('null is not allow');
        }
        return args;
    }

    console.log(notNullCheck(123));
    console.log(notNullCheck('ahha'));
    console.log(notNullCheck(null));
}