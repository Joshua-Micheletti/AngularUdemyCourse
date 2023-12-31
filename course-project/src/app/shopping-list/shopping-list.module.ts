import { NgModule } from "@angular/core";
import { ShoppingListEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        ShoppingListRoutingModule
    ],
    // providers: [
    //     LoggingService
    // ]
})
export class ShoppingListModule {}