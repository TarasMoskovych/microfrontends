import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { Observable } from 'rxjs';
import { IPagination, ISort, IUser, UsersService } from './services/users.service';

@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
  imports: [
    CommonModule,
    NgbModule,
    ChartsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  chartOptions: ChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: {
      display: false,
    },
  };
  users$!: Observable<IUser[]>;
  sort$!: Observable<ISort>;
  pagination$!: Observable<IPagination>;

  constructor(public readonly usersService: UsersService) { }

  get countryUrl(): string {
    return this.usersService.countryUrl;
  }

  get countriesRows(): string {
    return `repeat(${Math.ceil(Object.keys(this.usersService.byCountries).length / 2)}, 1fr)`;
  }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
    this.sort$ = this.usersService.getSort();
    this.pagination$ = this.usersService.getPagination();
  }

  onSort(sort: ISort): void {
    this.usersService.sortUsers(sort);
  }

  onGoToPage(page: number | string): void {
    this.usersService.goToPage(page as number);
  }

  onGoToPreviousPage(): void {
    this.usersService.goToPreviousPage();
  }

  onGoToNextPage(): void {
    this.usersService.goToNextPage();
  }

  onItemsPerPageChange(value: number | string): void {
    this.usersService.itemsPerPageChange(value);
  }
}
