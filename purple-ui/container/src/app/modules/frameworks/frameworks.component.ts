import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, Subscription } from 'rxjs';
import { RemoteData } from 'src/app/utils';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksComponent implements OnInit, OnDestroy {
  private readonly data = new BehaviorSubject<RemoteData | null>(null);
  private readonly subscription = new Subscription();

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  get data$(): Observable<any> {
    return this.data.asObservable();
  }

  ngOnInit(): void {
    this.data.next(this.getRemoteData());

    this.subscription.add(
      this.router.events
        .pipe(filter((event: Event) => event instanceof NavigationEnd))
        .subscribe(() => this.data.next(this.getRemoteData())),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getRemoteData(): RemoteData {
    return this.route.firstChild?.snapshot.data as RemoteData;
  }
}
