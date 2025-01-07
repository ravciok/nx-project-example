import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  input,
  computed,
  output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnsConfig } from './ui-table.model';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'lib-ui-table',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinner,
  ],
  templateUrl: './ui-table.component.html',
  styleUrl: './ui-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTableComponent<T> implements AfterViewInit {
  data = input<T[]>([]);
  columns = input<ColumnsConfig>([]);

  rowAction = output<T>();

  displayedColumns = computed(() =>
    this.columns().map((column) => column.property)
  );
  dataSource = computed(() => new MatTableDataSource(this.data()));

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource().paginator = this.paginator;
    this.dataSource().sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource().filter = filterValue.trim().toLowerCase();
    this.dataSource().paginator?.firstPage();
  }

  handleRowAction(row: T) {
    this.rowAction.emit(row);
  }
}
