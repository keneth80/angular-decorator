import { Injectable } from '@angular/core';
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

    @Catch(Error, (error) => {alert('Error => ' + JSON.stringify(error))})
    execError() {
        this.tempObj.exec();
    }
}