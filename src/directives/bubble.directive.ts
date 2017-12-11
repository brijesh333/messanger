import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ selector: '[bubbleShadow]' })

export class BubbleShadow implements AfterViewInit{
    constructor(private elRef: ElementRef) {
    }
    ngAfterViewInit(): void {
        this.elRef.nativeElement.style.color = 'blue';
        this.elRef.nativeElement.style.fontSize = '20px';
    }
}