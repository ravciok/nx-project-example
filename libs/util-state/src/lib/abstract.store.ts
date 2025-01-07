import { Observable } from 'rxjs';
import { AbstractState } from './abstract.state';

export abstract class AbstractStore {
  protected abstract api: any;
  protected abstract state: AbstractState<any, any>;

  public abstract dispatch<T>(action: T): void;
  public abstract select<T, R>(select: T): Observable<R>;
}
