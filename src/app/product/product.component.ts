import {Component, EventEmitter, HostListener, Inject, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/Product';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, public dialog: MatDialog) { }

  @Output()
  outputSelection: EventEmitter<string> = new EventEmitter();

  @Input()
  p: Product;

  ngOnInit(): void {
    if (this.p == null || this.p === undefined){
      this.route.params.subscribe(params => {
        console.log(params.id);
        this.productService.getOne(params.id).then(product => this.p = product);
      });
    }
  }

  @HostListener('click')
  callParent() {
    this.outputSelection.emit(this.p.name);
  }

  delete(){
    this.productService.delete(this.p.id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.delete();
    });
  }

}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
