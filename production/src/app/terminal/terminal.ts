import { Component, inject } from '@angular/core';
import { ProductionControl } from '../production-control/production-control';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DialogSelect } from '../dialog-select/dialog-select';
import productionOrders from '../../assets/files/production-orders.json'
@Component({
  selector: 'app-terminal', // Nome do componente
  standalone: true, // Componente independente
  imports: [ProductionControl], // Importações necessárias, se houver (Dependências)
  templateUrl: './terminal.html', // Caminho do arquivo HTML
  styleUrl: './terminal.scss', // Caminho do arquivo SCSS
})
export class Terminal {
  
  readonly dialog: MatDialog = inject(MatDialog);

    productionOrders: any[] = productionOrders;

  setProductionOrder() {
    console.log('Production order set!');
    this.openSelectDialog();
  }

  openSelectDialog(): any {
    const dialogRef: MatDialogRef<DialogSelect, any> = this.dialog.open(DialogSelect, {
      width: '950px',
      panelClass: 'custom-dialog',
      data: { dialogTitle: 'Teste dialog', optionsList: this.productionOrders },
    });

    return new Promise((resolve) => {
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      });
    });
  }
}