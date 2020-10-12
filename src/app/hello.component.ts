import { Component, Input } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
    selector: 'hello',
    template: `
        <h1>Hello {{name}}!</h1>
        <button (click)="retriveCommandHandler()"> Retrive Command </button>
        <br>
        <br>
        <button (click)="dispatchErrorhandler()"> Dispatch Error </button>
        <br>
        <br>
        <button (click)="dispatchErrorCallbackHandler()"> Dispatch Error Callback </button>
    `,
    providers: [
        HelloService
    ],
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
    @Input() name: string;

    constructor(
        private helloService: HelloService
    ) {}

    retriveCommandHandler() {
        this.helloService.retriveCommand({
            param1: 'number 1',
            param2: 'number 2'
        });
    }

    dispatchErrorhandler() {
        this.helloService.execError();
    }

    dispatchErrorCallbackHandler() {
        this.helloService.execErrorCallback();
    }
}
