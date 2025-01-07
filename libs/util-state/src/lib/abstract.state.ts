import { BehaviorSubject, Observable } from 'rxjs';

export abstract class AbstractState<S, M> {
  protected abstract _state: BehaviorSubject<S>;

  public abstract getState(id?: string): Observable<M>;
  public abstract setState(state: M): void;
  public abstract snapshot(id?: string): void;
  public abstract reset(id?: string): void;
}
