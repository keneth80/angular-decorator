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

    @Catch(Error, (error) => {alert('Error' + error.message)})
    // @CatchAll
    execError() {
        this.tempObj.exec();
    }
}