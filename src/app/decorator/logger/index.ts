
export function Logger(title: string) {
    // target: 해당 메서드를 가지고 있는 객체, key: 해당 메서드 명, descriptor: value가 해당 메서드.
    return function (target: any, key: string | symbol, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        if (true) { // environment.production
            descriptor.value = function ( ... args: any[]) {
                for (let i = 0; i < arguments.length; i++) {
                    args[i - 0] = arguments[i];
                }
                const a = args.map((a) => { return JSON.stringify(a); }).join();
                
                const result = original.apply(this, args);
                const r = JSON.stringify(result);
                if (console && console.log) {
                    console.log(title + '(' , a , ')' , (r ? ' => (' + getName(result) + ')' + r : ': void'));
                }
                return result;
            };
        }
        return descriptor;
    };
}

function getName(inputClass: any) {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((<any> inputClass).constructor.toString());
    return (results && results.length > 1) ? results[1] : '';
}
