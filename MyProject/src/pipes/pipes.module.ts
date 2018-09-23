import {NgModule} from '@angular/core';
import {MyPipe} from './my/my';
import {MypipePipe} from './mypipe/mypipe';

@NgModule({
    declarations: [
        MyPipe,
        MypipePipe
    ],
    imports: [],
    exports: [
        MyPipe,
        MypipePipe
    ]
})
export class PipesModule {
}
