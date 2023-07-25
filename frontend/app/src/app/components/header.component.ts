import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-header',
    template: `
    <header class="p-4 border-b-2 border-black">
        <h1 class="text-4xl text-primary font-black">Intro to Programming</h1>
        <p>Sample Full-Stack Application For The Training Class</p>
    </header>
    `
})
export class HeaderComponent {

}