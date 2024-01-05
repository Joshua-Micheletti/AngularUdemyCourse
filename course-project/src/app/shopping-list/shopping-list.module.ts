import { NgModule } from "@angular/core";
import { ShoppingListEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports: [
        FormsModule,
        ShoppingListRoutingModule
    ]
})
export class ShoppingListModule {}