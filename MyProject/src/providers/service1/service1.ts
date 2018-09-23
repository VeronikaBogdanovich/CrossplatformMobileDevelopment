import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class Service1Provider {
    constructor(public http: HttpClient) {
    }

    getData(i: string) {
        if (i == 'Магазины одежды')
            return this.http.get('https://project-android-app.herokuapp.com/getCloths');
        if (i == 'Обувные магазины')
            return this.http.get('https://project-android-app.herokuapp.com/getShoes');
        if (i == 'Ювелирные магазины')
            return this.http.get('https://project-android-app.herokuapp.com/getJev');
        if (i == 'Книжные магазины') {
            return this.http.get('https://project-android-app.herokuapp.com/getBooks')
            // this.callGET('getBooks', (res) => {
            //     console.log(res);
            //     return res ? res : {};
            // })
        }
        if (i == 'Магазины детской одежды')
            return this.http.get('https://project-android-app.herokuapp.com/getKids');
        if (i == 'Магазины косметики и парфюмерии')
            return this.http.get('https://project-android-app.herokuapp.com/getCosm');
        if (i == 'Магазины сувениров')
            return this.http.get('https://project-android-app.herokuapp.com/getSouv');
        if (i == 'Магазины бытовой техники')
            return this.http.get('https://project-android-app.herokuapp.com/getTech');
        if (i == 'Художественные магазины')
            return this.http.get('https://project-android-app.herokuapp.com/getHud');
    }

    // private callGET(url: string, successCallBack: any) {
    //     let concatURL = "http://127.0.0.1:3000/" + url;
    //     this.http.get(concatURL)
    //         .subscribe((res: any) => {
    //             successCallBack(res);
    //         }, (err) => {
    //             console.log(err);
    //         });
    // }
}
