type Subscriber<T> = (value: T) => void;

export class Observable<T = unknown> {
  #value: T | undefined;
  #subscribers = new Set<Subscriber<T | undefined>>();

  #unsubscribe(subscriber: Subscriber<T | undefined>) {
    this.#subscribers.delete(subscriber);
  }

  constructor(initialValue?: T) {
    this.#value = initialValue;
  }

  /**
   * get current value
   */
  get value() {
    return this.#value;
  }

  /**
   * publish new values to all the subscribers
   * @param newValue
   */
  next(newValue: T) {
    if (this.#value === newValue) return;
    this.#value = newValue;
    this.#subscribers.forEach(listener => listener?.(this.#value));
  }

  /**
   * subscribe to new values
   * @param subscriber
   * @returns unsubscriber function
   */
  subscribe(subscriber: Subscriber<T | undefined>) {
    this.#subscribers.add(subscriber);
    return () => this.#unsubscribe(subscriber); // will be used inside React.useEffect
  }

  /**
   * destroy all subscribers
   */
  destroy() {
    this.#subscribers.clear();
  }
}
