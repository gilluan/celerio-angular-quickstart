//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-angular:web/src/app/support/paging.ts.p.vm
//
import {LazyLoadEvent} from 'primeng/primeng';

export class PageResponse<E> {
    constructor(public totalPages : number,
                public totalElements : number,
                public content : E[]) { }

    // remove the passed element from the content array.
    remove(element : E) {
        let indexToRemove : number = this.content.indexOf(element);
        this.content.splice(indexToRemove, 1);
        this.totalElements = this.totalElements - 1;
    }
}

export class PageRequestByExample<E> {
    constructor(public example : E,
                public lazyLoadEvent : LazyLoadEvent) { }
}
