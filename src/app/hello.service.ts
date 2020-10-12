import { Injectable } from '@angular/core';
import { CatchAll } from './decorator/catch';
import { Catch } from './decorator/catch';
import { Logger } from './decorator/logger';

@Injectable()
export class HelloService {
    private tempObj: any;

    constructor() {
      
    }

    @Logger('retriveCommand')
    retriveCommand(param: any): any {
        param.add = 'added param';
        return param;
    }
    
    @CatchAll
    execError() {
        this.tempObj.exec();
    }

    @Catch(Error, (error) => {alert('Error' + error.message)})
    execErrorCallback() {
        this.tempObj.exec();
    }
}